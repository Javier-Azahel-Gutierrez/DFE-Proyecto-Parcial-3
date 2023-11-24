import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales/sales.component';
import { ParentComponent } from './pages/sales/parent/parent.component';

const routes: Routes = [
  {  path: '', component:HomeComponent},
  {  path: 'dash', component:DashboardComponent},
  {  path: 'sales', component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
