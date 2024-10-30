import PropTypes from "prop-types";

import Page from "../../layouts/panel/Panel";
import Tutor from "../../layouts/PageAuthorization/tutor/tutor";
import Image from "../../assets/image/User.png";

const dummyReviews = [
  { rating: 3.5, comment: "Great tutor, but needs to improve punctuality. Very knowledgeable and helpful ", username: "user1", avatar: Image },
  { rating: 4.0, comment: "Very knowledgeable and helpful.", username: "user2", avatar: Image },
  { rating: 2.5, comment: "Couldn’t explain the concepts clearly.", username: "user3", avatar: Image },
  { rating: 5.0, comment: "Excellent tutor! Highly recommended.", username: "user4", avatar: Image },
  { rating: 3.0, comment: "Good, but can be more interactive.", username: "user5", avatar: Image },
  { rating: 4.5, comment: "Great at simplifying difficult topics.", username: "user6", avatar: Image },
  { rating: 3.2, comment: "Decent tutor, but needs to focus more.", username: "user7", avatar: Image },
  { rating: 2.0, comment: "Not very satisfied with the explanations.", username: "user8", avatar: Image },
  { rating: 4.8, comment: "Amazing tutoring experience.", username: "user9", avatar: Image },
  { rating: 3.6, comment: "Good, but needs to provide more examples.", username: "user10", avatar: Image },
  { rating: 4.3, comment: "Very patient and helpful.", username: "user11", avatar: Image },
  { rating: 3.9, comment: "Overall good experience, but room for improvement.", username: "user12", avatar: Image },
  { rating: 5.0, comment: "Absolutely the best tutor!", username: "user13", avatar: Image }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill().map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star text-[#FFAC34]"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-stroke text-[#FFAC34]"></i>}
      {Array(emptyStars).fill().map((_, i) => (
        <i key={`empty-${i}`} className="fas fa-star text-gray-300"></i>
      ))}
    </div>
  );
};

// const formatComment = (comment) => {
//   const words = comment.split(" ");
//   let formattedComment = "";
//   let currentLine = "";

//   words.forEach((word) => {
//     if ((currentLine + word).length > 50 || currentLine.split(" ").length >= 10) {
//       formattedComment += currentLine.trim() + "\n";
//       currentLine = "";
//     }
//     currentLine += word + " ";
//   });

//   if (currentLine) {
//     formattedComment += currentLine.trim();
//   }

//   return formattedComment;
// };

const MyReviews = () => {
  return (
    <Tutor>
      <Page role="tutor" activeItem={5}>
        <div className="grid grid-cols-2 gap-5 max-h-[600px] overflow-y-scroll p-4">
          {[0, 1].map((col) => (
            <div key={col} className="flex flex-col space-y-5">
              {dummyReviews
                .filter((_, index) => index % 2 === col)
                .map((review, index) => (
                  <div key={index} className="flex flex-col bg-white border-b border-gray-200 rounded-lg px-6 py-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <img src={review.avatar} alt={review.username} className="w-12 h-12 rounded-full" />
                        <strong className="text-lg font-semibold ml-1">{review.username}</strong>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="mt-2 text-gray-600 font-semibold">{review.comment}</p>
                    <p className="mt-3 text-[0.75rem] text-custom_gray">2/10/2024</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Page>
    </Tutor>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default MyReviews;
