import { useNavigate } from "react-router-dom"

import Logo from "../../assets/image/logo_.png"
const Header = () => {
    let navigate = useNavigate()

    return (
        <div className='h-[15vh] w-screen px-28 flex items-center justify-between'>
            <div id="logo-header">
                <img src={Logo} alt="Logo" className="w-20 h-20 bg-center rounded-full object-cover cursor-pointer" />
            </div>
            <div className="pb-4">
                <ul className="flex">
                    <li className="font-semibold mx-6 cursor-pointer">GIỚI THIỆU</li>
                    <li className="font-semibold mx-6 cursor-pointer">ĐĂNG KÍ PHỤ HUYNH</li>
                    <li className="font-semibold mx-6 cursor-pointer">ĐĂNG KÍ GIA SƯ</li>
                    <li className="font-semibold mx-6 cursor-pointer">LIÊN HỆ</li>
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
    )

}

export default Header