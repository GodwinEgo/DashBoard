//sample data for the chart
const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data Set 1",
      data: [10, 15, 25, 30, 20, 35, 40],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
    },
    {
      label: "Data Set 2",
      data: [20, 10, 5, 25, 35, 30, 15],
      backgroundColor: "rgba(54,162,235,0.2)",
      borderColor: "rgba(54,162,235,1)",
      borderWidth: 1,
    },
    {
      label: "Data Set 3",
      data: [20, 10, 15, 20, 5, 30, 15],
      backgroundColor: "rgba(154,252,235,0.2)",
      borderColor: "rgba(154,252,235,1)",
      borderWidth: 1,
    },
  ],
};

//function to create chart
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

//function to update chart data
function updateChartData() {
  chartData.datasets[0].data = [15, 20, 30, 25, 10, 5, 35];
  chartData.datasets[1].data = [30, 25, 20, 15, 5, 10, 20];
  createChart();
}
document.addEventListener("DOMContentLoaded", function () {
  createChart();
});
