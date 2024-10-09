import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Img1 from "../../assets/image/quiz.png";
import Img2 from "../../assets/image/assignment.png";
import Img3 from "../../assets/image/medal.png";
import ClassTimeDetail from "../../layouts/popup/classTime_Popup";

const ItemPostVu = ({ user, children, tag }) => {
    const [tagPost, setTagPost] = useState()
    const [userName, setUserName] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleBuoiHocClick = (post) => {
        setSelectedTime(post);
    };

    const handleClosePopup = () => {
        setSelectedTime(null);
    };

    useEffect(() => {
        if (tag === "Đã giao") {
            setTagPost(Img2)
        } else if (tag === "Đã phê duyệt") {
            setTagPost(Img3)
        } else if (tag === "Đang chờ phê duyệt") {
            setTagPost(Img1)
        }
    }, [])

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/parents/${user.parent_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();

                if (response.ok) {
                    setUserName(data.parentname || data.user.username);
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [user.parent_id]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
    };

    return (
        <div>
            <div className="flex justify-between p-4">
                <div className="flex gap-5 ">
                    <img
                        className="w-[50px] h-[50px] rounded-full"
                        src="https://th.bing.com/th/id/OIP.0xm7fJtBKdm3hIVhXfmpQQHaJ4?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet"
                        alt="avatar"
                    />
                    <div>
                        <strong>{userName}</strong>
                        <p className="opacity-60">{formatDate(user.created_at)}</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="w-[22px] h-[22px] mr-1" src={tagPost} alt="" />
                    <p className="font-semibold">{tag}</p>
                </div>
            </div>

            <div className="">
                <ul className=" px-4 grid grid-cols-2 gap-3">
                    <li className="flex gap-2">
                        <strong>Môn học:</strong>
                        <p>{user.subject}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Học phí:</strong>
                        <p>{user.wage_per_session}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Lớp:</strong>
                        <p>{user.grade}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Địa chỉ:</strong>
                        <p>{user.address}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Trình độ:</strong>
                        <p>{user.background_desired}</p>
                    </li>
                    <li className="flex items-center">
                        <strong>Buổi học:</strong>
                        <button
                            className="bg-[#F1BB45] text-black font-semibold font-poppins py-1 px-3.5 ml-4 rounded-lg shadow hover:bg-yellow-400 transition duration-300"
                            onClick={() => handleBuoiHocClick(user)}
                        >
                            Chi tiết
                        </button>
                    </li>
                    <li className="flex gap-2">
                        <strong>Số học viên:</strong>
                        <p>{user.student_number}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Ghi chú:</strong>
                        <p>{user.description}</p>
                    </li>
                </ul>
                <div className="h-20 bg-[#002182] mt-5 rounded-b-[0.8rem] flex justify-center items-center">
                    {children}
                </div>
            </div>

            {selectedTime && (
                <ClassTimeDetail
                    classTimes={selectedTime.class_times}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
};

ItemPostVu.propTypes = {
    user: PropTypes.array,
    children: PropTypes.node,
    tag: PropTypes.string.isRequired,
};

export default ItemPostVu;
