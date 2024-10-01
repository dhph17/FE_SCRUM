import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[25rem] bg-[#E3E6F0] p-3 mt-5 ml-[35%] rounded-[20px] shadow-lg w-[140%] h-[690px] text-center relative z-10 border-2 border-[#002182]"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h2 className="text-[1.5rem] font-bold mt-12 mb-11 ">ĐĂNG NHẬP</h2>
      <div className="mb-4 pb-[1.2rem]">
        <input
          type="email"
          id="email"
          placeholder="Username or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[90%] h-[3.5rem] p-2 bg-[#F1BB45] bg-opacity-50 rounded-[15px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[115%] placeholder:font-medium placeholder:font-poppins"
          style={{
            boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="password"
          placeholder="Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-[90%] h-[3.5rem] p-2 bg-[#F1BB45] bg-opacity-50 rounded-[15px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder:text-[115%] placeholder:font-medium placeholder:font-poppins"
          style={{
            boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>
      <h3 className="mt-5 mr-5 text-[0.9rem] text-right font-medium font-poppins">
        <a href="#" className="text-black ">
          Quên mật khẩu?
        </a>
      </h3>
      <button
        type="submit"
        className=" w-[92%] h-[3.3rem] mt-9 px-4 py-2 bg-[#F1BB45] rounded-[20px] text-black font-semibold font-poppins text-[1.1rem] hover:bg-[#F1BB45] hover:transition-all "
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        Đăng nhập
      </button>
      <h3 className="w-80px mt-[5.5rem] text-[0.9rem] font-medium font-poppins">
        Bạn chưa có tài khoản?{" "}
        <a href="#" className="text-black underline">
          Tạo tài khoản
        </a>
      </h3>
      <hr className="w-[60%] mx-auto border-t-2 border-dashed border-black my-4" />
    </form>
  );
};

export default LoginForm;
