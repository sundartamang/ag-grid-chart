import { Component } from '@angular/core';

interface UploadRow {
  docType: string;
  uploads: number;
}

@Component({
  selector: 'app-document-type-wise',
  standalone: true,
  imports: [],
  templateUrl: './document-type-wise.component.html',
  styleUrl: './document-type-wise.component.scss',
})
export class DocumentTypeWiseComponent {
  chartTile: string = 'NUMBER OF UPLOADS DOCUMENT TYPE WISE';
  lineChartTitle: string = 'COUNT OF doc_compare_ID';
  rowData: UploadRow[] = [
    { docType: 'All Reports & Publications', uploads: 10 },
    { docType: 'Annual therapy Update', uploads: 14 },
    { docType: 'Transmittals', uploads: 65 },
    { docType: 'HCPCS Quarterly Update', uploads: 28 },
    { docType: 'LCD', uploads: 57 },
    { docType: 'ICD 10', uploads: 44 },
    { docType: 'OCE Edit 37', uploads: 42 },
  ];
}
