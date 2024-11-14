import PropTypes from "prop-types";
import Review from "../review/Review"
import Image from "../../assets/image/User.png";
import { useEffect, useState } from "react";
import axios from "axios";

const ReviewTutor = ({ onClose, tutor_id }) => {
    const [profile, setProfile] = useState()
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const fetchTutorData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/tutors/${tutor_id}/`,
                    {
                        headers: {
                            // Authorization: `Bearer ${sessionToken}`,
                        },
                    }
                );
                const data = response.data;
                console.log(data);
                setProfile(data);
            } catch (error) {
                console.error("Error fetching tutor data:", error);
            }
        };

        fetchTutorData();
    }, []);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md"
            onClick={handleBackgroundClick}
        >
            <div className="bg-gray-200 w-[70%] px-2 py-5">
                <div className="flex items-center gap-3 mb-5 ml-4">
                    <img
                        src={profile?.avatar ? `${import.meta.env.VITE_API_ENDPOINT}${profile.avatar}` : Image}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <p
                        className="font-semibold text-[1.1rem] hover:underline"
                    >{profile?.tutorname || profile?.user?.username}</p>
                </div>
                <Review height='max-h-[450px]' tutor_id={tutor_id} />
                <div className="mt-3 flex w-full justify-end">
                    <button
                        className=" bg-red-500 mr-8 w-[100px] text-white py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
                        onClick={onClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    )
}

ReviewTutor.propTypes = {
    onClose: PropTypes.func,
    tutor_id: PropTypes.string
};

export default ReviewTutor