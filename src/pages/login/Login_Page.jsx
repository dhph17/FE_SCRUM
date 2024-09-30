import Page from "../../layouts/login_signup/Page";
import LoginForm from "../../layouts/login_signup/Login_Form";

const Login_Page = () => {
  return (
    <Page>
      <div className="flex items-center justify-center">
        <div className="flex-shrink-0">
          <LoginForm />
        </div>

        <div className="flex flex-col items-center ml-[10rem] mb-[5rem]">
          <div className="flex items-center">
            <hr className="w-[65px] border-t-2 border border-black my-4" />
            <div className="text-[32px] font-bold text-black ml-2">Sign in</div>
          </div>
          <div className="mt-[1rem] ml-[4rem] text-left">
            <h3 className="text-[18px] font-semibold font-poppins">
              Điền tên đăng nhập và mật khẩu
            </h3>
            <h3 className="text-[18px] font-semibold font-poppins">
              vào ô bên cạnh.
            </h3>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Login_Page;
