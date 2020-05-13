import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeanceRoutingModule } from './seance-routing.module';
import { SeanceCardComponent } from './components/seance-card/seance-card.component';
import { SeanceDashboardComponent } from './components/seance-dashboard/seance-dashboard.component';
import { SeanceListComponent } from './components/seance-list/seance-list.component';
import { MaterialModule } from '../material.module';







@NgModule({
  declarations: [SeanceCardComponent, SeanceDashboardComponent, SeanceListComponent],
  imports: [
    CommonModule,
    SeanceRoutingModule,
    MaterialModule
  ],
  exports: [
    SeanceListComponent,
    SeanceCardComponent,
    SeanceDashboardComponent,
  ],
})
export class SeanceModule { }
