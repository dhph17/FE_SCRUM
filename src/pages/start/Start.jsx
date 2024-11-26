import { Link } from "react-router-dom"
import Picture from "../../assets/image/Teacher_and_student.png"

const Start = () => {
    return (
        <div className="px-52 flex items-center space-x-10 mb-5 mt-12">
            <div className="w-[65%]">
                <div className="font-sriracha font-semibold text-4xl leading-[50px] text-center text-custom_purple mb-10">
                    <h1 className="mb-5">NOXA TUTOR:</h1>
                    <h2 className="text-xl">MÔI TRƯỜNG KẾT NỐI PHỤ HUYNH VỚI GIA SƯ NHANH, TIỆN LỢI, MỌI LÚC MỌI NƠI</h2>
                </div>
                <div className="font-poppins text-custom_gray text-center font-semibold mb-10">
                    <p>Chúng tôi là một tổ chức phi lợi nhuận với sứ mệnh tạo nên một môi trường giúp tương tác giữa phụ huynh và gia sư một cách nhanh chóng, thuận lợi và hiệu quả</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className="bg-custom_darkblue text-white w-1/3 py-3 rounded-md mb-7"><a href="/login">Bắt đầu sử dụng ngay</a></button>
                </div>
            </div>
            <div className="w-[35%] -mt-8">
                <img src={Picture} alt="" />
            </div>

        </div>
    )
}

export default Start