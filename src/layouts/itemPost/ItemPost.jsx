import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Img1 from "../../assets/image/quiz.png";
import Img2 from "../../assets/image/assignment.png";
import Img3 from "../../assets/image/medal.png";
import User from '../../assets/image/User.png'
import ClassTimeDetail from "../../layouts/popup/classTime_Popup";
import { useAppContext } from "../../AppProvider";
import ReportContent from "../popup/reportContent";

const ItemPostVu = ({ user, children, tag }) => {
    const [tagPost, setTagPost] = useState()
    const [selectedTime, setSelectedTime] = useState(null);
    const [showReport, setShowReport] = useState(false)
    const [showReportContent, setShowReportContent] = useState(false)

    const { role, id } = useAppContext();

    const handleBuoiHocClick = (post) => {
        setSelectedTime(post);
    };

    const handleClosePopup = () => {
        setSelectedTime(null);
    };

    const handleBackgroundClick = () => {
        setShowReportContent(false);
        setShowReport(false)
    };

    useEffect(() => {
        if (tag === "Đã giao") {
            setTagPost(Img2)
        } else if (tag === "Đã phê duyệt") {
            setTagPost(Img3)
        } else if (tag === "Đang chờ phê duyệt" || tag === "Chờ duyệt") {
            setTagPost(Img1)
        }
    }, [])

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
            <div
                className="flex justify-between p-4 group"
            >
                <div className="flex items-center gap-7">
                    <div className="flex gap-5 ">
                        <img
                            className="w-[50px] h-[50px] rounded-full"
                            src={user.avatar ? `${import.meta.env.VITE_API_ENDPOINT}/${user.avatar}` : User}
                            alt="avatar"
                        />
                        <div>
                            <strong>{user.parent_name || user.username}</strong>
                            {
                                role === 'admin' && tag === "Đã phê duyệt" ?
                                    (
                                        <p className="opacity-60">{formatDate(user.created_at)}. Được duyệt lúc {formatDate(user.last_updated)}</p>
                                    )
                                    :
                                    (
                                        <p className="opacity-60">{formatDate(user.created_at)}</p>
                                    )
                            }
                        </div>
                    </div>
                    {
                        id !== user.parent_id && (
                            <div className="">
                                <i
                                    className={`fa-solid fa-ellipsis text-2xl cursor-pointer hover:text-black transition-all du ${!showReport && !showReportContent ? 'text-slate-100' : 'text-black'}`}
                                    onClick={() => { setShowReport(!showReport); setShowReportContent(false) }}
                                ></i>

                                {
                                    showReport && (
                                        <div className="bg-slate-100 absolute  p-1 rounded-md cursor-pointer shadow-md">
                                            <div
                                                className="flex gap-1 items-center p-1 hover:bg-slate-200 rounded-md"
                                                onClick={() => { setShowReport(false); setShowReportContent(true) }}
                                            >
                                                <i className="fa-solid fa-flag"></i>
                                                <span>Report</span>
                                            </div>
                                        </div>
                                    )
                                }
                                {showReportContent && (
                                    <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={handleBackgroundClick}></div>
                                )}
                                {
                                    showReportContent && (
                                        <div className="fixed inset-0 flex items-center justify-center z-40">
                                            <ReportContent
                                                onClose={() => setShowReportContent(false)}
                                                reportedPartyId={user.parent_id}
                                                postId={user.post_id}
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>

                <div className="flex">
                    <img className="w-[22px] h-[22px] mr-1" src={tagPost} alt="" />
                    <p className="font-semibold">{tag}</p>
                </div>
            </div>

            <div className="">
                <ul className=" px-4 grid grid-cols-2 gap-3">
                    <li className="flex gap-2">
                        <strong className="text-shadow-md italic">Môn học:</strong>
                        <p>{user.subject}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong className="text-shadow-md italic">Học phí:</strong>
                        <p>{user.wage_per_session.toLocaleString('vi-VN')}&nbsp;VNĐ</p>
                    </li>
                    <li className="flex gap-2">
                        <strong className="text-shadow-md italic">Lớp:</strong>
                        <p>{user.grade}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong className="text-shadow-md italic">Địa chỉ:</strong>
                        <p>{user.address}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong className="text-shadow-md italic">Trình độ:</strong>
                        <p>{user.background_desired}</p>
                    </li>
                    <li className="flex items-center">
                        <strong className="text-shadow-md italic">Buổi học:</strong>
                        <button
                            className="bg-[#F1BB45] text-black font-semibold font-poppins py-1 px-3.5 ml-4 rounded-lg shadow hover:bg-yellow-400 transition duration-300"
                            onClick={() => handleBuoiHocClick(user)}
                        >
                            Chi tiết
                        </button>
                    </li>
                    <li className="flex gap-2">
                        <strong className="text-shadow-md italic">Số học viên:</strong>
                        <p>{user.student_number}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong className="text-shadow-md italic">Ghi chú:</strong>
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
    user: PropTypes.object,
    children: PropTypes.node,
    tag: PropTypes.string,
};

export default ItemPostVu;
