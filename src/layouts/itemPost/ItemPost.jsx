import PropTypes from 'prop-types';

import Img from "../../assets/image/logo_.png"
import Img1 from "../../assets/image/quiz.png"
import Img2 from "../../assets/image/assignment.png"
import Img3 from "../../assets/image/medal.png"
import { useEffect, useState } from 'react';
const ItemPost = ({ state }) => {
    const [statePost, setStatePost] = useState()

    useEffect(() => {
        if (state === "Đã giao") {
            setStatePost(Img2)
        } else if (state === "Được duyệt") {
            setStatePost(Img3)
        } else if (state === "Chờ duyệt") {
            setStatePost(Img1)
        }
    }, [])

    return (
        <div>
            <div className="flex justify-between p-2">
                <div className="flex gap-5">
                    <img className="w-[50px] h-[50px] rounded-full" src={Img} alt="" />
                    <div>
                        <strong>Nguyễn Văn A</strong>
                        <p className="opacity-60">12:30 12/10/2024</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img className="w-[22px] h-[22px]" src={statePost} alt="" />
                    <p>{state}</p>
                </div>
            </div>
            <div className="p-2">
                <ul className="grid grid-cols-2 gap-1">
                    <li className="flex gap-3"><strong>Môn học :</strong><p>abc</p></li>
                    <li className="flex gap-3"><strong>Học phí :</strong><p></p></li>
                    <li className="flex gap-3"><strong>Lớp :</strong><p></p></li>
                    <li className="flex gap-3"><strong>Địa chỉ :</strong><p></p></li>
                    <li className="flex gap-3"><strong>Trình độ :</strong><p></p></li>
                    <li className="flex gap-3"><strong>Buổi học :</strong><p></p></li>
                    <li className="flex gap-3"><strong>Số học viên :</strong><p></p></li>
                    <li className="flex gap-3"><strong>Ghi chú :</strong><p></p></li>
                </ul>
            </div>
        </div>
    )
}

ItemPost.propTypes = {
    state: PropTypes.string,
};

export default ItemPost