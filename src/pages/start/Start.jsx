import Picture from "../../assets/image/Teacher_and_student.png"

const Start = () => {
    return (
        <div className="px-52 flex items-center space-x-10 h-[88vh]">
            <div className="w-[65%] -mt-8">
                <div className="font-sriracha font-semibold text-4xl leading-[50px] text-center text-custom_purple mb-10">
                    <h1 className="mb-5">NOXA:</h1>
                    <h1>MÔI TRƯỜNG KẾT NỐI GIA SƯ VỚI NGƯỜI HỌC NHANH, TIỆN LỢI, MỌI LÚC MỌI NƠI</h1>
                </div>
                <div className="font-poppins text-custom_gray text-center font-semibold mb-10">
                    <p className="mb-4">Dành cho mọi học sinh, mọi lứa tuổi.</p>
                    <p>Chúng tôi là một tổ chức phi lợi nhuận với sứ mệnh tạo nên một môi trường giúp tương tác giữa gia sư và người học một cách nhanh chóng, thuận lợi và hiệu quả</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className="bg-custom_darkblue text-white w-1/4 py-3 rounded-md mb-7">Tìm gia sư</button>
                    <button className="bg-custom_darkblue text-white w-1/4 py-3 rounded-md mb-7">Đăng kí gia sư</button>
                </div>
            </div>
            <div className="w-[35%] -mt-8">
                <img src={Picture} alt="" />
            </div>

        </div>
    )
}

export default Start