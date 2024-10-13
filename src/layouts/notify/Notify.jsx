import { useEffect, useState } from "react"
import { useAppContext } from '../../AppProvider';

const Notify = () => {
    const [showNotify, setShowNotify] = useState(false)
    const [notifications, setNotifications] = useState([]);
    const [stateSeen, setStateSeen] = useState(true)

    const { id } = useAppContext();

    const increaseDateByOne = (dateStr) => {
        const [day, month, year] = dateStr.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        date.setDate(date.getDate() + 1);
        const newDay = String(date.getDate()).padStart(2, '0');
        const newMonth = String(date.getMonth() + 1).padStart(2, '0');
        const newYear = date.getFullYear();
        return `${newDay}/${newMonth}/${newYear}`;
    };

    useEffect(() => {
        const eventSource = new EventSource(`http://127.0.0.1:8000/api/notifications/${id}`);
        eventSource.onopen = function () {
            console.log("SSE connection opened.");
        };


        eventSource.onmessage = function (event) {
            try {
                const dataArray = JSON.parse(event.data);
                if (Array.isArray(dataArray)) {
                    const newNotifications = dataArray.map(dataString => {
                        const data = JSON.parse(dataString);

                        const [datePart, timePart] = data.time.split(", ");

                        if (datePart && timePart) {
                            const [hours, minutes, seconds] = timePart.split(":").map(Number);

                            let newHours = hours + 7;
                            let newDay = datePart;

                            if (newHours >= 24) {
                                newHours = newHours - 24;
                                newDay = increaseDateByOne(datePart);
                            }

                            const formattedTime = `${newDay}, ${String(newHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                            return { message: "Bài đăng của bạn đã được duyệt", time: formattedTime };
                        } else {
                            console.error("Invalid time format:", data.time);
                            return null;
                        }
                    }).filter(notification => notification !== null);
                    setNotifications(prevNotifications => [...prevNotifications, ...newNotifications]);
                    setShowNotify(false)
                } else {
                    console.error("Invalid data received:", dataArray);
                }
            } catch (error) {
                console.error("Error parsing notification:", error);
            }
        };

        eventSource.onerror = function (event) {
            console.error("Error with SSE connection:", event);
        };

        return () => {
            eventSource.close();
        };
    }, []);


    return (
        <div className="relative">
            <i
                className="fa-solid fa-bell text-white cursor-pointer"
                onClick={() => { setShowNotify(!showNotify), setStateSeen(true) }}
            ></i>
            {
                showNotify && (
                    <div className="w-[25vw] max-h-[65vh] overflow-auto bg-white absolute top-[40px] -left-[12vw] z-10 rounded-md shadow-lg shadow-slate-800">
                        {notifications.length > 0 ? (
                            <ul>
                                {notifications.map((notification, index) => (
                                    <li key={index} className="p-2 border-b border-gray-200">
                                        <p className="font-semibold">{notification.message}</p>
                                        <p className="text-xs text-[#1B6CF2]">{notification.time}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="p-4 text-center text-gray-500">No new notifications</p>
                        )}
                    </div>
                )
            }
            {
                !stateSeen && (
                    <div className="w-[8px] h-[8px] overflow-auto bg-red-500 absolute -top-[0.1px] left-2 z-10 rounded-md shadow-lg shadow-slate-800">

                    </div>
                )
            }

        </div>
    )
}

export default Notify