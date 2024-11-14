import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Page from "../../layouts/panel/Panel";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Pagination from "../../layouts/pagination/pagination";
import Admin from "../../layouts/PageAuthorization/admin/admin";
import { useAppContext } from "../../AppProvider";
import { useParams } from "react-router-dom";

const ApprovedPost = () => {
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { sessionToken } = useAppContext();
  const itemsPerPage = 10;

  const { postId } = useParams();

  useEffect(() => {
    const fetchApprovedPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ENDPOINT}/api/admin/posts/?status=approved`,
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
          if (postId) {
            setPostList(data.results.filter((post) => post.post_id === postId));
          } else {
            setPostList(data.results);
          }
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

  //Delete
  const handleDeleteClick = (post_id) => async () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài đăng này không?")) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ENDPOINT}/api/admin/posts/${post_id}/`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${sessionToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          setPostList((prevPosts) =>
            prevPosts.filter((post) => post.post_id !== post_id)
          );
        } else {
          console.error("Failed to delete post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <Admin>
      <Page activeItem={4}>
        <div className="relative max-h-[38rem] overflow-y-auto grid grid-cols-1 gap-4">
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className="border-[3px] rounded-[1rem] border-[#002182] shadow-md bg-white mb-6"
            >
              <ItemPost user={post} tag="Đã phê duyệt">
                <button
                  className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8"
                  onClick={handleDeleteClick(post.post_id)}
                >
                  Xóa bài đăng
                </button>
                {postId && (
                  <button
                    className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8"
                    onClick={() => {
                      window.history.back();
                    }}
                  >
                    Xem lại báo cáo
                  </button>
                )}
              </ItemPost>
            </div>
          ))}
        </div>
        {!postId && (
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}

        {postList.length === 0 && (
          <div>
            <div className="text-center mt-4 text-lg font-semibold">
              Không tồn tại bài đăng nào hoặc bài đăng đã đóng
            </div>
            <div className="text-center mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
                onClick={() => {
                  window.history.back();
                }}
              >
                Quay lại
              </button>
            </div>
          </div>
        )}

      </Page>
    </Admin>
  );
};
ApprovedPost.propTypes = {
  postID: PropTypes.string,
};

export default ApprovedPost;
