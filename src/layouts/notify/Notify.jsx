// import { useEffect, useState } from "react"
// import { useAppContext } from '../../AppProvider';

// const Notify = () => {
//     const [showNotify, setShowNotify] = useState(false)
//     const [notifications, setNotifications] = useState([]);
//     const [stateSeen, setStateSeen] = useState(true)

//     const { id } = useAppContext();

//     const increaseDateByOne = (dateStr) => {
//         const [day, month, year] = dateStr.split("/").map(Number);
//         const date = new Date(year, month - 1, day);
//         date.setDate(date.getDate() + 1);
//         const newDay = String(date.getDate()).padStart(2, '0');
//         const newMonth = String(date.getMonth() + 1).padStart(2, '0');
//         const newYear = date.getFullYear();
//         return `${newDay}/${newMonth}/${newYear}`;
//     };

//     useEffect(() => {
//         const eventSource = new EventSource(`http://127.0.0.1:8000/api/notifications/${id}`);
//         // const eventSource = new EventSource(`http://127.0.0.1:8080/api/sse/`);

//         eventSource.onopen = function () {
//             console.log("SSE connection opened.");
//         };

//         eventSource.onerror = function (event) {
//             console.error('Error with SSE, trying to reconnect...', event);
//         };

//         eventSource.onmessage = function (event) {
//             try {
//                 const dataArray = JSON.parse(event.data);
//                 console.log(dataArray);

//                 if (Array.isArray(dataArray)) {
//                     const newNotifications = dataArray.map(dataString => {
//                         const data = JSON.parse(dataString);

//                         const [datePart, timePart] = data.time.split(", ");

//                         if (datePart && timePart) {
//                             const [hours, minutes, seconds] = timePart.split(":").map(Number);

//                             let newHours = hours + 7;
//                             let newDay = datePart;

//                             if (newHours >= 24) {
//                                 newHours = newHours - 24;
//                                 newDay = increaseDateByOne(datePart);
//                             }

//                             const formattedTime = `${newDay}, ${String(newHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

//                             return { message: data.message, time: formattedTime };
//                         } else {
//                             console.error("Invalid time format:", data.time);
//                             return null;
//                         }
//                     }).filter(notification => notification !== null);
//                     setNotifications(prevNotifications => [...prevNotifications, ...newNotifications]);

//                     // setShowNotify(false)
//                 } else {
//                     console.error("Invalid data received:", dataArray);
//                 }
//             } catch (error) {
//                 console.error("Error parsing notification:", error);
//             }
//             console.log(event);

//         };

//         return () => {
//             eventSource.close();
//         };
//     }, []);

//     return (
//         <div className="relative">
//             <i
//                 className="fa-solid fa-bell text-white cursor-pointer"
//                 onClick={() => { setShowNotify(!showNotify), setStateSeen(true) }}
//             ></i>
//             {
//                 showNotify && (
//                     <div className="w-[25vw] max-h-[65vh] overflow-auto bg-white absolute top-[40px] -left-[12vw] z-10 rounded-md shadow-lg shadow-slate-800">
//                         {notifications.length > 0 ? (
//                             <ul>
//                                 {notifications.map((notification, index) => (
//                                     <li key={index} className="p-2 border-b border-gray-200">
//                                         <p className="font-semibold">{notification.message}</p>
//                                         <p className="text-xs text-[#1B6CF2]">{notification.time}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p className="p-4 text-center text-gray-500">No new notifications</p>
//                         )}
//                     </div>
//                 )
//             }
//             {
//                 !stateSeen && (
//                     <div className="w-[8px] h-[8px] overflow-auto bg-red-500 absolute -top-[0.1px] left-2 z-10 rounded-md shadow-lg shadow-slate-800">

//                     </div>
//                 )
//             }

//         </div>
//     )
// }

// export default Notify

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const notificationsData = [
  {
    id: 1,
    contentId: "58c5886e-4aed-4b00-8eef-549a00c4424f",
    link: "/content/123",
    type: "flagged",
    urgency: "high",
    reviewed: false,
    avatar:
      "https://th.bing.com/th/id/R.fb5e7ff6ba759d1745042a8b82976d4e?rik=h1uRyv%2ff3gBCgA&pid=ImgRaw&r=0",
    timestamp: "2024-11-10 12:30 PM",
  },
  {
    id: 2,
    contentId: "58c5886e-4aed-4b00-8eef-549a00c4424f",
    link: "/content/456",
    type: "reported",
    urgency: "low",
    reviewed: false,
    avatar:
      "https://www.hdwallpaperspulse.com/wp-content/uploads/2013/02/Beautiful-Animal-010.jpg",
    timestamp: "2024-11-09 9:15 AM",
  },
];

const Notify = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState({ type: "all", urgency: "all" });

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMarkAsReviewed = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, reviewed: true }
          : notification
      )
    );
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter.type !== "all" && notification.type !== filter.type)
      return false;
    if (filter.urgency !== "all" && notification.urgency !== filter.urgency)
      return false;
    return true;
  });

  const unreadCount = notifications.filter(
    (notification) => !notification.reviewed
  ).length;

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-white"
      >
        <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10">
          <div className="p-4">
            <div className="flex justify-between mt-2">
              <select
                className="p-1 border rounded text-sm"
                value={filter.type}
                onChange={(e) => setFilter({ ...filter, type: e.target.value })}
              >
                <option value="all">Tất cả loại</option>
                <option value="flagged">Đã báo cáo</option>
                <option value="reported">Được đánh dấu</option>
              </select>
              <select
                className="p-1 border rounded text-sm"
                value={filter.urgency}
                onChange={(e) =>
                  setFilter({ ...filter, urgency: e.target.value })
                }
              >
                <option value="all">Tất cả mức độ</option>
                <option value="high">Cao</option>
                <option value="low">Thấp</option>
              </select>
            </div>
            <ul className="mt-4 max-h-64 overflow-y-auto">
              {filteredNotifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-3 border-b flex items-center ${
                    notification.reviewed ? "bg-gray-100" : ""
                  }`}
                >
                  <img
                    src={notification.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">
                      Mã thông báo:{" "}
                      <span className="text-blue-600 font-semibold">
                        {notification.contentId}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      {notification.timestamp}
                    </p>
                    <a
                      href={notification.link}
                      className="text-blue-500 text-sm hover:underline"
                    >
                      Xem nội dung
                    </a>
                    {!notification.reviewed && (
                      <button
                        onClick={() => handleMarkAsReviewed(notification.id)}
                        className="text-xs text-green-500 hover:text-green-600 ml-3"
                      >
                        Đánh dấu đã xem
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notify;
