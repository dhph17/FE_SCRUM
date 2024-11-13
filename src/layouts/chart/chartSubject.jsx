import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SubjectPostsBarChart = () => {
    const [postCounts, setPostCounts] = useState([]);
    const subjectEnum = [
        'Toán', 'Văn học', 'Vật lý', 'Hóa học', 'Sinh học',
        'Tiếng Anh', 'Lịch sử', 'Địa lý', 'Kinh tế', 'Khoa học máy tính', 'Khác'
    ];

    const subjectMapping = {
        'Toán': 'math',
        'Văn học': 'literature',
        'Vật lý': 'physics',
        'Hóa học': 'chemistry',
        'Sinh học': 'biology',
        'Tiếng Anh': 'english',
        'Lịch sử': 'history',
        'Địa lý': 'geography',
        'Kinh tế': 'economy',
        'Khoa học máy tính': 'computer_science',
        'Khác': 'other'
    };

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/statistics/?category=posts');
                const data = await response.json();
                const postsStatBySubjects = data.data.posts_stat_by_subjects;

                const postCountsArray = subjectEnum.map(subject => {
                    const apiSubject = subjectMapping[subject];
                    return postsStatBySubjects[apiSubject]?.posts || 0;
                });
                setPostCounts(postCountsArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Chart data
    const chartData = {
        labels: subjectEnum, // Subjects as the labels for the X axis
        datasets: [
            {
                label: 'Số lượng bài đăng',
                data: postCounts, // Number of posts for each subject
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for bars
                borderColor: 'rgba(75, 192, 192, 1)', // Border color for bars
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Môn học',
                    font: {
                        weight: 'bold',
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Số lượng bài đăng',
                    font: {
                        weight: 'bold',
                    },
                },
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <h3 className='font-bold mb-3'>Số lượng bài đăng theo môn học</h3>
            <Bar data={chartData} options={options} />
        </div>
    );
};

SubjectPostsBarChart.propTypes = {
    postCounts: PropTypes.array.isRequired, // Array of post counts corresponding to each subject
};

export default SubjectPostsBarChart;
