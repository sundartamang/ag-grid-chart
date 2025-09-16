import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgBarSeriesOptions } from 'ag-charts-community';

@Component({
  selector: 'app-upload-month-wise',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './upload-month-wise.component.html',
  styleUrl: './upload-month-wise.component.scss',
})
export class UploadMonthWiseComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      title: { text: 'NO. OF UPLOAD USERWISE' },
      data: [
        { username: 'Aayush', uploads: 118 },
        { username: 'Aman', uploads: 125 },
        { username: 'Cathy', uploads: 102 },
        { username: 'Danny', uploads: 122 },
        { username: 'Ethan', uploads: 116 },
        { username: 'Evan', uploads: 126 },
        { username: 'Fey', uploads: 105 },
        { username: 'Gia', uploads: 124 },
      ] as any[],
      series: [
        {
          type: 'bar',
          xKey: 'username',
          yKey: 'uploads',
          fill: '#03A9F4',
          direction: 'horizontal',
          highlightStyle: {
            item: {
              fill: 'transparent',
              stroke: 'transparent',
            },
          },
        } as AgBarSeriesOptions,
      ],
      axes: [
        {
          type: 'category',
          position: 'left',
          title: { text: 'Username' },
        },
        {
          type: 'number',
          position: 'bottom',
          title: { text: '' },
          min: 0,
          max: 150,
          nice: false,
          interval: {
            step: 10,
          },
        },
      ] as any[],
      legend: { enabled: false },
    };
  }
}
