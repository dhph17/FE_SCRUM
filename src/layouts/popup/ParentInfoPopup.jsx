import React from "react";

const ParentInfoPopup = ({ isOpen, onClose, parent }) => {
  if (!isOpen || !parent) return null;

  const avatarUrl = `http://127.0.0.1:8000${parent.avatar}`;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-custom_darkblue text-white p-4 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">Thông tin phụ huynh</h2>
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
              <p><strong>Họ tên:</strong> {parent.parentname}</p>
              <p><strong>Giới tính:</strong> {parent.gender}</p>
              <p><strong>Ngày sinh:</strong> {parent.birthdate}</p>
              <p><strong>Địa chỉ:</strong> {parent.address}</p>
            </div>
            <div>
              <p><strong>Số điện thoại:</strong> {parent.phone_number}</p>
              <p><strong>Email:</strong> {parent.user.email}</p>
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

export default ParentInfoPopup;
