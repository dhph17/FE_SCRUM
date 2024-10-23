import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppProvider";
import User from '../../assets/image/User.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

import {
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/image/logo_.png";
import PropTypes from "prop-types";
import Notify from "../notify/Notify";

const Header = ({ setSearch }) => {
  let navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const { sessionToken, setSessionToken, setRole, setId, role, id, name } = useAppContext();

  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (role !== 'admin') {
      const fetchData = async () => {
        try {
          const url = `${import.meta.env.VITE_API_ENDPOINT}/api/${role === 'tutor' ? 'tutors' : 'parents'}/${id}`
          const response = await fetch(url);
          const data = await response.json();
          setAvatar(data.avatar);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/api/logout/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setSessionToken("");
        setRole("");
        setId('')
        setSearch('')
        setShowDropdown(false)
        localStorage.removeItem("refreshToken");
        navigate("/");
      } else {
        console.error("Đăng xuất thất bại!");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi đăng xuất:", error);
    }
  };

  // const handleInputChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = (query) => {
    setSearch(query);
  };

  const debouncedHandleSearch = useCallback(debounce(handleSearch, 1000), []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    debouncedHandleSearch(query);
  };

  return (
    <>
      {sessionToken ? (
        <div className="h-[15vh] w-screen px-28 flex items-center justify-between bg-custom_darkblue">
          <div
            id="logo-header"
            onClick={() => navigate('/')}
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-20 h-20 bg-center rounded-full object-cover cursor-pointer"
            />
          </div>
          <div className="">
            {role === "parent" ? (
              <ul className="flex text-white text-[1.1rem]">
                <Link
                  to="parent/main-page"
                  className="font-semibold mx-6 cursor-pointer"
                >
                  Trang chủ
                </Link>
                <Link
                  to="parent/information"
                  className="font-semibold mx-6 cursor-pointer"
                >
                  Hồ sơ cá nhân
                </Link>
              </ul>
            ) : (
              <ul className="flex text-white text-[1.1rem]">
                <Link
                  to="tutor/main-page"
                  className="font-semibold mx-6 cursor-pointer"
                >
                  Trang chủ
                </Link>
                <Link
                  to="tutor/information"
                  className="font-semibold mx-6 cursor-pointer"
                >
                  Hồ sơ cá nhân
                </Link>
              </ul>
            )}
          </div>
          <div
            id="search-header"
            className="bg-white/50 py-2 w-[25%] relative pl-4 pr-8 rounded-xl"
          >
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-full text-white bg-transparent border-none outline-none placeholder:text-white"
              id="search_input"
              onChange={handleInputChange}
            />
            <FontAwesomeIcon
              id="search-but"
              icon={faMagnifyingGlass}
              className="text-white absolute right-3 top-3"
            />
          </div>
          {role === "parent" && <Notify />}
          <div className="flex text-white items-center cursor-pointer text-[1.1rem]">
            <div className="relative flex items-center gap-2">
              <img src={avatar ? `${import.meta.env.VITE_API_ENDPOINT}/${avatar}` : User} alt="" className="w-[40px] h-[40px] rounded-full" />
              <p className="font-semibold">{name}</p>
              <i
                className={`fas ${showDropdown ? 'fa-chevron-up' : 'fa-chevron-down'} text-[0.8rem] ml-1`}
                onClick={() => setShowDropdown(!showDropdown)}
              ></i>
              {
                showDropdown && (
                  <div
                    className="bg-white text-black text-[0.9rem] absolute flex items-center p-2 rounded-md -right-12 top-10 shadow-md border border-slate-200 hover:bg-slate-100"
                    onClick={handleLogout}
                  >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <p className="ml-2">Đăng xuất</p>
                  </div>
                )
              }
            </div>
          </div>

        </div>
      ) : (
        <div className="h-[15vh] w-screen px-28 flex items-center justify-between">
          <div id="logo-header">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-20 h-20 bg-center rounded-full object-cover cursor-pointer"
              />
            </Link>
          </div>
          <div className="pb-4">
            <ul className="flex">
              <li className="font-semibold mx-6 cursor-pointer">
                <Link to="/">GIỚI THIỆU</Link>
              </li>
              <li className="font-semibold mx-6 cursor-pointer">
                <a href="">ĐĂNG KÍ PHỤ HUYNH</a>
              </li>
              <li className="font-semibold mx-6 cursor-pointer">
                <a href="">ĐĂNG KÍ GIA SƯ</a>
              </li>
              <li className="font-semibold mx-6 cursor-pointer">
                <a href="#footer">LIÊN HỆ</a>
              </li>
            </ul>
          </div>
          <div className="pb-4">
            <button
              className="bg-custom_yellow px-4 py-2 font-semibold rounded-md border border-black"
              onClick={() => navigate(`/login`)}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Header;
