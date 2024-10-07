import { useState } from "react";
import Pagination from "../../layouts/pagination/pagination";
import postMockData from "../../layouts/mock_data/Post";
import Panel_Search from "../../layouts/panel/Panel_Search";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Parent from "../../layouts/PageAuthorization/parent/parent";

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
    <Parent>
      <Panel_Search className="flex flex-col max-h-full">
        <div className="relative max-h-[38rem] overflow-y-auto grid grid-cols-1 gap-4">
          {currentPosts.map((parent, index) => (
            <div
              key={index}
              className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white"
            >
              <ItemPost user={parent} />
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
    </Parent>

  );
};

export default MainPageParent;
