import Page from "../../layouts/panel/Panel";
import Img1 from "../../assets/image/logo_.png"
import Img2 from "../../assets/image/assignment.png.png"

const SuatDayDaGiao = () => {
  return (
    <Page>
      <div className="border-solid border-2 border-indigo-600 rounded-2xl mb-2">
        <div className="flex justify-between p-2">
            <div className="flex gap-5">
            <img className="w-[50px] h-[50px] rounded-full" src={Img1} alt="" />
            <div>
            <strong>Nguyễn Văn A</strong>
            <p className="opacity-60">12:30 12/10/2024</p>
            </div>
            </div>
            <div className="flex gap-3">
                <img className="w-[22px] h-[22px]" src={Img2} alt="" />
                <p>Đã giao</p>
            </div>
        </div>
        <div className="p-2">
            <ul className="grid grid-cols-2 gap-1">
                <li className="flex gap-3"><strong>Môn học :</strong><p>abc</p></li>
                <li className="flex gap-3"><strong>Học phí :</strong><p></p></li>
                <li className="flex gap-3"><strong>Lớp :</strong><p></p></li>
                <li className="flex gap-3"><strong>Địa chỉ :</strong><p></p></li>
                <li className="flex gap-3"><strong>Trình độ :</strong><p></p></li>
                <li className="flex gap-3"><strong>Buổi học :</strong><p></p></li>
                <li className="flex gap-3"><strong>Số học viên :</strong><p></p></li>
                <li className="flex gap-3"><strong>Ghi chú :</strong><p></p></li>
            </ul>
        </div>
        <div className="bg-blue-500 h-[55px] flex justify-center items-center gap-10 rounded-b-2xl">
            <button className="bg-yellow-500 p-2 rounded-2xl">Đánh giá gia sư</button>
        </div>
      </div>
     
    </Page>
  );
};

export default SuatDayDaGiao;
