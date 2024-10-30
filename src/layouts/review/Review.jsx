import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "../../assets/image/User.png";
import ReportContent from "../popup/reportContent";
import { useAppContext } from "../../AppProvider";

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

const Review = ({ height, tutor_id }) => {
    const { id } = useAppContext();
    const [reviews, setReviews] = useState([]);
    const [showReportIndex, setShowReportIndex] = useState(null);
    const [showReportContentIndex, setShowReportContentIndex] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/class/feedback/${tutor_id}`);
                const data = await response.json();

                const formattedReviews = data.map((review, index) => ({
                    id: review.feedback_id || index,  // Use review.id if available, otherwise fallback to index for testing
                    rating: review.rating,
                    comment: review.description,
                    username: review.parent_name,
                    avatar: review.parent_avt ? `http://127.0.0.1:8000${review.parent_avt}` : Image,
                    tutor_id: review.tutor_id,
                    class_id: review.class_id
                }));

                setReviews(formattedReviews);
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            }
        };

        fetchReviews();
    }, [tutor_id]);

    const toggleReportMenu = (id) => {
        setShowReportIndex(showReportIndex === id ? null : id);
        setShowReportContentIndex(null);
    };

    const openReportContent = (id) => {
        setShowReportIndex(null);
        setShowReportContentIndex(id);
    };

    return (
        <div className={`grid grid-cols-2 gap-5 ${height} overflow-y-scroll scrollbar scrollbar-thumb-white/30 px-4 pb-6`}>
            {[0, 1].map((col) => (
                <div key={col} className="flex flex-col space-y-5">
                    {reviews
                        .filter((_, index) => index % 2 === col)
                        .map((review) => (
                            <div key={review.id} className="flex flex-col bg-white border-b border-gray-200 rounded-lg px-6 py-4 shadow-xl">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <img src={review.avatar} alt={review.username} className="w-12 h-12 rounded-full" />
                                        <strong className="text-lg font-semibold ml-1">{review.username}</strong>
                                    </div>
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className="mt-2 text-[1.05rem] text-gray-600 font-semibold">{review.comment}</p>
                                <div className="flex w-full justify-between relative">
                                    <p className="mt-3 text-[0.75rem] text-custom_gray">2/10/2024</p>
                                    {id !== review.tutor_id && (
                                        <div>
                                            <i
                                                className={`fa-solid fa-ellipsis text-2xl cursor-pointer hover:text-black transition-all ${showReportIndex === review.id ? 'text-black' : 'text-slate-100'}`}
                                                onClick={() => toggleReportMenu(review.id)}
                                            ></i>

                                            {showReportIndex === review.id && (
                                                <div className="bg-slate-100 absolute -right-6 top-8 p-1 rounded-md cursor-pointer shadow-md">
                                                    <div
                                                        className="flex gap-1 items-center p-1 hover:bg-slate-200 rounded-md text-[0.9rem]"
                                                        onClick={() => openReportContent(review.id)}
                                                    >
                                                        <i className="fa-solid fa-flag"></i>
                                                        <span>Report</span>
                                                    </div>
                                                </div>
                                            )}
                                            {showReportContentIndex === review.id && (
                                                <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
                                            )}
                                            {showReportContentIndex === review.id && (
                                                <div className="fixed inset-0 flex items-center justify-center z-40">
                                                    <ReportContent
                                                        onClose={() => setShowReportContentIndex(null)}
                                                        type='Đánh giá'
                                                        reportedPartyId={id}
                                                        postId={review.id}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                    )}
                                </div>
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
    tutor_id: PropTypes.string.isRequired
};

export default Review;
