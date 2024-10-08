// mockData.js

const Post = Array(60).fill({
  avatar:
    "https://th.bing.com/th/id/OIP.0xm7fJtBKdm3hIVhXfmpQQHaJ4?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet",
  name: "Nguyễn Nhật Quang",
  monHoc: "Tiếng Anh",
  lop: "11, 12",
  trinhDo: "Tốt nghiệp trung học phổ thông",
  soHocVien: "2",
  hocPhi: "300.000 VNĐ/tháng",
  diaChi: "130 Nguyễn Chánh",
  ghiChu: "Kèm từ căn bản do 2 cháu bị mất gốc",
  date: "12:30 12/10/2024",
  class_times: [
    {
      id: 1,
      weekday: "Thứ 2",
      time_start: "17:00",
      time_end: "19:00",
    },
    {
      id: 2,
      weekday: "Thứ 4",
      time_start: "17:00",
      time_end: "19:00",
    },
    {
      id: 3,
      weekday: "Thứ 6",
      time_start: "17:00",
      time_end: "19:00",
    },
    {
      id: 3,
      weekday: "Thứ 6",
      time_start: "17:00",
      time_end: "19:00",
    },

  ],
});

export default Post;
