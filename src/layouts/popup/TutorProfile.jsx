import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TutorProfile = ({ tutor_id, onClose }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const [tutorProfile, setTutorProfile] = useState({
    tutor_id: "",
    user: {
      username: "",
      email: "",
      role: "",
    },
    tutorname: "",
    address: "",
    birthdate: "",
    bio_link: "",
    phone_number: "",
    gender: null,
    educational_background: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchTutorProfile = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/tutors/${tutor_id}`
        );
        const data = await response.json();
        setTutorProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorProfile();
  }, [tutor_id]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
      onClick={handleBackgroundClick}
    >
      <div className="bg-gradient-to-r from-[#F1BB45] to-yellow-200 rounded-lg p-8 w-full max-w-4xl shadow-lg border-[5px] border-[#002182] border-double">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#002182]">
          Hồ Sơ Gia Sư
        </h2>
        <div className="flex flex-col items-center md:flex-row ">
          {/* Avar */}
          <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
            <img
              src={
                // tutorProfile.avatar ||
                "https://www.thedogandfriends.com/assets/img/index/img-hero_dog.png"
              }
              alt="Tutor Avatar"
              className="rounded-full w-[15rem] h-[15rem] object-cover shadow-lg border-[3px] border-[#002182]"
            />
          </div>

          {/* Info 1 */}
          <div className="md:w-2/3 ml-8 space-y-1">
            <p className="text-lg font-medium">
              <strong>Họ và tên:</strong>
              <div className="text-[#002182] ml-5 font-normal">
                {" "}
                {tutorProfile.tutorname}
              </div>
            </p>
            <p className="text-lg font-medium flex flex-row">
              <strong>Username:</strong>{" "}
              <div className="text-[#002182] ml-5 font-normal">
                {tutorProfile.user.username}
              </div>
            </p>
            <p className="text-lg font-medium flex flex-row">
              <strong>Email:</strong>{" "}
              <div className="text-[#002182] ml-5 font-normal">
                {tutorProfile.user.email}
              </div>
            </p>
            <p className="text-lg font-medium flex flex-row">
              <strong>Ngày sinh:</strong>{" "}
              <div className="text-[#002182] ml-5 font-normal">
                {tutorProfile.birthdate}
              </div>
            </p>
            <p className="text-lg font-medium flex flex-row">
              <strong>Địa chỉ:</strong>{" "}
              <div className="text-[#002182] ml-5 font-normal">
                {tutorProfile.address}
              </div>
            </p>
          </div>
        </div>
        {/* Info 2 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-lg font-medium flex flex-row">
            <strong>Số điện thoại:</strong>{" "}
            <div className="text-[#002182] ml-5 font-normal">
              {tutorProfile.phone_number}
            </div>
          </p>
          <p className="text-lg font-medium flex flex-row">
            <strong>Giới tính:</strong>{" "}
            <div className="text-[#002182] ml-5 font-normal">
              {tutorProfile.gender}
            </div>
          </p>
          <p className="text-lg font-medium flex flex-row">
            <strong>Trình độ học vấn:</strong>{" "}
            <div className="text-[#002182] ml-5 font-normal">
              {tutorProfile.educational_background}
            </div>
          </p>
          <p className="text-lg font-medium flex flex-row">
            <strong>Link hồ sơ cá nhân:</strong>{" "}
            <a
              href={tutorProfile.bio_link}
              className="text-blue-500 hover:underline ml-5"
            >
              {tutorProfile.bio_link}
            </a>
          </p>
        </div>

        <div className="flex justify-center mt-6 gap-10">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition duration-300"
            onClick={onClose}
          >
            Đóng
          </button>
          <button
            className="bg-[#002182] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            onClick={onClose}
          >
            Nhận gia sư
          </button>
        </div>
      </div>
    </div>
  );
};

TutorProfile.propTypes = {
  tutor_id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TutorProfile;
