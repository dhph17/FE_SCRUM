const Footer = () => {
    return (
        <footer className="px-10 py-12 bg-custom_darkblue text-white">
            {/* Logo và mô tả ngắn */}
            <div className="flex flex-wrap flex-row justify-between items-start">
                <div className="w-full md:w-1/3">
                    <h1 className="font-ruslan_display font-semibold text-3xl mb-4">Noxa Tutor</h1>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Chúng tôi cung cấp nền tảng tìm gia sư trực tuyến với nhiều công cụ hỗ trợ hiện đại, giúp bạn có thể kết nối dễ dàng với phụ huynh và gia sư.
                    </p>
                </div>

                {/* Liên kết nhanh */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" className="hover:text-gray-400 transition">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-gray-400 transition">Dịch vụ</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-400 transition">Liên hệ</a>
                        </li>
                        <li>
                            <a href="#policy" className="hover:text-gray-400 transition">Chính sách</a>
                        </li>
                    </ul>
                </div>

                {/* Liên hệ */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                                <path d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                                <polygon points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                            </svg>
                            <span className="ml-3">noxascrum@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                            <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.675 0H1.326C.594 0 0 .594 0 1.326v21.349C0 23.405.594 24 1.326 24H12.82v-9.29H9.692V10.71h3.128V8.281c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.462.099 2.793.143v3.244l-1.918.001c-1.504 0-1.795.715-1.795 1.763V10.71h3.588l-.467 4h-3.12V24h6.115c.731 0 1.326-.595 1.326-1.326V1.326C24 .594 23.405 0 22.675 0z" />
                            </svg>
                            <span className="ml-4">noxescrum</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bản quyền */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; 2024 Noxa Tutor. Mọi quyền được bảo lưu.</p>
                <p>
                    <a href="#privacy-policy" className="hover:underline">Chính sách bảo mật</a> | 
                    <a href="#terms" className="hover:underline"> Điều khoản sử dụng</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
