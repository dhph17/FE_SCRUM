import PropTypes from "prop-types";
import { useAppContext } from "../../AppProvider";
import { useNavigate } from "react-router-dom";

const ItemReport = ({ report }) => {
  const { sessionToken } = useAppContext();

  let navigate = useNavigate();

const handleDeleteReport = async (report_id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/report/`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${sessionToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          report_id: report_id,
          resolved: true,
        }),
      }
    );

    if (response.ok) {
      console.log("Report resolved successfully");
      window.location.reload();
    } else {
      console.error("Failed to resolve report");
    }
  } catch (error) {
    console.error("Error resolving report:", error);
  }
};


  const handleViewPost = (post_id) => {
    navigate(`/admin/approved-posts/${post_id}`);
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "N/A";
    const date = new Date(isoDate);
    return date.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm mb-6 bg-white">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div className="text-gray-700 font-semibold text-lg">
          Mã báo cáo:{" "}
          <span className="text-gray-900">{report.report_id || "N/A"}</span>
        </div>
        <div className="text-gray-500 text-sm flex ">
          <div className="font-bold mr-5">Báo cáo lúc: </div>
          <div>{formatDate(report.created_at)}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Người báo cáo:</p>
          <p className="text-gray-900">{report.reporter_id || "N/A"}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Bên bị báo cáo:</p>
          <p className="text-gray-900">{report.reported_party_id || "N/A"}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Loại báo cáo:</p>
          <p className="text-gray-900">{report.type || "N/A"}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Mã bài viết:</p>
          <p className="text-gray-900">{report.post_id || "N/A"}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Mã phản hồi:</p>
          <p className="text-gray-900">{report.feedback_id || "N/A"}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Mô tả:</p>
          <p className="text-gray-900">
            {report.description || "Không có mô tả"}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-600 font-medium">Trạng thái:</p>
          <p
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              report.resolved
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {report.resolved ? "Đã giải quyết" : "Chưa giải quyết"}
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="text-white font-semibold shadow-sm bg-red-500 p-2 rounded-lg hover:shadow-lg hover:bg-red-400"
            onClick={() => {
              if (
                window.confirm("Bạn có chắc chắn muốn xóa báo cáo này không?")
              ) {
                handleDeleteReport(report.report_id);
              }
            }}
          >
            Xóa báo cáo
          </button>
          <button
            className="text-white font-semibold shadow-sm bg-blue-700 p-2 rounded-lg hover:shadow-lg hover:bg-blue-400 ml-4"
            onClick={() => {
              handleViewPost(report.post_id);
            }}
          >
            Xem bài đăng
          </button>
        </div>
      </div>
    </div>
  );
};

ItemReport.propTypes = {
  report: PropTypes.shape({
    report_id: PropTypes.string,
    description: PropTypes.string,
    created_at: PropTypes.string,
    resolved: PropTypes.bool,
    reporter_id: PropTypes.string,
    reported_party_id: PropTypes.string,
    type: PropTypes.string,
    post_id: PropTypes.string,
    feedback_id: PropTypes.string,
  }).isRequired,
};

export default ItemReport;
