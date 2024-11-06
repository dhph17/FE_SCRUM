import { FaUserAlt, FaUsers, FaTasks } from 'react-icons/fa';
import { BsFillPostcardFill } from "react-icons/bs";

const stats = [
    { icon: <FaUserAlt className="text-purple-400 text-2xl" />, label: "Tài khoản phụ huynh", count: "260+" },
    { icon: <FaUsers className="text-green-400 text-2xl" />, label: "Tài khoản gia sư", count: "975+" },
    { icon: <BsFillPostcardFill className="text-yellow-400 text-2xl" />, label: "Bài đăng", count: "724+" },
    { icon: <FaTasks className="text-blue-400 text-2xl" />, label: "Orders in Queue", count: "89+" },
];

const StatsSection = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Stats</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 text-center"
                        >
                            <div className="mb-1">{stat.icon}</div>
                            <p className="text-gray-500 font-medium mb-2">{stat.label}</p>
                            <p className="text-3xl font-bold text-gray-800">{stat.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
