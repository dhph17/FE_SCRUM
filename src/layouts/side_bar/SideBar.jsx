
import { useState } from "react";

const SideBar = () => {

    const [selectedDropdown, setSelectedDropdown] = useState(null);

    // Dữ liệu cho từng mục
    const data = {
      subjects: ["Toán", "Lý", "Hóa", "Sinh", "Văn"],
      classes: [
        "Lớp 1",
        "Lớp 2",
        "Lớp 3",
        "Lớp 4",
        "Lớp 5",
        "Lớp 6",
        "Lớp 7",
        "Lớp 8",
        "Lớp 9",
        "Lớp 10",
        "Lớp 11",
        "Lớp 12",
      ],
      fees: ["Dưới 1 triệu", "1-3 triệu", "3-5 triệu", "Trên 5 triệu"],
      students: ["Dưới 10 học viên", "10-20 học viên", "Trên 20 học viên"],
      sessions: ["1 buổi", "2 buổi", "3 buổi", "Trên 3 buổi"],
    };

    // Hàm xử lý khi bấm vào từng mục
    const toggleDropdown = (dropdownName) => {
      if (selectedDropdown === dropdownName) {
        setSelectedDropdown(null); // Đóng dropdown nếu đang mở
      } else {
        setSelectedDropdown(dropdownName); // Mở dropdown tương ứng
      }
    };

  return (
    <div className="flex flex-col w-[18%] min-h-screen p-4 m-5 font-poppins">
      <div className="flex flex-row items-center justify-between text-white bg-[#002182] p-3 rounded-md h-[30%]">
        <i className="fas fa-bars text-[#F1BB45]"></i>
        <span className="text-lg font-semibold pr-3">BỘ LỌC TÌM KIẾM</span>
      </div>

      <div className="mt-4 space-y-4 p-3 h-[180%] bg-yellow-500 rounded-md font-semibold">
        {/* Môn học */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
            onClick={() => toggleDropdown("subjects")}
          >
            <span className="flex items-center">
              <i className="fas fa-book mr-2"></i> Môn học
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000 ${
                selectedDropdown === "subjects" ? "transform rotate-180" : ""
              }`}
            ></i>
          </div>
          {selectedDropdown === "subjects" && (
            <ul className="bg-white mt-2 rounded-md p-2 space-y-2">
              {data.subjects.map((subject, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-200 p-2 rounded-md cursor-pointer"
                >
                  {subject}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Lớp */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
            onClick={() => toggleDropdown("classes")}
          >
            <span className="flex items-center">
              <i className="fas fa-chalkboard-teacher mr-2"></i> Lớp
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000 ${
                selectedDropdown === "classes" ? "transform rotate-180" : ""
              }`}
            ></i>
          </div>
          {selectedDropdown === "classes" && (
            <ul className="bg-white mt-2 rounded-md p-2 space-y-2">
              {data.classes.map((classItem, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-200 p-2 rounded-md cursor-pointer"
                >
                  {classItem}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Học phí */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
            onClick={() => toggleDropdown("fees")}
          >
            <span className="flex items-center">
              <i className="fas fa-dollar-sign mr-2"></i> Học phí
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000${
                selectedDropdown === "fees" ? "transform rotate-180" : ""
              }`}
            ></i>
          </div>
          {selectedDropdown === "fees" && (
            <ul className="bg-white mt-2 rounded-md p-2 space-y-2">
              {data.fees.map((fee, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-200 p-2 rounded-md cursor-pointer"
                >
                  {fee}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Số học viên */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
            onClick={() => toggleDropdown("students")}
          >
            <span className="flex items-center">
              <i className="fas fa-users mr-2"></i> Số học viên
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000${
                selectedDropdown === "students" ? "transform rotate-180" : ""
              }`}
            ></i>
          </div>
          {selectedDropdown === "students" && (
            <ul className="bg-white mt-2 rounded-md p-2 space-y-2">
              {data.students.map((student, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-200 p-2 rounded-md cursor-pointer"
                >
                  {student}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Số buổi */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
            onClick={() => toggleDropdown("sessions")}
          >
            <span className="flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i> Số buổi
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000${
                selectedDropdown === "sessions" ? "transform rotate-180" : ""
              }`}
            ></i>
          </div>
          {selectedDropdown === "sessions" && (
            <ul className="bg-white mt-2 rounded-md p-2 space-y-2">
              {data.sessions.map((session, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-200 p-2 rounded-md cursor-pointer"
                >
                  {session}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-4 space-x-4">
        <button className="bg-[#002182] text-white py-2 px-4 rounded-md">
          Xóa tất cả
        </button>
        <button className="bg-[#002182] text-white py-2 px-4 rounded-md">
          Áp dụng
        </button>
      </div>

      <button className="bg-[#F1BB45] text-black mt-6 py-2 px-4 rounded-md w-full">
        Tạo bài đăng mới
      </button>
    </div>
  );
};

export default SideBar;
