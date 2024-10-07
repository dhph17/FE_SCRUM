import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Img1 from "../../assets/image/quiz.png"
import Img2 from "../../assets/image/assignment.png"
import Img3 from "../../assets/image/medal.png"

const ItemPostVu = ({ user, children, tag }) => {
    const [tagPost, setTagPost] = useState()

    useEffect(() => {
        if (tag === "Đã giao") {
            setTagPost(Img2)
        } else if (tag === "Được duyệt") {
            setTagPost(Img3)
        } else if (tag === "Chờ duyệt") {
            setTagPost(Img1)
        }
    }, [])
    return (
        <div>
            <div className="flex justify-between p-4">
                <div className="flex gap-5 ">
                    <img
                        className="w-[50px] h-[50px] rounded-full"
                        src={user.avatar}
                        alt="avatar"
                    />
                    <div>
                        <strong>{user.name}</strong>
                        <p className="opacity-60">{user.date}</p>
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
                        <p>{user.monHoc}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Học phí:</strong>
                        <p>{user.hocPhi}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Lớp:</strong>
                        <p>{user.lop}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Địa chỉ:</strong>
                        <p>{user.diaChi}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Trình độ:</strong>
                        <p>{user.trinhDo}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Buổi học:</strong>
                        <p>{user.buoiHoc}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Số học viên:</strong>
                        <p>{user.soHocVien}</p>
                    </li>
                    <li className="flex gap-2">
                        <strong>Ghi chú:</strong>
                        <p>{user.ghiChu}</p>
                    </li>
                </ul>
                <div className="h-20 bg-[#002182] mt-5 rounded-b-[0.8rem] flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

ItemPostVu.propTypes = {
    user: PropTypes.object,
    children: PropTypes.node,
    tag: PropTypes.string
};

export default ItemPostVu