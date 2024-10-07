import { useState } from "react";
import Panel from "../../layouts/panel/Panel";
import Pagination from "../../layouts/pagination/pagination";
import Admin from "../../layouts/PageAuthorization/admin/admin";

const TutorAccount = () => {
    const tutors = Array(30).fill({ username: "Chickendance", password: "Chickendance@123" }); // Mock data

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(tutors.length / itemsPerPage);

    const currentTutors = tutors.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Admin>
            <Panel activeItem={1}>
                <div className="relative h-[550px]">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Quản lý tài khoản gia sư</h2>
                        <table className="w-full border-collapse bg-white shadow-lg">
                            <thead>
                                <tr className="bg-custom_darkblue text-white">
                                    <th className="border p-2">STT</th>
                                    <th className="border p-2">Tên tài khoản</th>
                                    <th className="border p-2">Mật khẩu</th>
                                    <th className="border p-2">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTutors.map((tutor, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border p-2 text-center">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td className="border p-2 text-center">{tutor.username}</td>
                                        <td className="border p-2 text-center">{tutor.password}</td>
                                        <td className="border p-2 text-center">
                                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded mr-2">
                                                Xem thông tin
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
                                                Khóa tài khoản
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </Panel>
        </Admin>


    );
};

export default TutorAccount;
