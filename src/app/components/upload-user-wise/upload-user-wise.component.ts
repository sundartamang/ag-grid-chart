import { Component } from '@angular/core';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-angular';

@Component({
  selector: 'app-upload-user-wise',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './upload-user-wise.component.html',
  styleUrl: './upload-user-wise.component.scss',
})
export class UploadUserWiseComponent {
  chartOptions: AgCartesianChartOptions = {
    title: {
      text: 'NUMBER OF UPLOADS MONTH WISE',
    },
    data: [
      { month: 'Jan', uploads: 10 },
      { month: 'Feb', uploads: 25 },
      { month: 'Mar', uploads: 32 },
      { month: 'Apr', uploads: 10 },
      { month: 'May', uploads: 28 },
      { month: 'Jun', uploads: 24 },
      { month: 'Jul', uploads: 24 },
      { month: 'Aug', uploads: 26 },
      { month: 'Sep', uploads: 55 },
      { month: 'Oct', uploads: 44 },
      { month: 'Nov', uploads: 45 },
      { month: 'Dec', uploads: 42 },
    ],
    series: [
      {
        type: 'line',
        xKey: 'month',
        yKey: 'uploads',
        yName: 'Doc Upload',
        marker: {
          enabled: true,
          size: 6,
        },
      },
    ],
    background: { fill: '#ffffff' },
    legend: {
      position: 'bottom',
    },
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: { text: '' },
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'COUNT OF doc_compare_ID' },
        min: 0,
        max: 80,
        nice: false,
        interval: {
          step: 10,
        },
      },
    ],
  };
}
