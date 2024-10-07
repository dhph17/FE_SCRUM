import { useState } from "react";
import Pagination from "../../layouts/pagination/pagination";
import postMockData from "../../layouts/mock_data/Post";
import Panel_Search from "../../layouts/panel/Panel_Search";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Tutor from "../../layouts/PageAuthorization/tutor/tutor"

const MainPageTutor = () => {
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
    <Tutor>
      <Panel_Search className="flex flex-col max-h-full">
        <div className="relative max-h-[38rem] overflow-y-auto grid grid-cols-1 gap-4">
          {currentPosts.map((tutor, index) => (
            <div
              key={index}
              className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white"
            >
              <ItemPost user={tutor} />
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
      </Panel_Search>
    </Tutor>
  );
};

export default MainPageTutor;
