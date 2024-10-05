import { useState } from "react";

const SideBarSearch = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("Môn học");
  const [selectedFee, setSelectedFee] = useState("Học phí (/h)");
  const [selectedClasses, setSelectedClasses] = useState([]);


  //Num_Student
  const [minStudents, setMinStudents] = useState(1);
  const [maxStudents, setMaxStudents] = useState(1);
  const [selectStudent, setSelectStudents] = useState("Số học viên")

  const [selectedSessions, setSelectedSessions] = useState([]);

  // Dữ liệu cho từng mục
  const data = {
    subjects: [
      "Toán",
      "Lý",
      "Hóa",
      "Sinh",
      "Văn",
      "Anh",
      "Tin học",
      "Vẽ",
      "Nhạc cụ",
      "Khác",
    ],
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
    fees: [
      "Dưới 20.000đ",
      "20.000đ - 50.000đ",
      "50.000đ - 80.000đ",
      "80.000đ - 100.000đ",
      "Trên 100.000đ",
    ],
    students: ["Dưới 10 học viên", "10-20 học viên", "Trên 20 học viên"],
    sessions: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"],
  };

  // Hàm xử lý khi bấm vào từng mục
  const toggleDropdown = (dropdownName) => {
    if (selectedDropdown === dropdownName) {
      setSelectedDropdown(null); // Đóng dropdown nếu đang mở
    } else {
      setSelectedDropdown(dropdownName); // Mở dropdown tương ứng
    }
  };

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setSelectedDropdown(null);
  };

  const handleClassSelection = (classItem) => {
    if (selectedClasses.includes(classItem)) {
      // Nếu lớp đã được chọn, bỏ chọn
      setSelectedClasses(selectedClasses.filter((item) => item !== classItem));
    } else {
      // Nếu lớp chưa được chọn, thêm vào danh sách lớp đã chọn
      setSelectedClasses([...selectedClasses, classItem]);
    }
  };

  const handleSelectFee = (fee) => {
    setSelectedFee(fee);
    setSelectedDropdown(null);
  };

  const handleMinStudentsChange = (event) => {
    const value = parseInt(event.target.value);
    if (value <= maxStudents) {
      setMinStudents(value);
      if (value === maxStudents) {
        setSelectStudents(`${value} học viên`);
      } else {
        setSelectStudents(`Từ ${value} đến ${maxStudents} học viên`);

      }
    } else {
      alert("Yêu cầu nhập đúng thông tin");
    }
  };

  const handleMaxStudentsChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= minStudents) {
      setMaxStudents(value);
      if (value === minStudents) {
        setSelectStudents(`${value} học viên`);
      } else {
        setSelectStudents(`Từ ${minStudents} đến ${value} học viên`);
      }
    } else {
      alert("Yêu cầu nhập đúng thông tin");
    }
  };

  const handleSessionSelection = (sessionItem) => {
    if (selectedSessions.includes(sessionItem)) {
      setSelectedSessions(selectedSessions.filter((item) => item !== sessionItem));
    } else {
      setSelectedSessions([...selectedSessions, sessionItem]);
    }
  };

  return (
    <div className="flex flex-col w-80 p-6 font-poppins">
      <div className="flex flex-row items-center text-white bg-[#002182] p-3 rounded-md">
        <i className="fas fa-bars text-[#F1BB45]"></i>
        <span className="text-lg font-semibold ml-3">BỘ LỌC TÌM KIẾM</span>
      </div>

      <div className="mt-4 space-y-4 p-3 bg-yellow-500 rounded-md font-semibold">
        {/* Môn học */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
            onClick={() => toggleDropdown("subjects")}
          >
            <span className="flex items-center">
              <i className="fas fa-book mr-2"></i> {selectedSubject}
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000 ${selectedDropdown === "subjects" ? "transform rotate-180" : ""
                }`}
            ></i>
          </div>
          {selectedDropdown === "subjects" && (
            <ul className="bg-white mt-2 rounded-md p-2 space-y-2 max-h-48 overflow-y-auto">
              {data.subjects.map((subject, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-200 p-2 rounded-md cursor-pointer"
                  onClick={() => handleSelectSubject(subject)}
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
          >
            <span className="flex items-center">
              <i className="fas fa-chalkboard-teacher mr-2"></i> Lớp
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 ml-5 justify-self-center">
          {data.classes.map((classItem, index) => (
            <div key={index}>
              <input type="checkbox" id={classItem} value={classItem} />
              <label htmlFor={classItem} className="ml-2">{classItem}</label>
            </div>
          ))}
        </div>

        {/* Học phí */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
            onClick={() => toggleDropdown("fees")}
          >
            <span className="flex items-center">
              <i className="fas fa-dollar-sign mr-2"></i> {selectedFee}
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000 ${selectedDropdown === "fees" ? "transform rotate-180" : ""
                }`}
            ></i>
          </div>
          {selectedDropdown === "fees" && (
            <ul className="bg-white mt-2 rounded-md p-2 space-y-2 max-h-48 overflow-y-auto">
              {data.fees.map((fee, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-200 p-2 rounded-md cursor-pointer"
                  onClick={() => handleSelectFee(fee)}
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
              <i className="fas fa-users mr-2"></i>{selectStudent}
            </span>
            <i
              className={`fas fa-chevron-down transition-transform duration-2000 ${selectedDropdown === "students" ? "transform rotate-180" : ""
                }`}
            ></i>
          </div>
          {selectedDropdown === "students" && (
            <div className="bg-white mt-2 rounded-md p-2 border-2">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <label htmlFor="min-students">Số học viên ít nhất</label>
                  <input
                    type="number"
                    id="min-students"
                    value={minStudents}
                    onChange={handleMinStudentsChange}
                    min="1"
                    className="border rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="max-students">Số học viên nhiều nhất</label>
                  <input
                    type="number"
                    id="max-students"
                    value={maxStudents}
                    onChange={handleMaxStudentsChange}
                    min={minStudents}
                    className="border rounded-md p-2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Số buổi */}
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between bg-yellow-400 p-2 rounded-md cursor-pointer hover:bg-yellow-300"
          >
            <span className="flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i> Buổi
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 ml-5 justify-self-center">
          {data.sessions.map((classItem, index) => (
            <div key={index}>
              <input type="checkbox" id={classItem} value={classItem} />
              <label htmlFor={classItem} className="ml-2">{classItem}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4 space-x-4">
        <button className="bg-[#002182] w-[10vw] text-white py-2 px-4 rounded-md">
          Xóa tất cả
        </button>
        <button className="bg-[#002182] w-[10vw] text-white py-2 px-4 rounded-md">
          Áp dụng
        </button>
      </div>

      <button className="bg-[#F1BB45] text-black mt-4 py-2 px-4 rounded-md w-full">
        Tạo bài đăng mới
      </button>
    </div>
  );
};

export default SideBarSearch;
