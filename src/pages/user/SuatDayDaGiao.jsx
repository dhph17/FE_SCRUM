import ItemPost from "../../layouts/itemPost/ItemPost";
import Parent from "../../layouts/PageAuthorization/parent/parent";
import Page from "../../layouts/panel/Panel";


const SuatDayDaGiao = () => {
  return (
    <Parent>
      <Page role='parent' activeItem={5}>
        <div className="border-solid border-2 border-indigo-600 rounded-2xl mb-2">
          <ItemPost state="Đã giao" />
          <div className="bg-custom_darkblue h-[55px] flex justify-center items-center gap-10 rounded-b-2xl">
            <button className="bg-yellow-500 w-[13vw] p-2 rounded-2xl font-semibold">Đánh giá gia sư</button>
          </div>
        </div>

      </Page>
    </Parent>
  );
};

export default SuatDayDaGiao;
