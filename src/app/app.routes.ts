import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectComponent } from './pages/project/project.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectEmployeeComponent } from './pages/project-employee/project-employee.component';
import { ProjectFormComponent } from './pages/project-form/project-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  //Layout with children which is after login
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'project-form/:id', component: ProjectFormComponent },
      { path: 'project-employee', component: ProjectEmployeeComponent },
    ],
  },
];
