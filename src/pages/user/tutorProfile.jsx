import { useState } from "react";
import Panel from "../../layouts/panel/Panel";
import Tutor from "../../layouts/PageAuthorization/tutor/tutor";

const TutorProfile = () => {
    const [formData, setFormData] = useState({
        hoTen: '',
        ngaySinh: '',
        diaChiThuongTru: '',
        diaChiHienTai: '',
        soDienThoai: '',
        soCCCD: '',
        tenTruong: '',
        nganhHoc: '',
        nienKhoa: '',
        trinhDoHienTai: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        // Logic for saving form data
        console.log(formData);
    };

    const handleDelete = () => {
        // Logic for deleting the profile
        console.log("Profile deleted");
    };

    return (
        <Tutor>
            <Panel activeItem={2}>
                <div className="relative h-full max-h-[600px] p-4">
                    <div className="w-full max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-center">Xem và chỉnh sửa hồ sơ</h2>
                        <form className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-medium">Họ tên *</label>
                                <input 
                                    type="text" 
                                    name="hoTen"
                                    value={formData.hoTen}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Địa chỉ thường trú *</label>
                                <input 
                                    type="text" 
                                    name="diaChiThuongTru"
                                    value={formData.diaChiThuongTru}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Ngày sinh *</label>
                                <input 
                                    type="date" 
                                    name="ngaySinh"
                                    value={formData.ngaySinh}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Địa chỉ hiện tại *</label>
                                <input 
                                    type="text" 
                                    name="diaChiHienTai"
                                    value={formData.diaChiHienTai}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Số điện thoại *</label>
                                <input 
                                    type="text" 
                                    name="soDienThoai"
                                    value={formData.soDienThoai}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Tên trường *</label>
                                <input 
                                    type="text" 
                                    name="tenTruong"
                                    value={formData.tenTruong}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Số CCCD *</label>
                                <input 
                                    type="text" 
                                    name="soCCCD"
                                    value={formData.soCCCD}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Ngành học *</label>
                                <input 
                                    type="text" 
                                    name="nganhHoc"
                                    value={formData.nganhHoc}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Niên khóa *</label>
                                <input 
                                    type="text" 
                                    name="nienKhoa"
                                    value={formData.nienKhoa}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Trình độ hiện tại *</label>
                                <input 
                                    type="text" 
                                    name="trinhDoHienTai"
                                    value={formData.trinhDoHienTai}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                        </form>
                        <div className="flex justify-center gap-4 mt-6">
                            <button 
                                type="button" 
                                onClick={handleSave} 
                                className="bg-blue-600 text-white px-6 py-2 rounded"
                            >
                                Lưu
                            </button>
                            <button 
                                type="button" 
                                onClick={handleDelete} 
                                className="bg-red-600 text-white px-6 py-2 rounded"
                            >
                                Xóa hồ sơ
                            </button>
                        </div>
                    </div>
                </div>
            </Panel>
        </Tutor>
    );
};

export default TutorProfile;
