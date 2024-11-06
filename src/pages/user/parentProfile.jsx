import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Panel from "../../layouts/panel/Panel";
import Parent from "../../layouts/PageAuthorization/parent/parent";

const ParentProfile = () => {
    const [formData, setFormData] = useState({
        parent_id: '',
        username: '',
        email: '',
        role: '',
        parentname: '',
        address: '',
        birthdate: '',
        phone_number: '',
        gender: '',
    });
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(null);
    const [fileName, setFileName] = useState("Choose a file");
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const rawParentId = localStorage.getItem("id") || "";
    const token = localStorage.getItem("accessToken");

    const parentId = rawParentId.replace(/-/g, "");

    useEffect(() => {
        const fetchParentData = async () => {
            if (!parentId) {
                console.error("No parent ID found in local storage.");
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_ENDPOINT}/api/parents/${parentId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = response.data;
                console.log(data);

                setFormData({
                    parent_id: data.parent_id,
                    username: data.user.username || '',
                    email: data.user.email || '',
                    role: data.user.role || '',
                    parentname: data.parentname || '',
                    address: data.address !== "Not recorded" ? data.address : '',
                    birthdate: data.birthdate !== "Not recorded" ? data.birthdate : '',
                    phone_number: data.phone_number !== "Not recorded" ? data.phone_number : '',
                    gender: data.gender !== "Not recorded" ? data.gender : '',
                });

                if (data.avatar) {
                    setProfileImage(`${import.meta.env.VITE_API_ENDPOINT}${data.avatar}`);
                }
            } catch (error) {
                console.error("Error fetching parent data:", error);
            }
        };

        fetchParentData();
    }, [parentId, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone_number") {
            const phoneNumberPattern = /^[0-9]{0,11}$/;
            if (!phoneNumberPattern.test(value)) {
                return;
            }
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            if (fileType !== "image/png" && fileType !== "image/jpeg") {
                alert("Please upload a .png or .jpg image.");
                fileInputRef.current.value = ""; // Reset file input
                setFileName("Choose a file"); // Reset file name display
                return;
            }

            const fileSizeLimit = 25 * 1024 * 1024;
            if (file.size > fileSizeLimit) {
                alert("File size should not exceed 25 MB.");
                fileInputRef.current.value = "";
                setFileName("Choose a file");
                return;
            }

            setFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
            updateAvatar(file);
        }
    };

    const formatFileName = (name) => {
        const maxLength = 15;
        const extension = name.slice(name.lastIndexOf("."));
        return name.length > maxLength
            ? `${name.slice(0, maxLength)}...${extension}`
            : name;
    };

    const updateAvatar = async (file) => {
        const formData = new FormData();
        formData.append("avatar", file);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_ENDPOINT}/api/profile/avatar/`,
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
        const requiredFields = [
            'parentname',
            'gender',
            'birthdate',
            'address',
            'phone_number',
        ];
    
        const errors = {};
        requiredFields.forEach((field) => {
            if (!formData[field] || formData[field].trim() === '') {
                errors[field] = 'This field is required';
            }
        });
    
        setValidationErrors(errors);
    
        if (Object.keys(errors).length > 0) {
            alert('Please fill in all required fields.');
            return;
        }

        if (formData.phone_number.length < 10 || formData.phone_number.length > 11) {
            alert("Phone number must be 10 or 11 digits long.");
            return;
        }

        setLoading(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('parentname', formData.parentname);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('gender', formData.gender);
            formDataToSend.append('birthdate', formData.birthdate);
            formDataToSend.append('username', formData.username);
            formDataToSend.append('phone_number', formData.phone_number);

            if (profileImage) {
                formDataToSend.append('profile_image', profileImage);
            }

            const response = await axios.put(
                `${import.meta.env.VITE_API_ENDPOINT}/api/parents/${parentId}/`,
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
        <Parent>
            <Panel role="parent" activeItem={2}>
                <div className="relative h-full max-h-[600px] p-4">
                    <div className="w-full max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md flex gap-6">
                        <div className="flex flex-col items-center w-1/3 mt-16">
                            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full h-full"
                                    />
                                ) : (
                                    <span className="text-gray-500">No Image</span>
                                )}
                            </div>

                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                className="hidden"
                            />

                            <label
                                onClick={() => fileInputRef.current.click()}
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                                title={fileName}
                            >
                                {formatFileName(fileName)}
                            </label>
                        </div>

                        <div className="w-2/3">
                            <h2 className="text-2xl font-bold mb-6 text-center">Tạo hồ sơ phụ huynh</h2>
                            <form className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-1 font-medium">Họ tên <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="parentname"
                                        value={formData.parentname}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Giới tính <span className="text-red-500">*</span></label>
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
                                    <label className="block mb-1 font-medium">Ngày sinh <span className="text-red-500">*</span></label>
                                    <input
                                        type="date"
                                        name="birthdate"
                                        value={formData.birthdate}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Địa chỉ hiện tại <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Số điện thoại <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                            </form>
                            <div className="flex justify-center gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="bg-blue-600 text-white px-6 py-2 rounded w-[8rem]"
                                    disabled={loading}
                                >
                                    {loading ? "Đang lưu..." : "Lưu"}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    className="bg-red-600 text-white px-6 py-2 rounded w-[8rem]"
                                >
                                    Xóa hồ sơ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Panel>
        </Parent>
    );
};

export default ParentProfile;
