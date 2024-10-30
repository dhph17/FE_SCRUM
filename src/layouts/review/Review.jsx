import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "../../assets/image/User.png";

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {Array(fullStars).fill().map((_, i) => (
                <i key={`full-${i}`} className="fas fa-star text-[#FFAC34]"></i>
            ))}
            {halfStar && <i className="fas fa-star-half-stroke text-[#FFAC34]"></i>}
            {Array(emptyStars).fill().map((_, i) => (
                <i key={`empty-${i}`} className="fas fa-star text-gray-300"></i>
            ))}
        </div>
    );
};

const Review = ({ height }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const rawTutorId = localStorage.getItem("id") || "";
                const tutorId = rawTutorId.replace(/-/g, "");

                const response = await fetch(`http://127.0.0.1:8000/api/class/feedback/${tutorId}`);
                const data = await response.json();

                const formattedReviews = data.map((review) => ({
                    rating: review.rating,
                    comment: review.description,
                    username: review.parent_name,
                    avatar: review.parent_avt ? `http://127.0.0.1:8000${review.parent_avt}` : Image,
                }));

                setReviews(formattedReviews);
                console.error("Failed to fetch reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className={`grid grid-cols-2 gap-5 ${height} overflow-y-scroll scrollbar scrollbar-thumb-white/30 px-4`}>
            {[0, 1].map((col) => (
                <div key={col} className="flex flex-col space-y-5">
                    {reviews
                        .filter((_, index) => index % 2 === col)
                        .map((review, index) => (
                            <div key={index} className="flex flex-col bg-white border-b border-gray-200 rounded-lg px-6 py-4 shadow-xl">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <img src={review.avatar} alt={review.username} className="w-12 h-12 rounded-full" />
                                        <strong className="text-lg font-semibold ml-1">{review.username}</strong>
                                    </div>
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className="mt-2 text-[1.05rem] text-gray-600 font-semibold">{review.comment}</p>
                                <p className="mt-3 text-[0.75rem] text-custom_gray">2/10/2024</p>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

Review.propTypes = {
    height: PropTypes.string.isRequired,
};

export default Review;
