import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register_Form = () => {
    const [error, setError] = useState(null);
    let navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("tutor")
    const [confirmPassword, setConfirm] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Nhập đúng mật khẩu xác nhận");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/register/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        email: email,
                        password: password,
                        role: role
                    },
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Đăng kí thành công!");
                toast.success("Đăng kí thành công!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("/");
            } else {
                setError(data.message || "Đăng kí thất bại!");
            }
        } catch (error) {
            console.log(error)
            setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
        }
    };
    return (
        <div className="bg-white shadow-lg rounded-3xl px-10 py-4 w-[400px] mx-auto border-2 border-[#002182] -mt-12">
            <h2 className="text-[1.5rem] font-bold text-center mb-6">Đăng Kí</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="flex items-center border rounded-md shadow-sm">
                        <span className="pl-3 text-custom_gray">
                            <i className="far fa-envelope"></i>
                        </span>
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => (setEmail(e.target.value), setError(''))}
                            className="border-0 w-full py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
                            placeholder="Nhập email"
                        />
                    </div>
                </div>

                <div className="mb-4 relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Tên đăng nhập
                    </label>
                    <div className="flex items-center border rounded-md shadow-sm">
                        <span className="pl-3 text-custom_gray">
                            <i className="far fa-user"></i> {/* Font Awesome user icon */}
                        </span>
                        <input
                            type="text"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => (setUsername(e.target.value), setError(''))}
                            className="border-0 w-full py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
                            placeholder="Nhập tên đăng nhập"
                        />
                    </div>
                </div>

                <div className="mb-4 relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Mật khẩu
                    </label>
                    <div className="flex items-center border rounded-md shadow-sm">
                        <span className="pl-3 text-custom_gray">
                            <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
                        </span>
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => (setPassword(e.target.value), setError(''))}
                            className="border-0 w-full py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                </div>

                <div className="mb-4 relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="confirmPassword"
                    >
                        Xác nhận mật khẩu
                    </label>
                    <div className="flex items-center border rounded-md shadow-sm">
                        <span className="pl-3 text-custom_gray">
                            <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
                        </span>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            value={confirmPassword}
                            onChange={(e) => (setConfirm(e.target.value), setError(''))}
                            className="border-0 w-full py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
                            placeholder="Xác nhận mật khẩu"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Vai trò
                    </label>
                    <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="role"
                                value="tutor"
                                checked={role === "tutor"}
                                onChange={(e) => (setRole(e.target.value), setError(''))}
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Gia sư</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="role"
                                value="parent"
                                checked={role === "parent"}
                                onChange={(e) => (setRole(e.target.value), setError(''))}
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Phụ huynh</span>
                        </label>
                    </div>
                </div>
                <p
                    className="text-red-500 text-center font-semibold -mt-2 mb-1"
                    style={{
                        height: "2rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: error }}
                ></p>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-custom_yellow hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Đăng kí
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register_Form