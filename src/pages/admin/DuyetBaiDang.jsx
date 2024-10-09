import { useEffect, useState } from "react";
import { useAppContext } from "../../AppProvider";
import Page from "../../layouts/panel/Panel";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Pagination from "../../layouts/pagination/pagination";
import Admin from "../../layouts/PageAuthorization/admin/admin";
import VerifyPost from "../../layouts/popup/Verify_Post";

const DuyetBaiDang = () => {
  const [postList, setPostList] = useState([]);
  const { sessionToken } = useAppContext();
  const [selectedPost, setSelectedPost] = useState(null); // Chọn bài đăng hiện tại để duyệt

  const handleApproveClick = (post) => {
    setSelectedPost(post); 
  };

  const handleClosePopup = () => {
    setSelectedPost(null); 
  };

  const handleApprovePost = async () => {
    if (!selectedPost) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/api/admin/posts/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post_id: selectedPost.post_id,
            status: "Đã phê duyệt",
          }),
        }
      );

      if (response.ok) {
        console.log("Cập nhật trạng thái thành công!");
        setSelectedPost(null); 
      } else {
        console.error("Lỗi khi cập nhật trạng thái!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ENDPOINT}/api/admin/posts`,
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
          setPostList(data.results);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
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
      <Page activeItem={4}>
        <div className="relative max-h-[38rem] overflow-y-auto grid grid-cols-1 gap-4">
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white"
            >
              <ItemPost user={post} tag={post.status || "Chờ duyệt"}>
                <button
                  className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8"
                  onClick={() => handleApproveClick(post)} // Mở popup xác nhận
                >
                  Duyệt bài đăng
                </button>
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

        {selectedPost && (
          <VerifyPost
            post={selectedPost}
            onApprove={handleApprovePost} 
            onClose={handleClosePopup}  
          />
        )}
      </Page>
    </Admin>
  );
};

export default DuyetBaiDang;
