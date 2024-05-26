import { Routes } from '@angular/router';

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
        path: 'dashboard', loadChildren: () => import('./shared/dashboard/dashboard.module').then(m => m.DashboardModule)
    }
];
