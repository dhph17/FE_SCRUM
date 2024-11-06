import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyAccountChart = ({ parentAccounts, tutorAccounts }) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const chartData = {
        labels: months,
        datasets: [
            {
                label: 'Tài khoản phụ huynh',
                data: parentAccounts,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Tài khoản gia sư',
                data: tutorAccounts,
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
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};
MonthlyAccountChart.propTypes = {
    parentAccounts: PropTypes.array.isRequired,
    tutorAccounts: PropTypes.array.isRequired,
};

export default MonthlyAccountChart;
