import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TutorRatingsPieChart = ({ data }) => {
    // Prepare data for the chart
    const chartData = {
        labels: ['0-1 Sao', '1-2 Sao', '2-3 Sao', '3-4 Sao', '4-5 Sao'],
        datasets: [
            {
                data: [
                    data['0-1'], // 0-1 stars
                    data['1-2'], // 1-2 stars
                    data['2-3'], // 2-3 stars
                    data['3-4'], // 3-4 stars
                    data['4-5'], // 4-5 stars
                ],
                backgroundColor: [
                    '#FF6384', // 0-1 stars
                    '#36A2EB', // 1-2 stars
                    '#FFCE56', // 2-3 stars
                    '#4BC0C0', // 3-4 stars
                    '#9966FF', // 4-5 stars
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
            },
        ],
    }

    return (
        <div style={{ width: '90%', margin: '0 auto' }} >
            <h3 className='font-bold mb-3'>Thống kê sao trung bình gia sư</h3>
            <Pie data={chartData} />
        </div >
    );
};
TutorRatingsPieChart.propTypes = {
    data: PropTypes.object.isRequired,
};

export default TutorRatingsPieChart;
