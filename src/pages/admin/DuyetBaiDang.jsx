import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppProvider";
import Page from "../../layouts/panel/Panel";
import ItemPost from "../../layouts/itemPost/ItemPost";
import Pagination from "../../layouts/pagination/pagination";
import Admin from "../../layouts/PageAuthorization/admin/admin";

const DuyetBaiDang = () => {
  let navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { sessionToken, setSessionToken, setRole } = useAppContext();
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
          const approvedPosts = data.filter(
            (post) => post.status === "Đang chờ phê duyệt"
          );
          setPostList(approvedPosts);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(postList.length / itemsPerPage);

  const currentPosts = postList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const approvePost = async (postId, status) => {
    try {
      const response = await fetch(
        "${import.meta.env.VITE_API_ENDPOINT}/api/admin/posts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post_id: postId,
            status: status,
          }),
        }
      );

      if (response.ok) {
        setSessionToken("");
        setRole("");
        localStorage.removeItem("refreshToken");
        navigate("/");
        console.log("Cập nhật trạng thái thành công!");
      } else {
        console.error("Lỗi khi cập nhật trạng thái!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
              <ItemPost user={post} tag={post.status || "Chờ duyệt"}>
                <button
                  className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold mx-8"
                  onClick={() => approvePost(post.id, "Đã phê duyệt")}
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
