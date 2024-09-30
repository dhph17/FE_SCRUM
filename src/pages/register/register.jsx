import React, { useState } from "react";
import Page from '../../layouts/login_signup/Page'; // Import the Page component

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "gia su",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    // Use the Page component as a wrapper to apply background and overlay
    <Page>
      {/* Add shadow to the container */}
      <div className="bg-white shadow-lg rounded-3xl px-10 py-8 w-[400px] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng Kí</h2>
        <form onSubmit={handleSubmit}>
          
          {/* Add shadow to the text fields */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="pl-3 text-custom_gray">
                <i className="far fa-envelope"></i> {/* Font Awesome envelope icon */}
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.username}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
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
                  value="gia su"
                  checked={formData.role === "gia su"}
                  onChange={handleChange}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Gia sư</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="phu huynh"
                  checked={formData.role === "phu huynh"}
                  onChange={handleChange}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Phụ huynh</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Đăng kí
            </button>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default Register;
