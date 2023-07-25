// Sample data for the initial chart
let chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data Set 1",
      data: [10, 15, 25, 30, 20, 35, 40],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Data Set 2",
      data: [20, 10, 5, 25, 35, 30, 15],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

// Function to create the initial chart
function createChart() {
  const ctx = document.getElementById("data-chart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Function to update chart data with random numbers
function updateChartData() {
  chartData.datasets[0].data = generateRandomData();
  chartData.datasets[1].data = generateRandomData();
  createChart();
}

// Function to generate an array of random data
function generateRandomData() {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(Math.floor(Math.random() * 50) + 1);
  }
  return data;
}

// Call createChart() when the page loads
document.addEventListener("DOMContentLoaded", function () {
  createChart();
});
