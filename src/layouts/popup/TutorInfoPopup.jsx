import React from "react";

const TutorInfoPopup = ({ isOpen, onClose, tutor }) => {
  if (!isOpen || !tutor) return null;

  const avatarUrl = `http://127.0.0.1:8000${tutor.avatar}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <div className="bg-custom_darkblue text-white p-4 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">Thông tin gia sư</h2>
        </div>
        <div className="p-4">
          <div className="flex justify-center mb-4">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p><strong>Họ tên:</strong> {tutor.tutorname}</p>
              <p><strong>Giới tính:</strong> {tutor.gender}</p>
              <p><strong>Ngày sinh:</strong> {tutor.birthdate}</p>
              <p><strong>Địa chỉ:</strong> {tutor.address}</p>
            </div>
            <div>
              <p><strong>Số điện thoại:</strong> {tutor.phone_number}</p>
              <p><strong>Liên kết bio:</strong> {tutor.bio_link}</p>
              <p><strong>Trình độ học vấn:</strong> {tutor.educational_background}</p>
              <p><strong>Email:</strong> {tutor.user.email}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-full"
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
