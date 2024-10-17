import { useEffect, useState } from "react";
import axios from "axios";
import Panel from "../../layouts/panel/Panel";
import Parent from "../../layouts/PageAuthorization/parent/parent";

const ParentProfile = () => {
    const [formData, setFormData] = useState({
        hoTen: '',
        ngaySinh: '',
        diaChiThuongTru: '',
        diaChiHienTai: '',
        soDienThoai: '',
        soCCCD: ''
    });

    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Retrieve the parent ID and token from local storage
    const rawParentId = localStorage.getItem("id") || "";
    const token = localStorage.getItem("accessToken");

    // Clean the ID by removing all hyphens
    const parentId = rawParentId.replace(/-/g, "");

    useEffect(() => {
        const fetchParentData = async () => {
            if (!parentId) {
                console.error("No parent ID found in local storage.");
                return;
            }

            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/parents/${parentId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = response.data;

                setFormData({
                    hoTen: data.hoTen || '',
                    ngaySinh: data.ngaySinh || '',
                    diaChiThuongTru: data.diaChiThuongTru || '',
                    diaChiHienTai: data.diaChiHienTai || '',
                    soDienThoai: data.soDienThoai || '',
                    soCCCD: data.soCCCD || ''
                });

                if (data.profile_image) {
                    setProfileImage(data.profile_image); // Set profile image if it exists
                }
            } catch (error) {
                console.error("Error fetching parent data:", error);
            }
        };

        fetchParentData();
    }, [parentId, token]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result); // Convert the image to a base64 string
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('hoTen', formData.hoTen);
            formDataToSend.append('ngaySinh', formData.ngaySinh);
            formDataToSend.append('diaChiThuongTru', formData.diaChiThuongTru);
            formDataToSend.append('diaChiHienTai', formData.diaChiHienTai);
            formDataToSend.append('soDienThoai', formData.soDienThoai);
            formDataToSend.append('soCCCD', formData.soCCCD);

            if (profileImage) {
                formDataToSend.append('profile_image', profileImage); // Include profile image
            }

            const response = await axios.put(
                `http://127.0.0.1:8000/api/parents/${parentId}/`,
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Profile updated successfully:", response.data);
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = () => {
        console.log("Profile deleted");
        // Add logic to delete the profile if needed
    };

    return (
            <Panel role="parent" activeItem={2}>
                <div className="relative h-full max-h-[600px] p-4">
                    <div className="w-full max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md flex gap-6">
                        <div className="flex flex-col items-center w-1/3">
                            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <span className="text-gray-500">No Image</span>
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="mt-4"
                            />
                        </div>

                        <div className="w-2/3">
                            <h2 className="text-2xl font-bold mb-6 text-center">Tạo hồ sơ phụ huynh</h2>
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
                                    <label className="block mb-1 font-medium">Số CCCD *</label>
                                    <input
                                        type="text"
                                        name="soCCCD"
                                        value={formData.soCCCD}
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
                                    disabled={loading}
                                >
                                    {loading ? "Đang lưu..." : "Lưu"}
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
                </div>
            </Panel>
    );
};

export default ParentProfile;
