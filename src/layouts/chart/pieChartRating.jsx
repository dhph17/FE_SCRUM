import React from 'react';
import { Pie } from 'react-chartjs-2';

const TutorRatingsPieChart = ({ data }) => {
    // Prepare data for the chart
    const chartData = {
        labels: ['0-1 Stars', '1-2 Stars', '2-3 Stars', '3-4 Stars', '4-5 Stars'],
        datasets: [
            {
                data: Object.values(data),
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
    };

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <h3>Tutor Ratings Distribution</h3>
            <Pie data={chartData} />
        </div>
    );
};

export default TutorRatingsPieChart;
