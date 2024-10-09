import PropTypes from "prop-types";

const VerifyPost = ({ onApprove, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Xác nhận duyệt bài</h2>
        <p>Bạn có chắc chắn muốn duyệt bài đăng này không?</p>

        <div className="flex justify-around mt-6">
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300"
            onClick={onApprove} 
          >
            Xác nhận
          </button>
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition duration-300"
            onClick={onClose} 
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

VerifyPost.propTypes = {
  post: PropTypes.object.isRequired, 
  onApprove: PropTypes.func.isRequired, 
  onClose: PropTypes.func.isRequired,   
};

export default VerifyPost;
