import { useState } from "react";
import Pagination from "../../layouts/pagination/pagination";
import postMockData from "../../layouts/mock_data/Post";
import Panel_Search_Parent from "../../layouts/panel/Panel_Search_Parent";

const MainPageParent = () => {
  const post = postMockData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(post.length / itemsPerPage);

  const currentPosts = post.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Panel_Search_Parent className="flex flex-col max-h-full">
      <div className="relative max-h-[38rem] overflow-y-auto grid grid-cols-1 gap-4">
        {currentPosts.map((tutor, index) => (
          <div
            key={index}
            className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white"
          >
            <div className="flex justify-between p-4">
              <div className="flex gap-5 ">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={tutor.avatar}
                  alt="avatar"
                />
                <div>
                  <strong>{tutor.name}</strong>
                  <p className="opacity-60">{tutor.date}</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <p>{tutor.state}</p>
              </div>
            </div>

            <div className="p-4">
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex gap-2">
                  <strong>Môn học:</strong>
                  <p>{tutor.monHoc}</p>
                </li>
                <li className="flex gap-2">
                  <strong>Học phí:</strong>
                  <p>{tutor.hocPhi}</p>
                </li>
                <li className="flex gap-2">
                  <strong>Lớp:</strong>
                  <p>{tutor.lop}</p>
                </li>
                <li className="flex gap-2">
                  <strong>Địa chỉ:</strong>
                  <p>{tutor.diaChi}</p>
                </li>
                <li className="flex gap-2">
                  <strong>Trình độ:</strong>
                  <p>{tutor.trinhDo}</p>
                </li>
                <li className="flex gap-2">
                  <strong>Buổi học:</strong>
                  <p>{tutor.buoiHoc}</p>
                </li>
                <li className="flex gap-2">
                  <strong>Số học viên:</strong>
                  <p>{tutor.soHocVien}</p>
                </li>
                <li className="flex gap-2">
                  <strong>Ghi chú:</strong>
                  <p>{tutor.ghiChu}</p>
                </li>
              </ul>
              <div className="h-20 bg-[#002182] mt-5 rounded-[0.8rem]"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Panel_Search_Parent>
  );
};

export default MainPageParent;
