import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnackDashboardComponent } from './components/snack-dashboard/snack-dashboard.component';


const routes: Routes = [
  { path: '', component: SnackDashboardComponent },
  //{ path: 'details/:id', component: SnackDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnackRoutingModule { }
