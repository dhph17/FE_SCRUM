import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Image1 from "../../assets/image/User.png";
import Image2 from "../../assets/image/Nav.png";
import { useAppContext } from '../../AppProvider';

const Sidebar = ({ activeItem }) => {
    const { role } = useAppContext();
    const [avatar, setAvatar] = useState(null);
    const [showDropdown, setShowDropdown] = useState(activeItem >= 3 && activeItem <= 5);

    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("id")?.replace(/-/g, "");
    const storedRole = localStorage.getItem("role");

    useEffect(() => {
        if (!userId) {
            console.error("No user ID or role found in local storage.");
            return;
        }

        const fetchAvatar = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/${storedRole === "tutor" ? "tutors" : "parents"}/${userId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const avatarUrl = response.data.avatar;
                setAvatar(avatarUrl ? `http://127.0.0.1:8000${avatarUrl}` : null);
            } catch (error) {
                console.error("Error fetching avatar:", error);
            }
        };

        fetchAvatar();
    }, []);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        if (activeItem < 3 || activeItem > 5) {
            setShowDropdown(false);
        }
    };

    const renderSidebarContent = () => {
        switch (role) {
            case 'admin':
                return (
                    <div className="space-y-4 w-full">
                        <div className="space-y-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <p
                                className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 3 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                            >
                                <i className="fas fa-pencil-alt mr-3"></i>
                                Quản lý bài đăng
                                <i className={`fas ml-auto ${showDropdown || (activeItem >= 3 && activeItem <= 5) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </p>
                            {showDropdown && (
                                <div className="bg-gray-300 p-2 rounded-lg space-y-2">
                                    <Link to="/admin/approved-posts" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 4 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-check mr-2"></i>
                                        Bài đăng đã duyệt
                                    </Link>
                                    <Link to="/admin/pending-posts" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 5 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-clock mr-2"></i>
                                        Bài đăng chờ duyệt
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link to="/admin/tutor-account"
                            className={`flex mt-3 items-center cursor-pointer p-2 rounded-lg ${activeItem === 1 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Quản lý tài khoản gia sư
                        </Link>

                        <Link to="/admin/parent-account"
                            className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 2 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Quản lý tài khoản phụ huynh
                        </Link>
                    </div>
                );
            case 'tutor':
                return (
                    <div className="space-y-4 w-full">
                        <Link to="/tutor/information"
                            className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 1 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Thông tin tài khoản
                        </Link>
                        <Link to="/tutor/profile"
                            className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 2 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Quản lý hồ sơ
                        </Link>

                        <div className="space-y-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <p
                                className={`flex items-center cursor-pointer p-2 rounded-lg ${showDropdown || (activeItem >= 3 && activeItem <= 5) ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                            >
                                <i className="fas fa-pencil-alt mr-3"></i>
                                Quản lý suất dạy
                                <i className={`fas ml-auto ${showDropdown || (activeItem >= 3 && activeItem <= 5) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </p>

                            {showDropdown && (
                                <div className="bg-gray-300 p-2 rounded-lg space-y-2">
                                    <Link to="/tutor/registered" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 3 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-book mr-2"></i>
                                        Suất dạy đã đăng kí
                                    </Link>
                                    <Link to="/tutor/received-classes" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 4 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-check mr-2"></i>
                                        Suất dạy được nhận
                                    </Link>
                                    <Link to="/tutor/my-reviews" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 5 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-star mr-2"></i>
                                        Đánh giá của tôi
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'parent':
                return (
                    <div className="space-y-4 w-full">
                        <Link to="/parent/information"
                            className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 1 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Thông tin tài khoản
                        </Link>
                        <Link to="/parent/profile"
                            className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 2 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Quản lý hồ sơ
                        </Link>
                        <div className="space-y-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <p
                                className={`flex items-center cursor-pointer p-2 rounded-lg ${showDropdown || (activeItem >= 3 && activeItem <= 5) ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                            >
                                <i className="fas fa-pencil-alt mr-3"></i>
                                Quản lý bài đăng
                                <i className={`fas ml-auto ${showDropdown || (activeItem >= 3 && activeItem <= 5) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </p>
                            {showDropdown && (
                                <div className="bg-gray-300 p-2 rounded-lg space-y-2">
                                    <Link to="/parent/view-posts" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 3 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-check mr-2"></i>
                                        Bài đăng được duyệt
                                    </Link>
                                    <Link to="/parent/pending-posts" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 4 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue '}`}>
                                        <i className="fas fa-clock mr-2"></i>
                                        Bài đăng chờ duyệt
                                    </Link>
                                    <Link to="/parent/assigned" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 5 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-star mr-2"></i>
                                        Suất dạy đã giao
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                );
            default:
                return <p>No menu available for this role.</p>;
        }
    };

    return (
        <div className="w-80 flex flex-col ml-4 mt-6">
            <div className="bg-custom_darkblue text-white p-4 flex items-center justify-between rounded-t-lg">
                <div className="flex items-center">
                    {avatar ? (
                        <img src={avatar} alt="Profile" className="w-14 h-14 rounded-full mr-3" />
                    ) : (
                        <img src={Image1} alt="Profile" className="w-14 h-14 rounded-full mr-3" />
                    )}
                    <p className="capitalize">{role === 'tutor' ? 'Gia Sư' : role === 'admin' ? 'Admin' : 'Phụ Huynh'}</p>
                </div>
                <img src={Image2} alt="nav" className="w-10 h-8"></img>
            </div>

            <div className="bg-yellow-500 p-6 flex flex-col items-start rounded-b-lg">
                {renderSidebarContent()}
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    role: PropTypes.string,
    activeItem: PropTypes.number
};

export default Sidebar;
