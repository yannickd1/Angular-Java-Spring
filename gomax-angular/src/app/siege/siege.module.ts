import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiegeComponent } from './components/siege/siege.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [SiegeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SiegeComponent
  ]
})
export class SiegeModule { }
