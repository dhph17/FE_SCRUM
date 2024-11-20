const Footer = () => {
    return (
        <footer className="px-10 py-12 bg-custom_darkblue text-white">
            <div className="flex flex-wrap flex-row justify-between items-start">
                <div className="w-full md:w-1/2">
                    <h1 className="font-ruslan_display font-semibold text-3xl mb-4">Noxa Tutor</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Chúng tôi cung cấp nền tảng tìm gia sư trực tuyến với nhiều công cụ hỗ trợ hiện đại, giúp bạn có thể kết nối dễ dàng với phụ huynh và gia sư.
                    </p>
                </div>


                <div className="w-full md:w-1/5">
                    <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                        <svg width="20" height="20" color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <span className="ml-3">noxascrum@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                            <span className="ml-4">noxascrum</span>
                        </li>
                        <li className="flex items-center">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            <span className="ml-4">0833556747</span>
                        </li>
                    </ul>
                </div>
            </div>
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
