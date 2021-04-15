var ctx = document.getElementById("chart-area");
//標籤若超過兩個要用陣列表示，若沒有就是字串表示
var labeltags = ["test01", "test02"];
var myChart = new Chart(ctx, {
  type: "pie", //圖表類型
  data: {
    //標題
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: labeltags, //標籤
        data: [12, 19, 3, 5, 2, 3], //資料
        //圖表背景色
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)"
        ],
        //圖表外框線色
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        //外框線寬度
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true, //從 0 開始
            responsive: true //符合響應式
          }
        }
      ]
    }
  }
});
