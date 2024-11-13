import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyAccountChart = () => {
    const getMonths = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonthIndex = currentDate.getMonth();

        const months = [];

        for (let i = 0; i < 12; i++) {
            const monthIndex = (currentMonthIndex - i + 12) % 12;
            const year = currentMonthIndex - i < 0 ? currentYear - 1 : currentYear;
            const month = String(monthIndex + 1).padStart(2, '0');
            months.push(`${year}-${month}`);
        }

        return months.reverse();
    };


    const months = getMonths();
    const [filter, setFilter] = useState('3-months'); // Default to 1 year
    const [apiData, setApiData] = useState(null); // State to store API data

    // Fetch the API data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/statistics/?category=users');
                const result = await response.json();
                setApiData(result.data.users_stat_by_roles); // Assuming the API returns data in this format
            } catch (error) {
                console.error('Error fetching API data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to filter data based on the selected filter (3-months, 6-months, 1-year)
    const getFilteredData = () => {
        let filterMonths = [];
        let filterParentAccounts = [];
        let filterTutorAccounts = [];

        if (!apiData) return { filterMonths, filterParentAccounts, filterTutorAccounts };

        if (filter === '3-months') {
            filterMonths = months.slice(-3);
            filterParentAccounts = filterMonths.map((month) => apiData[month]?.parent || 0);
            filterTutorAccounts = filterMonths.map((month) => apiData[month]?.tutor || 0);
        } else if (filter === '6-months') {
            filterMonths = months.slice(-6);
            filterParentAccounts = filterMonths.map((month) => apiData[month]?.parent || 0);
            filterTutorAccounts = filterMonths.map((month) => apiData[month]?.tutor || 0);
        } else {
            filterMonths = months;
            filterParentAccounts = filterMonths.map((month) => apiData[month]?.parent || 0);
            filterTutorAccounts = filterMonths.map((month) => apiData[month]?.tutor || 0);
        }

        return { filterMonths, filterParentAccounts, filterTutorAccounts };
    };

    const { filterMonths, filterParentAccounts, filterTutorAccounts } = getFilteredData();
    const totalAccounts = filterParentAccounts.reduce((acc, val) => acc + val, 0) + filterTutorAccounts.reduce((acc, val) => acc + val, 0);

    const chartData = {
        labels: filterMonths,
        datasets: [
            {
                label: 'Tài khoản phụ huynh',
                data: filterParentAccounts,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Tài khoản gia sư',
                data: filterTutorAccounts,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Số lượng tài khoản đăng ký theo tháng',
                font: {
                    size: 18, // Kích thước chữ trong title
                    weight: 'bold',
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Thời gian', // Nhãn cho trục X
                    font: {
                        weight: 'bold',
                    },
                },

            },
            y: {
                title: {
                    display: true,
                    text: 'Số lượng tài khoản', // Nhãn cho trục Y
                    font: {
                        weight: 'bold',
                    },
                },
                ticks: {
                    callback: function (value) {
                        return value % 1 === 0 ? value : ''; // Hiển thị số nguyên cho trục Y
                    },
                },
            },
        },
    };



    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        backgroundColor: '#f4f4f4',
                        color: '#333',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                    className='focus:outline-none active:outline-none'
                >
                    <option value="3-months">Last 3 Months</option>
                    <option value="6-months">Last 6 Months</option>
                    <option value="1-year">Last 1 Year</option>
                </select>
                <div style={{ marginTop: '5px', fontSize: '14px' }}>
                    Tổng số tài khoản đã đăng ký: <strong>{totalAccounts}</strong>
                </div>
            </div>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default MonthlyAccountChart;
