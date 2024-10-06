import Page from "../../layouts/panel/Panel";
import ItemPost from "../../layouts/itemPost/ItemPost";

const BaiDangDuocDuyet = () => {
  return (
    <Page role='parent' activeItem={3}>
      <div className="border-solid border-2 border-indigo-600 rounded-2xl mb-2">
        <ItemPost state="Được duyệt" />
        <div className="bg-custom_darkblue h-[55px] flex justify-center items-center gap-10 rounded-b-2xl">
          <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold">Duyệt bài đăng</button>
          <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold">Xóa bài đăng</button>
          <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold">Danh sách gia sư đăng ký</button>


        </div>
      </div>
      <div className="border-solid border-2 border-indigo-600 rounded-2xl mb-2">
        <ItemPost state="Được duyệt" />
        <div className="bg-custom_darkblue h-[55px] flex justify-center items-center gap-10 rounded-b-2xl">
          <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold">Duyệt bài đăng</button>
          <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold">Xóa bài đăng</button>
          <button className="bg-yellow-500 w-[14vw] p-2 rounded-2xl font-semibold">Danh sách gia sư đăng ký</button>
        </div>
      </div>
    </Page>
  );
};

export default BaiDangDuocDuyet;
