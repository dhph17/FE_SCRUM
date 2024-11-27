import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Page from "../../layouts/panel/Panel";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Pagination from "../../layouts/pagination/pagination";
import Admin from "../../layouts/PageAuthorization/admin/admin";
import { useAppContext } from "../../AppProvider";
import { useParams, useLocation } from "react-router-dom";

const ApprovedPost = () => {
  const [postList, setPostList] = useState([]);
  const location = useLocation();
  const { comment_id, comments } = location.state || {};
  console.log("Received comment:", comments); // Ghi log giá trị của comment
  const [showPopupCmt, setShowPopupCmt] = useState(false);
  const [popupComments, setPopupComments] = useState([]);
  const [commentsFetched, setCommentsFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { sessionToken } = useAppContext();
  const itemsPerPage = 10;
  const { postId } = useParams();

  useEffect(() => {
    const fetchApprovedPosts = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/admin/posts/?status=approved`,
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

  const handleViewCmt = () => {
    setShowPopupCmt(true);
    if (!commentsFetched) {
      fetchComments();
    }
  };

  const fetchComments = async () => {
    try {
      const fetchedComments = await Promise.all(
        comments.map(async (id) => {
          const response = await fetch(
            `http://127.0.0.1:8000/api/admin/report-comment/${id}/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${sessionToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error(
              `Error fetching comment ${id}: ${response.statusText}`
            );
          }
          const data = await response.json();
          console.log("Fetched comment data:", data);
          return data;
        })
      );
      setPopupComments(fetchedComments);
      setCommentsFetched(true);
    } catch (error) {
      console.error("Error fetching comments:", error);
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
              <ItemPost
                user={post}
                tag="Đã phê duyệt"
                comment_id={comment_id}
                comments={comments}
              >
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
                {comment_id && (
                  <button
                    className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8"
                    onClick={handleViewCmt}
                  >
                    Xem bình luận bị báo cáo
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

        {showPopupCmt && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                onClick={() => setShowPopupCmt(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                Đóng
              </button>
              {/* Tiêu đề */}
              <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                Bình luận bị báo cáo
              </h2>
              <div className="space-y-6">
                {/* Khi không có bình luận */}
                {popupComments.length === 0 && (
                  <p className="text-gray-600 text-center">
                    Không có bình luận nào.
                  </p>
                )}
                {/* Khi có một bình luận */}
                {popupComments.length === 1 && (
                  <div
                    key={popupComments[0].comment_id}
                    className="flex items-start p-5 border rounded-lg bg-yellow-100 shadow-md"
                  >
                    <img
                      src={
                        `${import.meta.env.VITE_API_ENDPOINT}${
                          popupComments[0].user.avatar
                        }` || "/default-avatar.png"
                      }
                      alt="Avatar"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm text-gray-600">
                        Người dùng:{" "}
                        <span className="font-semibold">
                          {popupComments[0].user.profilename}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">
                        Thời gian:{" "}
                        {new Date(popupComments[0].created_at).toLocaleString()}
                      </p>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        {popupComments[0].comment}
                      </p>
                    </div>
                  </div>
                )}
                {/* 2 cmt */}
                {popupComments.length === 2 && (
                  <div className="space-y-4">
                    {/* cmt cha */}
                    <div
                      key={popupComments[0].comment_id}
                      className="flex items-end p-4 border rounded-lg bg-gray-50 shadow-sm"
                    >
                      <img
                        src={
                          `${import.meta.env.VITE_API_ENDPOINT}${
                            popupComments[0].user.avatar
                          }` || "/default-avatar.png"
                        }
                        alt="Avatar"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <p className="text-lg font-medium text-gray-800">
                          {popupComments[0].comment}
                        </p>
                        <span className="text-xs text-gray-500 italic">
                          Bình luận gốc
                        </span>
                        <p className="text-sm text-gray-600 mt-1">
                          Người dùng:{" "}
                          <span className="font-semibold">
                            {popupComments[0].user.profilename}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          Thời gian:{" "}
                          {new Date(
                            popupComments[0].created_at
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    {/* cmt con */}
                    <div
                      key={popupComments[1].comment_id}
                      className="flex items-end ml-6 p-4 border rounded-lg bg-yellow-100 shadow-md relative before:absolute before:left-[-24px] before:top-1/2 before:transform before:translate-y-[-50%] before:w-6 before:h-6 before:bg-yellow-100 before:border-l-4 before:border-t-4 before:border-gray-300 before:rounded-full"
                    >
                      <img
                        src={
                          `${import.meta.env.VITE_API_ENDPOINT}${
                            popupComments[1].user.avatar
                          }` || "/default-avatar.png"
                        }
                        alt="Avatar"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <p className="text-lg font-medium text-gray-800 bg-yellow-50 px-2 py-1 rounded-lg border-solid border-[1px] border-gray-300">
                          {popupComments[1].comment}
                        </p>
                        <span className="text-xs text-red-500 italic">
                          Bình luận bị báo cáo
                        </span>
                        <p className="text-sm text-gray-600 mt-1">
                          Người dùng:{" "}
                          <span className="font-semibold">
                            {popupComments[1].user.profilename}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          Thời gian:{" "}
                          {new Date(
                            popupComments[1].created_at
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
