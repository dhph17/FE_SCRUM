import PropTypes from "prop-types";
import Review from "../review/Review"

const ReviewTutor = ({ onClose }) => {
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md"
            onClick={handleBackgroundClick}
        >
            <div className="bg-gray-200 w-[70%] px-2 py-3">
                <Review height='max-h-[450px]' />
                <div className="mt-3 flex w-full justify-end">
                    <button
                        className=" bg-red-500 mr-8 w-[100px] text-white py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
                        onClick={onClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    )
}

ReviewTutor.propTypes = {
    onClose: PropTypes.func,
};

export default ReviewTutor