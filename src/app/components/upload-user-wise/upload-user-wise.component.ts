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
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4B0082',
    },
    data: [
      { month: 'Jan', uploads: 10, shadow: 0 },
      { month: 'Feb', uploads: 25, shadow: 80 },
      { month: 'Mar', uploads: 32, shadow: 0 },
      { month: 'Apr', uploads: 10, shadow: 80 },
      { month: 'May', uploads: 28, shadow: 0 },
      { month: 'Jun', uploads: 24, shadow: 80 },
      { month: 'Jul', uploads: 24, shadow: 0 },
      { month: 'Aug', uploads: 26, shadow: 80 },
      { month: 'Sep', uploads: 55, shadow: 0 },
      { month: 'Oct', uploads: 44, shadow: 80 },
      { month: 'Nov', uploads: 45, shadow: 0 },
      { month: 'Dec', uploads: 42, shadow: 80 },
    ],
    series: [
      // Background bar "shadows"
      {
        type: 'bar',
        xKey: 'month',
        yKey: 'shadow',
        fill: '#b4b4b4',
        fillOpacity: 0.1, // semi-transparent
        grouped: false,
        stroke: undefined,
        highlightStyle: {
          item: {
            fill: 'transparent',
            stroke: 'transparent',
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      // Actual line chart
      {
        type: 'line',
        xKey: 'month',
        yKey: 'uploads',
        yName: 'Doc Upload',
        stroke: '#6a5acd',
        strokeWidth: 2,
        marker: {
          enabled: true,
          size: 6,
          fill: '#007bff',
          stroke: '#007bff',
        },
      },
    ],
    background: { fill: '#ffffff' },
    legend: { enabled: false },
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
