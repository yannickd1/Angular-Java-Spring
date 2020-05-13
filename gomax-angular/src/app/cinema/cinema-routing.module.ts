import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaFormComponent } from './components/cinema-form/cinema-form.component';
import { CinemaListComponent } from './components/cinema-list/cinema-list.component';



const routes: Routes = [
  { path: 'form', component: CinemaFormComponent },
  { path: '', component: CinemaListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CinemaRoutingModule { }
