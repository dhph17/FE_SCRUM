import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import User from "../../assets/image/User.png";
import ClassTimeDetail from "../popup/classTime_Popup";
import { useAppContext } from "../../AppProvider";

const ItemReport = ({ report }) => {
  const [selectedTime, setSelectedTime] = useState(null);

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
    <div>
      <div className="flex justify-between p-4">
        <div className="flex gap-5 ">
          <div>
            <strong>{report.parent_name || user.username}</strong>
            <p className="opacity-60">{formatDate(user.created_at)}</p>
          </div>
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
            <p>{user.wage_per_session.toLocaleString("vi-VN")}&nbsp;VNĐ</p>
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
    </div>
  );
};

ItemReport.propTypes = {
  report: PropTypes.object,
};

export default ItemReport;
