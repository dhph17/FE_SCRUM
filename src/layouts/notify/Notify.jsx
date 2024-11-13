import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useAppContext } from "../../AppProvider";

const Notify = () => {
  const [notifications, setNotifications] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { id } = useAppContext();
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket(
      `ws://127.0.0.1:8000/ws/notifications/?user_id=${id}`
    );

    websocket.onopen = () => {
      console.log("WebSocket connection established");
      setWs(websocket);
    };

    websocket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.type === "unread notifications") {
        setNotifications(response.notifications);
      }
    };

    websocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      websocket.close();
    };
  }, [id]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMarkAsRead = (notificationId) => {
    // Gửi yêu cầu qua WebSocket
    if (ws) {
      const message = {
        action: "mark_as_read",
        notification_ids: [notificationId],
      };
      ws.send(JSON.stringify(message));
    }

    // Cập nhật trạng thái đã đọc ở client
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId
          ? { ...notification, is_read: true }
          : notification
      )
    );
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.is_read
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
            <ul className="mt-2 max-h-64 overflow-y-auto bg-white rounded-lg">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-3 border-b flex items-center ${
                    notification.is_read ? "bg-gray-200" : ""
                  }`}
                >
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      {notification.content}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      {new Date(notification.created_at).toLocaleString()}
                    </p>
                    {!notification.is_read && (
                      <button
                        onClick={() => handleMarkAsRead(notification.id)}
                        className="text-xs text-green-500 hover:text-green-600"
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
