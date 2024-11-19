import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useAppContext } from "../../AppProvider";
import { useNavigate } from "react-router-dom";

const NotifyParent = () => {
  const [notifications, setNotifications] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { id } = useAppContext();
  const [ws, setWs] = useState(null);
  let navigate = useNavigate();

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
    if (ws) {
      const message = {
        action: "mark_as_read",
        notification_ids: [notificationId],
      };
      ws.send(JSON.stringify(message));
    }

    setNotifications((prev) =>
      prev.map((notification) =>
        notification.notification_id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleGoToPost = (postId) => {
    navigate(`/parent/detailPost/${postId}`);
    setIsDropdownOpen(false);
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const translateMessage = (message) => {
    switch (message) {
      case "Your post has been approved":
        return "Bài đăng của bạn đã được phê duyệt";
      case "Your post has been rejected":
        return "Bài đăng của bạn đã bị từ chối";
      default:
        return message;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-white transition duration-300"
      >
        <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10 border border-gray-300">
          <div className="p-4">
            <ul className="mt-2 max-h-64 overflow-y-auto bg-white rounded-lg">
              {notifications
                .slice()
                .reverse()
                .map((notification) => (
                  <li
                    key={notification.notification_id}
                    className={`p-3 border-b flex items-start ${notification.read ? "bg-gray-200" : "bg-white"
                      } hover:bg-gray-100 transition duration-300`}
                  >
                    <img
                      src={
                        notification.additional_information.avatar ||
                        "https://thumbs.dreamstime.com/b/account-vector-icon-user-illustration-sign-man-symbol-logo-account-vector-icon-user-illustration-sign-man-symbol-logo-can-be-228346109.jpg"
                      }
                      alt="Avatar"
                      className="h-12 w-12 rounded-full mr-3 object-cover border border-gray-300"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">
                        {translateMessage(notification.message)}
                      </p>
                      <p className="text-xs text-gray-500 mb-1">
                        {notification.time}
                      </p>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <button
                            onClick={() =>
                              handleMarkAsRead(notification.notification_id)
                            }
                            className="text-xs text-green-500 hover:text-green-600"
                          >
                            Đánh dấu đã xem
                          </button>
                        )}
                        {notification.additional_information.post_id && (
                          <button
                            onClick={() =>
                              handleGoToPost(
                                notification.additional_information.post_id
                              )
                            }
                            className="text-xs text-blue-500 hover:text-blue-600"
                          >
                            Đi đến bài đăng
                          </button>
                        )}
                      </div>
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

export default NotifyParent;
