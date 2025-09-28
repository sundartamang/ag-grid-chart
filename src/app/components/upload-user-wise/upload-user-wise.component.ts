import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { documentData } from './data';

@Component({
  selector: 'app-upload-user-wise',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './upload-user-wise.component.html',
  styleUrl: './upload-user-wise.component.scss',
})
export class UploadUserWiseComponent {
  chartOptions: any;

  constructor() {
    this.initializeChart();
  }

  private initializeChart() {
    this.chartOptions = {
      title: {
        text: 'NUMBER OF DOCUMENT UPLOADS',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B0082',
      },
      data: this.buildDataforChart(),
      series: [
        // Background shadow bars
        {
          type: 'bar',
          xKey: 'document_type',
          yKey: 'shadow',
          fill: '#b4b4b4',
          fillOpacity: 0.1,
          grouped: false,
          stroke: undefined,
          highlightStyle: {
            item: {
              fill: '',
              stroke: 'transparent',
            },
          },
          zIndex: 0,
          tooltip: { enabled: false },
          pinned: 'left',
        },
        // Line chart for actual counts
        {
          type: 'line',
          xKey: 'document_type',
          yKey: 'count',
          yName: 'Doc Upload',
          stroke: '#6a5acd',
          strokeWidth: 2,
          marker: {
            enabled: true,
            size: 6,
            fill: '#007bff',
            stroke: '#007bff',
            strokeWidth: 1,
            maxSize: 20,
          },
          tooltip: {
            range: 'exact',
            renderer: ({ datum }: any) => {
              return {
                content: `${datum['document_type']}: ${datum['count']}`,
              };
            },
          },
          zIndex: 1,
        },
      ],
      background: { fill: '#ffffff' },
      legend: { enabled: false },
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: { text: 'Document Type' },
          label: {
            wrapping: 'wrap',
            wordWrap: 'break-word',
            truncate: true,
            autoRotate: false,
            // formatter: ({ value }: AgAxisLabelFormatterParams) =>
            //   String(value).length > 15
            //     ? String(value).slice(0, 12) + '…'
            //     : String(value),
          },
          paddingInner: 0,
          paddingOuter: 0,
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'COUNT OF DOCUMENTS' },
          min: 0,
          max: this.getMaxCountFromData(),
          nice: true,
        },
      ],

      overlay: {
        noData: {
          enabled: true,
          text: 'No data available',
          fontSize: 14,
          fontWeight: 'bold',
          color: '#666666',
        },
      },
    };
  }

  private buildDataforChart() {
    const maxCount = this.getMaxCountFromData();
    return documentData.map((d, index) => ({
      document_type: d.document_type,
      count: d.count,
      shadow: index % 2 === 1 ? maxCount : 0,
    }));
  }

  private getMaxCountFromData(): number {
    return Math.max(...documentData.map((d) => d.count));
  }
}
