import { Component } from '@angular/core';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-angular';
import { documentData } from './data';

@Component({
  selector: 'app-document-type-wise',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './document-type-wise.component.html',
  styleUrl: './document-type-wise.component.scss',
})
export class DocumentTypeWiseComponent {
  chartOptions: any = {
    title: {
      text: 'NUMBER OF UPLOADS DOCUMENT TYPE WISE',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4B0082',
    },
    padding: {
      top: 20,
      right: 20,
      bottom: 50,
      left: 50,
    },
    data: documentData,
    series: [
      {
        type: 'line',
        xKey: 'docType',
        yKey: 'count',
        marker: { enabled: true, size: 6, shape: 'circle' },
        tooltip: {
          renderer: ({ datum }: { datum: any }) => {
            return `<div style="padding:5px; border-radius:4px; background:#fff; color:#333; box-shadow:0 2px 6px rgba(0,0,0,0.15)">
              Doc Upload: <b>${datum.count}</b><br/>
              Doc Type: <b>${datum.docType}</b>
            </div>`;
          },
        },
        stroke: '#6a5acd',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        label: {
          rotation: 0,
          formatter: (params: { value: string }) => {
            const val = params.value ?? '';
            return val.length > 7 ? val.substring(0, 7) + '…' : val;
          },
        },
        gridLine: {
          style: [
            {},
            {
              fill: '#999',
              fillOpacity: 0.1,
              strokeWidth: 0,
            },
          ],
        },
        interval: {
          placement: 'between',
          step: 1,
        },
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'COUNT OF doc_compare_ID' },
        min: 0,
        nice: false,
        interval: {
          step: 10,
        },
      },
    ],
    legend: { enabled: false },
  };
}
