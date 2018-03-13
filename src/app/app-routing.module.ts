import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreationComponent } from './creation/creation.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: DashboardComponent,
    },
    {
      path: 'creation',
      component: CreationComponent,
    },
    {
      path: 'reports',
      component: ReportsComponent,
    },
  
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }