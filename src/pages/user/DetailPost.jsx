import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppContext } from "../../AppProvider";
import Popup from "reactjs-popup";

import Parent from "../../layouts/PageAuthorization/parent/parent";
import Panel from "../../layouts/panel/Panel";
import Img3 from "../../assets/image/medal.png";
import ClassTimeDetail from "../../layouts/popup/classTime_Popup";
import TutorProfile from "../../layouts/popup/TutorProfile";


const DetailPost = () => {
    const [dataPost, setDataPost] = useState({})
    const { sessionToken } = useAppContext();
    const { idPost } = useParams();
    const [tagPost, setTagPost] = useState(Img3);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const [tutor_id, setTutor_id] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_ENDPOINT}/api/posts/${idPost}/`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${sessionToken}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    console.log("Lấy thành công");
                    // const filteredPosts = data.filter(
                    //     (post) => post.status === "Đã phê duyệt"
                    // );
                    // const sortedPosts = filteredPosts.sort(
                    //     (a, b) => new Date(b.created_at) - new Date(a.created_at)
                    // );
                    setDataPost(data);
                } else {
                    console.error("Lấy thất bại!");
                }
            } catch (error) {
                console.error("Có lỗi xảy ra:", error);
            }
        };
        fetchData();
    }, []);

    const handleBuoiHocClick = (post) => {
        setSelectedTime(post);
    };

    const handleClosePopup = () => {
        setSelectedTime(null);
    };

    const handleTutorProfileClick = (tutor_id) => {
        setTutor_id(tutor_id);
    };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    };

    return (
        <Parent>
            <Panel role="parent" activeItem={3}>
                <p className="font-semibold text-[1.2rem] text-shadow-sm mb-4">
                    Danh sách gia sư đăng kí
                </p>
                <div className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white py-4 flex flex-col">
                    <div>
                        <div className="flex justify-between px-4">
                            <div className="flex gap-5 ">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src="https://th.bing.com/th/id/OIP.0xm7fJtBKdm3hIVhXfmpQQHaJ4?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet"
                                    alt="avatar"
                                />
                                <div>
                                    <strong>{dataPost.parent_name || dataPost.username}</strong>
                                    <p className="opacity-60">{formatDate(dataPost.created_at)}</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-[22px] h-[22px] mr-1" src={tagPost} alt="" />
                                <p className="font-semibold">Đã phê duyệt</p>
                            </div>
                        </div>

                        <div className="">
                            <ul className=" px-4 grid grid-cols-2 gap-3">
                                <li className="flex gap-2">
                                    <strong>Môn học:</strong>
                                    <p>{dataPost.subject}</p>
                                </li>
                                <li className="flex gap-2">
                                    <strong>Học phí:</strong>
                                    <p>
                                        {dataPost.wage_per_session?.toLocaleString("vi-VN")}&nbsp;VNĐ
                                    </p>
                                </li>
                                <li className="flex gap-2">
                                    <strong>Lớp:</strong>
                                    <p>{dataPost.grade}</p>
                                </li>
                                <li className="flex gap-2">
                                    <strong>Địa chỉ:</strong>
                                    <p>{dataPost.address}</p>
                                </li>
                                <li className="flex gap-2">
                                    <strong>Trình độ:</strong>
                                    <p>{dataPost.background_desired}</p>
                                </li>
                                <li className="flex items-center">
                                    <strong>Buổi học:</strong>
                                    <button
                                        className="bg-[#F1BB45] text-black font-semibold font-poppins py-1 px-3.5 ml-4 rounded-lg shadow hover:bg-yellow-400 transition duration-300"
                                        onClick={() => handleBuoiHocClick(dataPost)}
                                    >
                                        Chi tiết
                                    </button>
                                </li>
                                <li className="flex gap-2">
                                    <strong>Số học viên:</strong>
                                    <p>{dataPost.student_number}</p>
                                </li>
                                <li className="flex gap-2">
                                    <strong>Ghi chú:</strong>
                                    <p>{dataPost.description}</p>
                                </li>
                            </ul>
                        </div>

                        {selectedTime && (
                            <ClassTimeDetail
                                classTimes={selectedTime.class_times}
                                onClose={handleClosePopup}
                            />
                        )}
                    </div>
                    <div className="px-4 mt-3 flex flex-col self-center mb-3 w-[70%]">
                        <p className="text-[1.2rem] font-bold text-custom_darkblue ">
                            Danh sách gia sư đăng kí:{" "}
                        </p>
                        <div className="mt-4 max-h-[15rem] px-3 overflow-auto py-4 rounded-xl scrollbar scrollbar-thumb-white/85 shadow-md bg-slate-100 border border-slate-200 ">
                            {dataPost.registration?.map((tutor, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-5 py-1 cursor-pointer mb-1 hover:bg-slate-200 rounded-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* <img
                                            src={song.poster}
                                            alt=""
                                            className="w-[50px] h-[50px] rounded-full object-cover"
                                        /> */}
                                        <p className="font-semibold text-[1.1rem]">{tutor.tutor_name}</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <button
                                            className="font-semibold text-[0.9rem] h-[2rem] w-[8rem] bg-custom_yellow rounded-md"
                                            onClick={() => handleTutorProfileClick(tutor.tutor_id)}
                                        >
                                            Xem thông tin
                                        </button>
                                        <button
                                            className="font-semibold text-[0.9rem] h-[2rem] w-[8rem] bg-custom_darkblue text-white rounded-md"
                                            onClick={() => setShowPopup(true)}
                                        >
                                            Nhận gia sư
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {tutor_id && (
                        <TutorProfile
                            tutor_id={tutor_id}
                            onClose={() => setTutor_id(null)}
                        />
                    )}
                    {showPopup && (
                        <Popup
                            open={showPopup}
                            closeOnDocumentClick={false}
                            onClose={() => setShowPopup(false)}
                            position="right center"
                            contentStyle={{ width: "400px", borderRadius: "10px", padding: "1%" }}
                        >
                            <div>
                                <div className="">
                                    <p className="font-bold text-[1.1rem]">Xác nhận</p>
                                </div>
                                <hr className="my-2" />
                                <p>Bạn đồng ý nhận gia sư này?</p>

                                <div className="flex justify-end mt-4">
                                    <button
                                        className="bg-red-500 text-white py-1 rounded w-[90px]"
                                        onClick={() => setShowPopup(false)}
                                    >
                                        <i className="fa-solid fa-ban mr-2"></i>
                                        Đóng
                                    </button>
                                    <button
                                        className="bg-custom_darkblue text-white py-1 rounded w-[90px] ml-2"
                                    // onClick={confirmSubmission}
                                    >
                                        <i className="fa-solid fa-check mr-2"></i>
                                        OK
                                    </button>
                                </div>
                            </div>
                        </Popup>
                    )}
                </div>
            </Panel>
        </Parent>
    );
};

export default DetailPost;
