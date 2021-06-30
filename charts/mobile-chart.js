//mobile chart

const mobileData = {
    labels: [
      'Desktop',
      'Tablet',
      'Phone'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [60, 34, 116],
      backgroundColor: [
        'rgb(54, 162, 235)',
        '#87ab08',
        'rgb(93,63,211)'
      ],
      hoverOffset: 4
    }]
  };

const mobileConfig = {
    options: { 
        plugins:{   
            legend: {
                position: 'right'
            },
        }
    },
    type: 'doughnut',
    data: mobileData,
};

var trafficChart = new Chart(
    document.getElementById('mobile-chart'),
    mobileConfig
  );