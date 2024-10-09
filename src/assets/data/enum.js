let enumData = null;

export const fetchEnumData = async () => {
    if (!enumData) {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/enum/");
            if (response.ok) {
                enumData = await response.json();
                console.log("Dữ liệu lấy thành công", enumData);
            } else {
                console.error("Lỗi khi lấy dữ liệu enum");
            }
        } catch (error) {
            console.error("Có lỗi xảy ra:", error);
        }
    }
    return enumData;
};

export const getEnumData = () => enumData;

console.log(enumData);
