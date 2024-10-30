import PropTypes from "prop-types";
import { useAppContext } from "../../AppProvider";
import { useNavigate } from "react-router-dom";
import User from "../../assets/image/User.png";

const ItemReport = ({ report }) => {
  const { sessionToken } = useAppContext();
  const navigate = useNavigate();

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
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm mb-6 bg-white w-[55rem] mx-auto">
      <div className="flex justify-between items-center border-b py-3 mb-4 bg-yellow-100 p-2 rounded-lg shadow-md">
        <div className="text-gray-700 font-semibold text-lg">
          Mã báo cáo:
          <span className="text-blue-700 underline ml-1">{report.report_id || "N/A"}</span>
        </div>
      </div>

      <div className=" flex justify-end">
        <div className="text-gray-500 text-sm">
          <span className="font-bold">Báo cáo lúc:</span>
          <span> {formatDate(report.created_at)}</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Reporter Information */}
        <div className="flex items-center">
          <img
            src={report.reporter_avt ? `${import.meta.env.VITE_API_ENDPOINT}/${report.reporter_avt}` : User}
            alt="Reporter Avatar"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div className="flex-1">
            <p className="text-gray-900 font-medium">
              {report.reporter_name || "N/A"}
            </p>
            <p className="text-gray-500 text-sm font-bold">Người báo cáo</p>
          </div>
        </div>

        {/* Reported Party Information */}
        <div className="flex items-center">
          <img
            src={report.reported_party_avt ? `${import.meta.env.VITE_API_ENDPOINT}/${report.reported_party_avt}` : User}
            alt="Reported Party Avatar"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div className="flex-1">
            <p className="text-gray-900 font-medium">
              {report.reported_party_name || "N/A"}
            </p>
            <p className="text-gray-500 text-sm font-bold">Bên bị báo cáo</p>
          </div>
        </div>

        {/* Report Details */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-semibold">Loại báo cáo:</p>
            <p className="text-gray-900">{report.type || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Mã bài viết:</p>
            <p className="text-gray-900">{report.post_id || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Mã phản hồi:</p>
            <p className="text-gray-900">{report.feedback_id || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Trạng thái:</p>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${report.resolved
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
                }`}
            >
              {report.resolved ? "Đã giải quyết" : "Chưa giải quyết"}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="font-semibold text-gray-700">Mô tả:</p>
          <p className="text-gray-900">
            {report.description || "Không có mô tả"}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-10 pt-5 space-x-3">
          <button
            className="text-white font-semibold bg-red-500 py-2 px-4 rounded-lg hover:bg-red-400"
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
            className="text-white font-semibold bg-blue-700 py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => handleViewPost(report.post_id)}
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
    reporter_name: PropTypes.string,
    reporter_id: PropTypes.string,
    reported_party_id: PropTypes.string,
    reported_party_name: PropTypes.string,
    reporter_avt: PropTypes.string,
    reported_party_avt: PropTypes.string,
    type: PropTypes.string,
    post_id: PropTypes.string,
    feedback_id: PropTypes.string,
  }).isRequired,
};

export default ItemReport;