import Page from "../../layouts/panel/Panel";
import Tutor from "../../layouts/PageAuthorization/tutor/tutor";
import Review from "../../layouts/review/Review";

const MyReviews = () => {
  return (
    <Tutor>
      <Page role="tutor" activeItem={5}>
        <Review height='max-h-[600px]' />
      </Page>
    </Tutor>
  );
};

export default MyReviews;
