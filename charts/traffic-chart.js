//traffic chart

const labels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',  
        fill: true,
        backgroundColor: 'rgba(93,63,211, 0.3)',
        borderColor: 'rgba(93,63,211, 0.3)',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
    }]
};

const config = {
    type: 'line',
    data,
    options: { 
        plugins:{   
            legend: {
                display: false
            },
        }

    }
};


var trafficChart = new Chart(
    document.getElementById('traffic-chart'),
    config
  );