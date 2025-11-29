// Load Chart.js from CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

script.onload = function() {

  // Function to update card stats randomly
  function updateStat(id) {
    const element = document.getElementById(id);
    let newValue;
    switch(id) {
      case 'users':
        newValue = Math.floor(Math.random() * 200) + 50;
        break;
      case 'orders':
        newValue = Math.floor(Math.random() * 100) + 20;
        break;
      case 'revenue':
        newValue = Math.floor(Math.random() * 2000) + 500;
        break;
    }
    element.textContent = newValue;

    // Update chart
    updateChart();
  }

  // Make updateStat global so buttons can access
  window.updateStat = updateStat;

  // Initialize chart
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Users', 'Orders', 'Revenue'],
      datasets: [{
        label: 'Today',
        data: [
          parseInt(document.getElementById('users').textContent),
          parseInt(document.getElementById('orders').textContent),
          parseInt(document.getElementById('revenue').textContent)
        ],
        backgroundColor: ['#007BFF', '#28a745', '#ffc107']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  // Function to update chart
  function updateChart() {
    myChart.data.datasets[0].data = [
      parseInt(document.getElementById('users').textContent),
      parseInt(document.getElementById('orders').textContent),
      parseInt(document.getElementById('revenue').textContent)
    ];
    myChart.update();
  }
};