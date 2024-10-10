import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Image1 from "../../assets/image/User.png";
import Image2 from "../../assets/image/Nav.png";
import { useAppContext } from '../../AppProvider';

const Sidebar = ({ activeItem }) => {
    const { role } = useAppContext();
    const [showDropdown, setShowDropdown] = useState(activeItem >= 3 && activeItem <= 5);

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
                                    <Link to="/admin/approved-posts" className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 4 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue hover:text-white'}`}>
                                        <i className="fas fa-check mr-2"></i>
                                        Bài đăng đã duyệt

                                    </Link>
                                    <Link to='/admin/pending-posts' className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 5 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue hover:text-white'}`}>
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
                        <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 1 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}>
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Thông tin tài khoản
                        </p>
                        <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 2 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}>
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Quản lý hồ sơ
                        </p>

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
                                    <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 3 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-book mr-2"></i>
                                        Suất dạy đã đăng kí
                                    </p>
                                    <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 4 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-check mr-2"></i>
                                        Suất dạy được nhận
                                    </p>
                                    <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 5 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-star mr-2"></i>
                                        Đánh giá của tôi
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'parent':
                return (
                    <div className="space-y-4 w-full">
                        <p
                            className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 1 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Thông tin tài khoản
                        </p>
                        <p
                            className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 2 ? 'bg-custom_darkblue text-white' : 'hover:bg-custom_darkblue hover:text-white'}`}
                        >
                            <i className="fas fa-pencil-alt mr-3"></i>
                            Quản lý hồ sơ
                        </p>
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
                                    <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 3 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-check mr-2"></i>
                                        Bài đăng được duyệt
                                    </p>
                                    <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 4 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue '}`}>
                                        <i className="fas fa-clock mr-2"></i>
                                        Bài đăng chờ duyệt
                                    </p>
                                    <p className={`flex items-center cursor-pointer p-2 rounded-lg ${activeItem === 5 ? 'bg-custom_darkblue text-white' : 'hover:text-custom_darkblue'}`}>
                                        <i className="fas fa-star mr-2"></i>
                                        Suất dạy đã giao
                                    </p>
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
                    <img src={Image1} alt="Profile" className="w-14 h-14 rounded-full mr-3" />
                    <p className="capitalize">{role}</p>
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
