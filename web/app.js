import { MDCDrawer } from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

import { MDCTopAppBar } from "@material/top-app-bar";
const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"));
topAppBar.setScrollTarget(document.getElementById("main-content"));
topAppBar.listen("MDCTopAppBar:nav", () => {
  drawer.open = !drawer.open;
});

$.get('./data.json', function(data){
  createChart(data)
});

function createChart(data) {
  const fctx = $('#firstChart')[0].getContext('2d');
  const firstChart = new Chart(fctx, {
    type: 'line',
    data: {
      labels: data.fistChartLabels,
      datasets: [
        {
          label: 'Visitors',
          data: data.fisrtChartData,
          backgroundColor: '#36E4EC',
          borderColor: '#9fe7eb',
          borderWidth: 1,
          fill: true,
          tension: 0.4
        },
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const sctx = $('#secondChart')[0].getContext('2d');
  const secondChart = new Chart(sctx, {
    type: 'line',
    data: {
      labels: data.secondChartLabels,
      datasets: [
        {
          label: 'Weekly Sales',
          data: data.secondChartDataFirst,
          backgroundColor: '#C072FD',
          borderColor: '#C072FD',
          borderWidth: 1,
          fill: true,
          tension: 0.4
        }, {
          label: 'Expense',
          data: data.secondChartDataSecond,
          backgroundColor: '#ccb2e0',
          borderColor: '#ccb2e0',
          borderWidth: 1,
          fill: true,
          tension: 0.4,
          pointStyle: 'cross'
        },
      ]
    },
    options: {
      scales: {
        x: {
          display: false
        },
        y: {
          display: false,
          beginAtZero: true
        }
      }
    }
  });

  const tctx = $('#thirdChart')[0].getContext('2d');
  const thirdChart = new Chart(tctx, {
    type: 'line',
    data: {
      labels: data.thirdChartLabels,
      datasets: [
        {
          label: 'Total charge',
          data: data.thirdChartDataFIrst,
          backgroundColor: '#77C4AC',
          borderColor: '#77C4AC',
          borderWidth: 1,
          fill: true,
          tension: 0.4
        }, {
          label: 'Profit',
          data: data.thirdChartDataSecond,
          backgroundColor: '#bbe4d7',
          borderColor: '#bbe4d7',
          borderWidth: 1,
          fill: true,
          tension: 0.4,
          pointStyle: 'cross'
        },
      ]
    },
    options: {
      scales: {
        x: {
          display: false
        },
        y: {
          display: false,
          beginAtZero: true
        }
      }
    }
  });

  const dctx = $('#donutChart')[0].getContext('2d');
  const donutChart = new Chart(dctx, {
    type: 'doughnut',
    data: {
      labels: data.donutChartLabels,
      datasets: [
        {
          label: 'Marketing Campaign',
          data: data.donutChartData,
          backgroundColor: [
            '#CDA8EE',
            '#FFC338',
            '#38C3FF',
          ],
          hoverOffset: 4
        }
      ]
    },
    options: {}
  });
}