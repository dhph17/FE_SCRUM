import React from "react";

const TutorInfoPopup = ({ isOpen, onClose, tutor }) => {
  if (!isOpen || !tutor) return null;

  const avatarUrl = `http://127.0.0.1:8000${tutor.avatar}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="bg-custom_darkblue text-white p-6 rounded-t-lg">
          <h2 className="text-3xl font-bold text-center">Thông tin phụ huynh</h2>
        </div>
        <div className="p-4">
          <div className="flex justify-center mb-4">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-32 h-32 rounded-full object-cover border border-gray-300"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4 text-1xl">
            <div>
              <p><strong>Họ tên:</strong> {tutor.tutorname}</p>
              <p><strong>Giới tính:</strong> {tutor.gender}</p>
              <p><strong>Ngày sinh:</strong> {tutor.birthdate}</p>
              <p><strong>Trình độ học vấn:</strong> {tutor.educational_background}</p>
            </div>
            <div>
              <p><strong>Số điện thoại:</strong> {tutor.phone_number}</p>
              <p><strong>Email:</strong> {tutor.user.email}</p>
              <p><strong>Liên kết bio:</strong> {tutor.bio_link}</p>
              <p><strong>Địa chỉ:</strong> {tutor.address}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorInfoPopup;
