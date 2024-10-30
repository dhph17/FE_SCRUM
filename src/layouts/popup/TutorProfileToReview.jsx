import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useAppContext } from "../../AppProvider";


const TutorProfileToReview = ({ tutor_id,idPost,idParent, onClose, }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  const { sessionToken } = useAppContext();
console.log("id post",idPost);
    const [feedback, setFeedback] = useState("");
    const [tutorProfile, setTutorProfile] = useState({
        tutor_id: "",
        user: {
            username: "",
            email: "",
            role: "",
        },
        tutorname: "",
        address: "",
        birthdate: "",
        bio_link: "",
        phone_number: "",
        gender: null,
        educational_background: "",
        avatar: "",
    });

    useEffect(() => {
        const fetchTutorProfile = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_ENDPOINT}/api/tutors/${tutor_id}`
                );
                setTutorProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTutorProfile();
    }, [tutor_id]);

    const handleSubmit = async () => {
        try {
            await axios.post(
                "http://127.0.0.1:8000/api/class/feedback/",
                {
                    class_id: idPost, 
                    parent_id: idParent,
                    tutor_id: tutorProfile.tutor_id,
                    rating: rating,
                    description: feedback,
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );
           
            onClose(); 
        } catch (error) {
            console.log("dữ liêu truyền",idPost,idParent,tutor_id,rating,feedback);
            console.log("id post : ",idPost);
            console.log("id parent : ",idParent);
            console.log("rate : ",rating);
            console.log("description : ",feedback);

            console.error("Đã xảy ra lỗi khi gửi đánh giá:", error);
        }
    };
console.log(tutorProfile);
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-8 w-[50%] shadow-lg border-[5px] border-[#002182] border-double">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#002182]">
                    Đánh giá gia sư
                </h2>
                <div className="flex flex-col items-center">
                    {/* Nội dung popup */}
                    <div className="flex flex-col items-center">
                    <div className="flex gap-6">
                        {/* Avar */}
                        <div className="md:mb-0 md:w-1/2 flex flex-col justify-between">
                            <img
                                src={
                                    `${import.meta.env.VITE_API_ENDPOINT}/${tutorProfile.avatar}`
                                }
                                alt="Tutor Avatar"
                                className="rounded-full w-[7rem] h-[7rem] object-cover shadow-lg border-[3px] border-[#002182] self-center"
                            />
                            <div className="flex flex-col space-y-3">
                                <p className="text-lg font-medium flex flex-row">
                                    <strong className="text-nowrap">Số điện thoại:</strong>{" "}
                                    <div className="text-[#002182] ml-5 font-normal">
                                        {tutorProfile.phone_number}
                                    </div>
                                </p>
                                <p className="text-lg font-medium flex flex-row">
                                    <strong className="text-nowrap">Trình độ học vấn:</strong>{" "}
                                    <div className="text-[#002182] ml-5 font-normal text-nowrap">
                                        {tutorProfile.educational_background}
                                    </div>
                                </p>
                                <p className="text-lg font-medium flex flex-row">
                                    <strong>Liên kết:</strong>{" "}
                                    <a
                                        href={tutorProfile.bio_link}
                                        className="text-blue-500 hover:underline ml-5"
                                    >
                                        {tutorProfile.bio_link}
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Info 1 */}
                        <div className="md:w-2/3 ml-8 space-y-3">
                            <p className="text-lg font-medium flex">
                                <strong>Họ và tên:</strong>
                                <p className="text-[#002182] ml-5 font-normal">
                                    {tutorProfile.tutorname}
                                </p>
                            </p>
                            <p className="text-lg font-medium flex flex-row">
                                <strong>Username:</strong>{" "}
                                <div className="text-[#002182] ml-5 font-normal">
                                    {tutorProfile.user.username}
                                </div>
                            </p>
                            <p className="text-lg font-medium flex flex-row">
                                <strong>Ngày sinh:</strong>{" "}
                                <div className="text-[#002182] ml-5 font-normal">
                                    {tutorProfile.birthdate}
                                </div>
                            </p>
                            <p className="text-lg font-medium flex flex-row">
                                <strong>Giới tính:</strong>{" "}
                                <div className="text-[#002182] ml-5 font-normal">
                                    {tutorProfile.gender}
                                </div>
                            </p>
                            <p className="text-lg font-medium flex flex-row">
                                <strong>Địa chỉ:</strong>{" "}
                                <div className="text-[#002182] ml-5 font-normal">
                                    {tutorProfile.address}
                                </div>
                            </p>
                            <p className="text-lg font-medium flex flex-row">
                                <strong>Email:</strong>{" "}
                                <div className="text-[#002182] ml-5 font-normal">
                                    {tutorProfile.user.email}
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="p-8 rounded-lg shadow-lg w-[70%] mt-5 border-2 border-slate-300">
                        <div className="flex space-x-5 mb-4 justify-center">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <svg
                                        key={starValue}
                                        onClick={() => setRating(starValue)}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(rating)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={starValue <= (hover || rating) ? "gold" : "gray"}
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 cursor-pointer transition duration-300"
                                    >
                                        <path d="M12 17.3l-6.2 3.9 1.6-7L2 9.3l7.1-.6L12 2.5l2.9 6.2 7.1.6-5.4 4.9 1.6 7L12 17.3z" />
                                    </svg>
                                );
                            })}
                        </div>

                        <textarea
                            placeholder="Nhập đánh giá của bạn..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Gửi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

TutorProfileToReview.propTypes = {
    tutor_id: PropTypes.string.isRequired,
    idParent: PropTypes.string.isRequired,
    idPost: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TutorProfileToReview;
