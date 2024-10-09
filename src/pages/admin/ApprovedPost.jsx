import { useEffect, useState } from "react";
import Page from "../../layouts/panel/Panel";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Pagination from "../../layouts/pagination/pagination";
import Admin from "../../layouts/PageAuthorization/admin/admin";
import { useAppContext } from "../../AppProvider";

const ApprovedPost = () => {
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { sessionToken } = useAppContext();
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchApprovedPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ENDPOINT}/api/admin/posts/?status=approved`,
          {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${sessionToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setPostList(data.results);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchApprovedPosts();
  }, []);



  const totalPages = Math.ceil(postList.length / itemsPerPage);

  const currentPosts = postList.slice(
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
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white"
            >
              <ItemPost user={post} tag="Đã phê duyệt">
                <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8">
                  Xóa bài đăng
                </button>
              </ItemPost>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Page>
    </Admin>
  );
};

export default ApprovedPost;
