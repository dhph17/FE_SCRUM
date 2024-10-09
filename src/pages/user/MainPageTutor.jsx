import { useState, useEffect } from "react";
import { useAppContext } from "../../AppProvider";
import Pagination from "../../layouts/pagination/pagination";
import Panel_Search from "../../layouts/panel/Panel_Search";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Tutor from "../../layouts/PageAuthorization/tutor/tutor"

const MainPageTutor = () => {
    const { sessionToken } = useAppContext();
    const [posts, setPost] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(posts.length / itemsPerPage);

    const currentPosts = posts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_ENDPOINT}/api/posts/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${sessionToken}`,
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();

          if (response.ok) {
            console.log("Lấy thành công");
            const filteredPosts = data.filter(
              (post) => post.status !== "Đã phê duyệt"
            );
            const sortedPosts = filteredPosts.sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            setPost(sortedPosts);
          } else {
            console.error("Lấy thất bại!");
          }
        } catch (error) {
          console.error("Có lỗi xảy ra:", error);
        }
      };
      fetchData();
    }, []);

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
