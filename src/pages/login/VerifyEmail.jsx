import Page from "../../layouts/login_signup/Page";
import Image1 from "../../assets/image/EMAILVECTOR.png";
const VerifyEmail = () => {
  return (
    <Page>
      <form className="flex flex-col w-[25rem] bg-gray-200 ml-auto mr-auto items-center rounded-xl -mt-8 py-12 border-2 border-[#002182]">
        <h2 className="font-bold text-2xl mb-3">Xác minh email</h2>
        <img className="w-[120px] h-[120px]" src={Image1} alt="a" />
        <div className="flex gap-5 flex-col w-[100%] items-center">
          <strong className="w-[60%] text-center">
            Vui lòng nhập mã xác nhận đã gửi về email của bạn
          </strong>

          <div className="flex items-center w-[100%] justify-center gap-2">
            <input
              className="border-b-2 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%] font-bold text-[1.2rem]"
              type="text"
              maxLength="1"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
              onKeyDown={(e) => {
                if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <input
              className="border-b-2 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%] font-bold text-[1.2rem]"
              type="text"
              maxLength="1"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
              onKeyDown={(e) => {
                if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <input
              className="border-b-2 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%] font-bold text-[1.2rem]"
              type="text"
              maxLength="1"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
              onKeyDown={(e) => {
                if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <input
              className="border-b-2 justify-center text-center border-yellow-500 bg-transparent p-1 outline-none w-[10%] font-bold text-[1.2rem]"
              type="text"
              maxLength="1"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
              onKeyDown={(e) => {
                if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <button className="bg-custom_yellow w-[340px] h-[60px] rounded-xl mt-3 font-bold">
            Xác minh
          </button>
          <hr className="w-[60%] mx-auto border-t-2 border-dashed border-black" />
        </div>
      </form>
    </Page>
  );
};

export default VerifyEmail;
