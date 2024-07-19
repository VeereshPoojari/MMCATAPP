import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './autherization/auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./autherization/login/login.module').then(m => m.LoginModule) },
    {
        path: 'login/:prefix',
        loadChildren: () => import('./autherization/login/login.module').then(m => m.LoginModule),
    },
    {
        path: 'registration',
        loadChildren: () => import('./autherization/registration/registration.module').then(m => m.RegistrationModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./autherization/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
    },
    {
        path: 'confirm',
        loadChildren: () => import('./autherization/confirm-password/confirm-password.module').then(m => m.ConfirmPasswordModule),
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
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
            { path: 'users', loadChildren: () => import('./feature/users-list/users-list.module').then(m => m.UsersListModule) },
            { path: 'organization', loadChildren: () => import('./feature/organization-list/organization-list.module').then(m => m.OrganizationListModule) },
            { path: 'sub-branch', loadChildren: () => import('./feature/sub-organization-list/sub-organization-list.module').then(m => m.SubOrganizationListModule) },
            { path: 'settings', loadChildren: () => import('./shared/settings/settings.module').then(m => m.SettingsModule) },

            {
                path: '**',
                loadComponent: () =>
                    import('./autherization/errors/error-404/error-404.component').then(
                        (m) => m.Error404Component
                    )
            }
        ]
    }
];
