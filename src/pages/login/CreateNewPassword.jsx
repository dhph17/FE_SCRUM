import Page from "../../layouts/login_signup/Page";
import Image1 from "../../assets/image/image_service_email.png";
import Image2 from "../../assets/image/Ellipsis.png";
const CreateNewPassword = () => {
  return (
    <Page>
      <form className="flex flex-col w-[420px] h-[600px] bg-gray-200 ml-auto mr-auto items-center gap-8 rounded-xl">
        <h2 className="font-bold text-2xl pt-[60px]">Tạo mật khẩu mới</h2>
        <img className="w-[150px] h-[150px]" src={Image1} alt="a" />
        <div className="flex gap-5 flex-col w-[100%] items-center">
          <strong className="w-[60%] text-center">
            Mật khẩu mới phải khác với mật khẩu trước đó đã sử dụng
          </strong>
          <div className="flex items-center w-[100%] justify-center gap-2">
            <img className="w-[36px] h-[20px]" src={Image2} alt="" />
            <input
              className="border-b-2 justify-center border-neutral-950 bg-transparent p-1 outline-none w-[80%]"
              type="email"
            />
          </div>
          <div className="flex items-center w-[100%] justify-center gap-2">
            <img className="w-[36px] h-[20px]" src={Image2} alt="" />
            <input
              className="border-b-2 justify-center border-neutral-950 bg-transparent p-1 outline-none w-[80%]"
              type="email"
            />
          </div>
          <button className="bg-amber-500 w-[340px] h-[60px] rounded-xl mt-3">
            Gửi
          </button>
          <div className="flex justify-center container mx-auto p-4 w-[100%] text-center">
            <div className="border-t  w-[60%] text-center  border-black"></div>
          </div>
        </div>
      </form>
    </Page>
  );
};

export default CreateNewPassword;
