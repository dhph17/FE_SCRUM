import Page from "../../layouts/login_signup/Page";
import Image1 from "../../assets/image/image_service_email.png";
const ForgotPasswordPage = () => {
  return (
    <Page>
      <form className="flex flex-col w-[25rem] h-[550px] bg-gray-200 ml-auto mr-auto items-center rounded-xl border-2 border-[#002182] -mt-12">
        <h2 className="font-bold text-2xl pt-[60px] mb-3">Quên mật khẩu</h2>
        <img className="w-[120px] h-[120px] mb-5" src={Image1} alt="a" />
        <div className="flex gap-5 flex-col justify-center">
          <strong className="w-[100%] text-center">
            Vui lòng nhập email để nhận mã xác nhận
          </strong>
          <div className="flex items-center w-[100%] justify-center gap-2">
            <svg
              className="w-[22px] h-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <input
              className="border-b-2 justify-center border-neutral-950 bg-transparent py-1 outline-none w-[80%]"
              type="email"
            />
          </div>
          <button className="bg-custom_yellow w-[340px] h-[60px] rounded-xl mt-3 font-bold">
            Gửi
          </button>
          <hr className="w-[60%] mx-auto border-t-2 border-dashed border-black" />
        </div>
      </form>
    </Page>
  );
};

export default ForgotPasswordPage;
