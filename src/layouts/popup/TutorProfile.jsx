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
          `${import.meta.env.VITE_API_ENDPOINT}/api/tutors/${tutor_id}`
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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md"
      onClick={handleBackgroundClick}
    >
      <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-8 w-[50%] shadow-lg border-[5px] border-[#002182] border-double">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#002182]">
          Hồ Sơ Gia Sư
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex gap-6">
            {/* Avar */}
            <div className="md:mb-0 md:w-1/2 flex flex-col justify-between">
              <img
                src={
                  `${import.meta.env.VITE_API_ENDPOINT}/${tutorProfile.avatar}`
                }
                alt="Tutor Avatar"
                className="rounded-full w-[7rem] h-[7rem] object-cover shadow-lg border-[3px] border-[#002182] self-center"
              />
              <div className="flex flex-col space-y-3">
                <p className="text-lg font-medium flex flex-row">
                  <strong>Số điện thoại:</strong>{" "}
                  <div className="text-[#002182] ml-5 font-normal">
                    {tutorProfile.phone_number}
                  </div>
                </p>
                <p className="text-lg font-medium flex flex-row">
                  <strong className="text-nowrap">Trình độ học vấn:</strong>{" "}
                  <div className="text-[#002182] ml-5 font-normal text-nowrap">
                    {tutorProfile.educational_background}
                  </div>
                </p>
                <p className="text-lg font-medium flex flex-row">
                  <strong>Liên kết:</strong>{" "}
                  <a
                    href={tutorProfile.bio_link}
                    className="text-blue-500 hover:underline ml-5"
                  >
                    {tutorProfile.bio_link}
                  </a>
                </p>
              </div>
            </div>

            {/* Info 1 */}
            <div className="md:w-2/3 ml-8 space-y-3">
              <p className="text-lg font-medium flex">
                <strong>Họ và tên:</strong>
                <p className="text-[#002182] ml-5 font-normal">
                  {tutorProfile.tutorname}
                </p>
              </p>
              <p className="text-lg font-medium flex flex-row">
                <strong>Username:</strong>{" "}
                <div className="text-[#002182] ml-5 font-normal">
                  {tutorProfile.user.username}
                </div>
              </p>
              <p className="text-lg font-medium flex flex-row">
                <strong>Ngày sinh:</strong>{" "}
                <div className="text-[#002182] ml-5 font-normal">
                  {tutorProfile.birthdate}
                </div>
              </p>
              <p className="text-lg font-medium flex flex-row">
                <strong>Giới tính:</strong>{" "}
                <div className="text-[#002182] ml-5 font-normal">
                  {tutorProfile.gender}
                </div>
              </p>
              <p className="text-lg font-medium flex flex-row">
                <strong>Địa chỉ:</strong>{" "}
                <div className="text-[#002182] ml-5 font-normal">
                  {tutorProfile.address}
                </div>
              </p>
              <p className="text-lg font-medium flex flex-row">
                <strong>Email:</strong>{" "}
                <div className="text-[#002182] ml-5 font-normal">
                  {tutorProfile.user.email}
                </div>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-10">
            <button
              className="bg-red-500 w-[9rem] text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition duration-300"
              onClick={onClose}
            >
              Đóng
            </button>
            <button
              className="bg-[#002182] w-[9rem] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
              onClick={onClose}
            >
              Nhận gia sư
            </button>
          </div>
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
