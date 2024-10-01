import Page from "../../layouts/login_signup/Page";
import Image1 from "../../assets/image/EMAILVECTOR.png";
const VerifyEmail = () => {
  return (
    <Page>
      <form className="flex flex-col w-[420px] h-[600px] bg-gray-200 ml-auto mr-auto items-center gap-8 rounded-xl">
        <h2 className="font-bold text-2xl pt-[60px]">Xác minh email</h2>
        <img className="w-[150px] h-[150px]" src={Image1} alt="a" />
        <div className="flex gap-5 flex-col w-[100%] items-center">
          <strong className="w-[60%] text-center">
            Vui lòng nhập mã xác nhận đã gửi về email của bạn
          </strong>

          <div className="flex items-center w-[100%] justify-center gap-2">
            <input
              className="border-b-2 bg-amber-300 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%]"
              type="email"
            />
            <input
              className="border-b-2 bg-amber-300 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%]"
              type="email"
            />
            <input
              className="border-b-2 bg-amber-300 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%]"
              type="email"
            />
            <input
              className="border-b-2 bg-amber-300 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%]"
              type="email"
            />
          </div>
          <button className="bg-amber-500 w-[340px] h-[60px] rounded-xl mt-3">
            Xác minh
          </button>
          <div className="flex justify-center container mx-auto p-4 w-[100%] text-center">
            <div className="border-t w-[60%] text-center  border-black"></div>
          </div>
        </div>
      </form>
    </Page>
  );
};

export default VerifyEmail;
