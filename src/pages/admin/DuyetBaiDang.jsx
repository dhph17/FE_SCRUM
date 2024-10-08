import { useState } from "react";

import Page from "../../layouts/panel/Panel";
import postMockData from "../../layouts/mock_data/Post";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Pagination from "../../layouts/pagination/pagination";
import Admin from "../../layouts/PageAuthorization/admin/admin";

const DuyetBaiDang = () => {
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
    <Admin>
      <Page activeItem={3}>
        <div className="relative max-h-[38rem] overflow-y-auto grid grid-cols-1 gap-4">
          {currentPosts.map((tutor, index) => (
            <div
              key={index}
              className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white"
            >
              <ItemPost user={tutor} tag="Chờ duyệt" >
                <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8">Duyệt bài đăng</button>
                <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8">Xóa bài đăng</button>
              </ItemPost>
            </div>
          ))}
        </div>
      </Page>

      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Admin>



  );
};

export default DuyetBaiDang;
