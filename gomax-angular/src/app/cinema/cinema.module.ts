import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaListComponent } from './components/cinema-list/cinema-list.component';
import { CinemaDetailsComponent } from './components/cinema-details/cinema-details.component';
import { MaterialModule } from '../material.module';
import { CinemaFormComponent } from './components/cinema-form/cinema-form.component';
import { CinemaRoutingModule } from './cinema-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CinemaListComponent, CinemaDetailsComponent, CinemaFormComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CinemaListComponent
  ]
})
export class CinemaModule { }
