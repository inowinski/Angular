import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/list/list')
        .then(m => m.ListComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./components/add-person/add-person')
        .then(m => m.AddPersonComponent)
  },
  {
    path: 'edit/:id',   // ⬅️ KLUCZ
    loadComponent: () =>
      import('./components/add-person/add-person')
        .then(m => m.AddPersonComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/details/details')
        .then(m => m.DetailsComponent)
  }
];
