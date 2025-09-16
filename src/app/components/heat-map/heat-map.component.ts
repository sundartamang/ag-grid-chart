import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-enterprise';
import { getData } from './data';
import 'ag-charts-enterprise';

@Component({
  selector: 'app-heat-map',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './heat-map.component.html',
  styleUrl: './heat-map.component.scss',
})
export class HeatMapComponent {
  public options;

  constructor() {
    this.options = {
      data: getData(),
      title: {
        text: 'UK monthly mean temperature °C',
      },
      series: [
        {
          type: 'heatmap',
          xKey: 'month',
          xName: 'Month',
          yKey: 'year',
          yName: 'Year',
          colorKey: 'temperature',
          colorName: 'Temperature',
        },
      ] as any[],
    };
  }
}
