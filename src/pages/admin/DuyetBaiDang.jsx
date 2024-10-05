import Page from "../../layouts/panel/Panel";
import ItemPost from "../../layouts/itemPost/ItemPost";

const DuyetBaiDang = () => {
  return (
    <Page>
      <div className="border-solid border-2 border-custom_darkblue rounded-2xl mb-2">
        <ItemPost state="Chờ duyệt" />
        <div className="bg-custom_darkblue h-[55px] flex justify-center items-center gap-10 rounded-b-xl">
          <button className="bg-yellow-500 p-2 rounded-2xl font-semibold w-[12vw]">Duyệt bài đăng</button>
          <button className="bg-yellow-500 p-2 rounded-2xl font-semibold w-[12vw]">Xóa bài đăng</button>
        </div>
      </div>
      <div className="border-solid border-2 border-custom_darkblue rounded-2xl mb-2">
        <ItemPost state="Chờ duyệt" />
        <div className="bg-custom_darkblue h-[55px] flex justify-center items-center gap-10 rounded-b-xl">
          <button className="bg-yellow-500 p-2 rounded-2xl font-semibold w-[12vw]">Duyệt bài đăng</button>
          <button className="bg-yellow-500 p-2 rounded-2xl font-semibold w-[12vw]">Xóa bài đăng</button>

        </div>
      </div>
    </Page>
  );
};

export default DuyetBaiDang;
