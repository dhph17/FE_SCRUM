import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAppContext } from '../../AppProvider'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  let navigate = useNavigate()

  const { setSessionToken, setRole, setId } = useAppContext()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(username);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [isEmail ? 'email' : 'username']: username,
          password
        }),
      });

      const data = await response.json();


      if (response.ok) {
        setSessionToken(data.token.access);
        setRole(data.data.role || data.data.user.role);
        const role = data.data.role || data.data.user.role;
        localStorage.setItem('refreshToken', data.token.refresh);
        console.log("Đăng nhập thành công!");
        console.log("Role: ", role)
        if (role === 'admin') {
          navigate('/admin/approved-post')
        } else if (role === 'tutor') {
          navigate('/tutor/main-page')
        } else if (role === 'parent') {
          setId(data.data.parent_id)
          navigate('/parent/main-page')
        }
      } else {
        setError(data.message || "Đăng nhập thất bại!");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[25rem] bg-[#E3E6F0] rounded-[20px] shadow-lg text-center relative z-1 border-2 border-[#002182] -mt-6 pb-16 pt-12"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h2 className="text-[1.5rem] font-bold mb-9 ">ĐĂNG NHẬP</h2>
      <div className="mb-8">
        <input
          type="text"
          id="username"
          placeholder="Username or email"
          value={username}
          onChange={(e) => (setUsername(e.target.value), setError(''))}
          required
          className="w-[90%] text-[1.2 rem] px-5 py-3 bg-[#F1BB45] bg-opacity-50 rounded-[15px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[1.2 rem] placeholder:font-medium placeholder:font-poppins"
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
          onChange={(e) => (setPassword(e.target.value), setError(''))}
          required
          className="w-[90%] text-[1.2 rem] px-5 py-3 bg-[#F1BB45] bg-opacity-50 rounded-[15px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[1.2 rem] placeholder:font-medium placeholder:font-poppins"
          style={{
            boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>
      <h3 className="mt-5 mr-5 text-[0.9rem] text-right font-medium">
        <Link to="/forgotPassword" className="text-black ">
          Quên mật khẩu?
        </Link>
      </h3>
      <p
        className="text-red-500 pt-1 font-semibold"
        style={{
          height: "0.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: error }}
      ></p>
      <button
        type="submit"
        className=" w-[92%] h-[3.3rem] mt-9 px-4 py-2 bg-[#F1BB45] rounded-[20px] text-black font-semibold font-poppins text-[1.1rem] hover:bg-[#F1BB45] hover:transition-all "
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        Đăng nhập
      </button>
      <h3 className="w-80px mt-6 mb-2 text-[0.9rem] font-medium">
        Bạn chưa có tài khoản?{" "}
        <Link to="/register" className="text-black underline">
          Tạo tài khoản
        </Link>
      </h3>
      <hr className="w-[60%] mx-auto border-t-2 border-dashed border-black" />
    </form>
  );
};

export default LoginForm;
