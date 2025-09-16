import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-enterprise';
import { central, eastern, mountain, pacific } from './data';
import { topology } from './topology';

@Component({
  selector: 'app-geographic-map',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './geographic-map.component.html',
  styleUrl: './geographic-map.component.scss',
})
export class GeographicMapComponent {
  public options;

  constructor() {
    this.options = {
      title: {
        text: 'Timezones Across America',
      },
      topology: topology,
      series: [
        {
          type: 'map-shape',
          data: pacific,
          idKey: 'name',
          title: 'Pacific',
        },
        {
          type: 'map-shape',
          data: mountain,
          idKey: 'name',
          title: 'Mountain',
        },
        {
          type: 'map-shape',
          data: central,
          idKey: 'name',
          title: 'Central',
        },
        {
          type: 'map-shape',
          data: eastern,
          idKey: 'name',
          title: 'Eastern',
        },
      ] as any[],
      legend: {
        enabled: true,
      },
    };
  }
}
