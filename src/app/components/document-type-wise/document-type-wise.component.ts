import { Component } from '@angular/core';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-angular';

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
    data: [
      { docType: 'All Reports & Publications', count: 10 },
      { docType: 'Annual therapy Update', count: 14 },
      { docType: 'Transmittals', count: 65 },
      { docType: 'HCPCS Quarterly Update', count: 28 },
      { docType: 'LCD', count: 43 },
      { docType: 'ICD 10', count: 56 },
      { docType: 'OCE Edit 37', count: 42 },
    ],
    series: [
      {
        type: 'line',
        xKey: 'docType',
        yKey: 'count',
        marker: { enabled: true, size: 6, shape: 'circle' },
        tooltip: {
          renderer: ({ datum }: { datum: any }) =>
            `Doc Upload: <b>${datum.count}</b><br/>Doc Type: <b>${datum.docType}</b>`,
        },
        stroke: '#6a5acd',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        label: { rotation: 0 },
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
        max: 80,
        nice: false,
        interval: {
          step: 10,
        },
      },
    ],
    legend: { enabled: false },
  };
}
