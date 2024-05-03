import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  seriesBar!: ApexAxisChartSeries;
  chartBar!: ApexChart;
  titleBar!: ApexTitleSubtitle;
  xaxisBar!: ApexXAxis;
  plotOptionsBar!: ApexPlotOptions;
  dataLabelsBar!: ApexDataLabels;

  labelDataBar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  countDataBar = [10, 2, 3, 25];

  public chartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
    this.initPieChart();
    this.initBarChart();
  }

  initPieChart(): void {
    this.chartOptions = {
      title: {
        text: 'ATTENDANCE OF DRIVERS',
        align: 'center'
      },
      series: [44, 55, 13, 43, 22],
      // series: this.data,

      chart: {
        width: 450,
        type: "pie"
      },
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  initBarChart() {

    this.titleBar = {
      text: 'DRUNKEN PEOPLE PRECENTAGE',
      align: 'center'
    };

    this.seriesBar = [
      {
        name: 'Achievement',
        data: this.countDataBar,
        color: "#008FFB"
      }
    ]

    this.chartBar = {
      height: 400,
      // width: 558,
      type: 'bar'
    }

    this.xaxisBar = {
      categories: this.labelDataBar
    }

    this.dataLabelsBar = {
      enabled: false
    }

    this.plotOptionsBar = {
      bar : {
        horizontal: false
      }
    }
  }

}
