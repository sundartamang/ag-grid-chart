import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'document-type-wise',
    loadComponent: () =>
      import(
        './components/document-type-wise/document-type-wise.component'
      ).then((m) => m.DocumentTypeWiseComponent),
  },
  {
    path: 'upload-month-wise',
    loadComponent: () =>
      import('./components/upload-month-wise/upload-month-wise.component').then(
        (m) => m.UploadMonthWiseComponent
      ),
  },
  {
    path: 'upload-user-wise',
    loadComponent: () =>
      import('./components/upload-user-wise/upload-user-wise.component').then(
        (m) => m.UploadUserWiseComponent
      ),
  },
];
