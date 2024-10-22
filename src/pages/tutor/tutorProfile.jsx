import { useEffect, useState } from "react";
import axios from "axios";
import Panel from "../../layouts/panel/Panel";
import Tutor from "../../layouts/PageAuthorization/tutor/tutor";

const TutorProfile = () => {
    const [formData, setFormData] = useState({
        tutor_id: '',
        username: '',
        email: '',
        role: '',
        tutorname: '',
        address: '',
        birthdate: '',
        bio_link: '',
        phone_number: '',
        gender: '',
        educational_background: ''
    });

    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const rawTutorId = localStorage.getItem("id") || "";
    const token = localStorage.getItem("accessToken");

    const tutorId = rawTutorId.replace(/-/g, "");

    useEffect(() => {
        const fetchTutorData = async () => {
            if (!tutorId) {
                console.error("No tutor ID found in local storage.");
                return;
            }
    
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/tutors/${tutorId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = response.data;
                console.log(data);
                setFormData({
                    tutor_id: data.tutor_id || '',
                    username: (data.user && data.user.username) || '',
                    email: (data.user && data.user.email) || '',
                    role: (data.user && data.user.role) || '',
                    tutorname: data.tutorname || '',
                    address: data.address !== "Not recorded" ? data.address : '',
                    birthdate: data.birthdate !== "Not recorded" ? data.birthdate : '',
                    bio_link: data.bio_link !== "Not recorded" ? data.bio_link : '',
                    phone_number: data.phone_number !== "Not recorded" ? data.phone_number : '',
                    gender: data.gender !== "Not recorded" ? data.gender : '',
                    educational_background: data.educational_background !== "Not recorded" ? data.educational_background : '',
                });
    
                if (data.avatar) {
                    setProfileImage(`http://127.0.0.1:8000${data.avatar}`);
                }
            } catch (error) {
                console.error("Error fetching tutor data:", error);
            }
        };
        
        fetchTutorData();
    }, [tutorId, token]);
    
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
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
            updateAvatar(file);
        }
    };

    const updateAvatar = async (file) => {
        const formData = new FormData();
        formData.append("avatar", file);

        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/api/profile/avatar/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Avatar updated successfully:", response.data);
            alert("Avatar updated successfully!");
        } catch (error) {
            console.error("Error updating avatar:", error);
            alert("Failed to update avatar.");
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('tutorname', formData.tutorname);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('gender', formData.gender);
            formDataToSend.append('username', formData.username);
            formDataToSend.append('birthdate', formData.birthdate);
            formDataToSend.append('bio_link', formData.bio_link);
            formDataToSend.append('phone_number', formData.phone_number);
            formDataToSend.append('educational_background', formData.educational_background);

            const response = await axios.put(
                `http://127.0.0.1:8000/api/tutors/${tutorId}/`,
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'application/json',
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
    };

    return (
        <Tutor>
            <Panel role="tutor" activeItem={2}>
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
                            <h2 className="text-2xl font-bold mb-6 text-center">Tạo hồ sơ gia sư</h2>
                            <form className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-1 font-medium">Họ tên *</label>
                                    <input
                                        type="text"
                                        name="tutorname"
                                        value={formData.tutorname}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Giới tính *</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    >
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Ngày sinh *</label>
                                    <input
                                        type="date"
                                        name="birthdate"
                                        value={formData.birthdate}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Địa chỉ hiện tại *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Số điện thoại *</label>
                                    <input
                                        type="text"
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Liên kết bio *</label>
                                    <input
                                        type="text"
                                        name="bio_link"
                                        value={formData.bio_link}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Trình độ học vấn *</label>
                                    <input
                                        type="text"
                                        name="educational_background"
                                        value={formData.educational_background}
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
        </Tutor>
    );
};

export default TutorProfile;
