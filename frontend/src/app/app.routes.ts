import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    {
        path: 'login/:prefix',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    },
    {
        path: 'registration',
        loadChildren: () => import('./registration//registration.module').then(m => m.RegistrationModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
    },
    {
        path: 'confirm',
        loadChildren: () => import('./confirm-password/confirm-password.module').then(m => m.ConfirmPasswordModule),
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboards/analytics',
                redirectTo: '/',
                pathMatch: 'full'
            },
            {
                path: 'dashboard', loadChildren: () => import('./shared/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            { path: 'project', loadChildren: () => import('./feature/list-projects/list-projects.module').then(m => m.ListProjectsModule) },

            //   {
            //     path: '**',
            //     loadComponent: () =>
            //       import('./pages/pages/errors/error-404/error-404.component').then(
            //         (m) => m.Error404Component
            //       )
            //   }
        ]
    }
];
