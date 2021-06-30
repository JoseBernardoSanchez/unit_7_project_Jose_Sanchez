//daily chart

const barLabels = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',

];
const barData = {
    labels: barLabels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor:'rgba(93,63,211, 0.7)',
        borderColor: 'rgba(93,63,211, 0.7)',
        borderWidth: 1
    }]
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        plugins:{   
            legend: {
                display: false
            },
        },
       scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

var dailychart = new Chart(
    document.getElementById('daily-chart'),
    barConfig
);