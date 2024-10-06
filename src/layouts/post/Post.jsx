import React from "react";

const PostCard = ({
  subject,
  classGroup,
  fee,
  address,
  sessions,
  studentCount,
  notes,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
      <div className="flex items-center mb-2">
        <img
          src="https://via.placeholder.com/50"
          alt="Avatar"
          className="rounded-full mr-2"
        />
        <h2 className="font-bold text-lg">Nguyễn Nhật Quang</h2>
      </div>
      <div className="text-gray-700">
        <p>
          <strong>Môn học:</strong> {subject}
        </p>
        <p>
          <strong>Lớp:</strong> {classGroup}
        </p>
        <p>
          <strong>Học phí:</strong> {fee} VNĐ/tháng
        </p>
        <p>
          <strong>Địa chỉ:</strong> {address}
        </p>
        <p>
          <strong>Buổi học:</strong> {sessions}
        </p>
        <p>
          <strong>Số học viên:</strong> {studentCount}
        </p>
        <p>
          <strong>Ghi chú:</strong> {notes}
        </p>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-400">
          Đăng ký dạy
        </button>
        <button className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-400">
          Hủy đăng ký
        </button>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <PostCard
        subject="Tiếng Anh"
        classGroup="11, 12"
        fee="300.000"
        address="130 Nguyễn Chánh"
        sessions="Thứ 2, 4, 6 | 17:00 - 19:00"
        studentCount="2"
        notes="Kèm từ căn bản do 2 cháu bị mất gốc"
      />
      <PostCard
        subject="Tiếng Anh"
        classGroup="11, 12"
        fee="300.000"
        address="130 Nguyễn Chánh"
        sessions="Thứ 2, 4, 6 | 17:00 - 19:00"
        studentCount="2"
        notes="Kèm từ căn bản do 2 cháu bị mất gốc"
      />
    </div>
  );
};

export default Post;
