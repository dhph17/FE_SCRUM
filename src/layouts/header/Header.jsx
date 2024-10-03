import { useNavigate } from "react-router-dom"
import { useAppContext } from '../../AppProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

import Logo from "../../assets/image/logo_.png"
const Header = () => {
    let navigate = useNavigate()

    const { sessionToken, setSessionToken } = useAppContext();

    const handleLogout = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/logout/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${sessionToken}`,
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                setSessionToken('');
                localStorage.removeItem('refreshToken');
                navigate('/');
            } else {
                console.error("Đăng xuất thất bại!");
            }
        } catch (error) {
            console.error("Có lỗi xảy ra khi đăng xuất:", error);
        }
    };

    return (
        <>
            {sessionToken ?
                (
                    <div className='h-[15vh] w-screen px-28 flex items-center justify-between bg-custom_darkblue'>
                        <div id="logo-header">
                            <img src={Logo} alt="Logo" className="w-20 h-20 bg-center rounded-full object-cover cursor-pointer" />
                        </div>
                        <div className="">
                            <ul className="flex text-white text-[1.1rem]">
                                <li className="font-semibold mx-6 cursor-pointer">Trang chủ</li>
                                <li className="font-semibold mx-6 cursor-pointer">Hồ sơ cá nhân</li>
                            </ul>
                        </div>
                        <div id="search-header" className="bg-white/50 py-2 w-[25%] relative pl-4 pr-8 rounded-xl">
                            <input type="text" placeholder="Tìm kiếm" className="w-full text-white bg-transparent border-none outline-none placeholder:text-white" />
                            <FontAwesomeIcon id="search-but" icon={faMagnifyingGlass} className="text-white absolute right-3 top-3" />
                        </div>
                        <div
                            className="flex text-white items-center cursor-pointer text-[1.1rem]"
                            onClick={handleLogout}
                        >
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            <p className="ml-2">Đăng xuất</p>
                        </div>
                    </div>

                )
                :
                (
                    <div className='h-[15vh] w-screen px-28 flex items-center justify-between'>
                        <div id="logo-header">
                            <img src={Logo} alt="Logo" className="w-20 h-20 bg-center rounded-full object-cover cursor-pointer" />
                        </div>
                        <div className="pb-4">
                            <ul className="flex">
                                <li className="font-semibold mx-6 cursor-pointer"><a href="">GIỚI THIỆU</a></li>
                                <li className="font-semibold mx-6 cursor-pointer"><a href="">ĐĂNG KÍ PHỤ HUYNH</a></li>
                                <li className="font-semibold mx-6 cursor-pointer"><a href="">ĐĂNG KÍ GIA SƯ</a></li>
                                <li className="font-semibold mx-6 cursor-pointer"><a href="#footer">LIÊN HỆ</a></li>
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

    )

}

export default Header