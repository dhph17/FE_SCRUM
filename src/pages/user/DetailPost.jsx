import { useState } from "react";
import Parent from "../../layouts/PageAuthorization/parent/parent";
import Panel from "../../layouts/panel/Panel";
import Img3 from "../../assets/image/medal.png";
import ClassTimeDetail from "../../layouts/popup/classTime_Popup";
import TutorProfile from "../../layouts/popup/TutorProfile";

const DetailPost = () => {
    const [tagPost, setTagPost] = useState(Img3);
    const [selectedTime, setSelectedTime] = useState(null);
    const [tutor_id, setTutor_id] = useState(null);

    const handleBuoiHocClick = (post) => {
        setSelectedTime(post);
    };

    const handleClosePopup = () => {
        setSelectedTime(null);
    };

    const handleTutorProfileClick = () => {
        // mock
        const tutor_id = "ffe55e10-b607-4ffd-877b-3f09f4e3888c";
        setTutor_id(tutor_id);
    };

    const handleApproveClick = (tutor_id) => {
        console.log("Tutor id --> ", tutor_id);
    };

    const user = {
        parent_name: "Phi Hùng",
        subject: "Toán",
        wage_per_session: 100000,
        grade: 12,
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

    const listSong = [
        {
            audio: "/audio/NangTho.mp3",
            poster:
                "https://i.scdn.co/image/ab67616d00001e025a6bc1ecf16bbac5734f23da",
            name: "Nàng thơ",
            artist: "Hoàng Dũng",
        },
        {
            audio: "/audio/EmDungKhoc.mp3",
            poster:
                "https://i.scdn.co/image/ab67616d00001e02827bd87fc2dec81441a4a059",
            name: "Em đừng khóc",
            artist: "Chillies",
        },
        {
            audio: "/audio/DoanKetMoi.mp3",
            poster:
                "https://i.scdn.co/image/ab67616d00001e02d0e2168c8f5e545b621ad549",
            name: "Đoạn kết mới",
            artist: "Hoàng Dũng",
        },
        {
            audio: "/audio/MotNganNoiDau.mp3",
            poster:
                "https://i.scdn.co/image/ab67616d00001e02acdef1320a648494b4303e9d",
            name: "Một ngàn nỗi đau",
            artist: "Văn Mai Hương",
        },
        {
            audio: "/audio/Audio.mp3",
            poster:
                "https://i.scdn.co/image/ab67616d00001e02a1bc26cdd8eecd89da3adc39",
            name: "Đừng làm trái tim anh đau",
            artist: "Sơn Tùng M-TP",
        },
    ];

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
                                    <strong>{user.parent_name || user.username}</strong>
                                    <p className="opacity-60">{formatDate(user.created_at)}</p>
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
                                    <p>{user.subject}</p>
                                </li>
                                <li className="flex gap-2">
                                    <strong>Học phí:</strong>
                                    <p>
                                        {user.wage_per_session.toLocaleString("vi-VN")}&nbsp;VNĐ
                                    </p>
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
                                    // onClick={() => handleBuoiHocClick(user)}
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
                            {listSong.map((song, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-5 py-1 cursor-pointer mb-1 hover:bg-slate-200 rounded-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={song.poster}
                                            alt=""
                                            className="w-[50px] h-[50px] rounded-full object-cover"
                                        />
                                        <p className="font-semibold text-[1.1rem]">{song.artist}</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <button
                                            className="font-semibold text-[0.9rem] h-[2rem] w-[8rem] bg-custom_yellow rounded-md"
                                            onClick={() => handleTutorProfileClick(tutor_id)}
                                        >
                                            Xem thông tin
                                        </button>
                                        <button
                                            className="font-semibold text-[0.9rem] h-[2rem] w-[8rem] bg-custom_darkblue text-white rounded-md"
                                            onClick={handleApproveClick(tutor_id)}
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
                            tutor_id="c83639e5-7087-48d0-9b08-2332eeb0c053"
                            onClose={() => setTutor_id(null)}
                        />
                    )}
                </div>
            </Panel>
        </Parent>
    );
};

export default DetailPost;
