
import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'activities',
        loadComponent: () =>
          import('./activities/activities.page').then((m) => m.ActivitiesPage),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./users/users.page').then((m) => m.UsersPage),
      },
      {
        path: 'device',
        loadComponent: () =>
          import('./device/device.page').then((m) => m.DevicePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
];
