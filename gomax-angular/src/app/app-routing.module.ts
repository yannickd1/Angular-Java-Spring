import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmDashboardComponent } from './film/components/film-dashboard/film-dashboard.component';
import { DetailFilmComponent } from './film/components/detail-film/detail-film.component';
import { SeanceListComponent } from './seance/components/seance-list/seance-list.component';
import { CinemaListComponent } from './cinema/components/cinema-list/cinema-list.component';
import { TarifListComponent } from './components/tarif-list/tarif-list.component';
import { RowComponent } from './salle/components/row/row.component';
import { SallePlanComponent } from './salle/components/salle-plan/salle-plan.component';
import { FilmSummaryComponent } from './film/components/film-summary/film-summary.component';
import { CommandeSummaryComponent } from './components/commande-summary/commande-summary.component';
import { SnackFormComponent } from './snack/components/snack-form/snack-form.component';
import { FilmFormComponent } from './film/components/film-form/film-form.component';
import { SeanceDashboardComponent } from './seance/components/seance-dashboard/seance-dashboard.component';

import { SalleListComponent } from './salle/components/salle-list/salle-list.component';


const routes: Routes = [

  { path: 'details/:id', component: DetailFilmComponent },
  { path: 'details/:id/plan/:idSeance', component: SallePlanComponent },
  { path: 'tarifs', component: TarifListComponent },
  { path: 'seances', component: SeanceListComponent },
  { path: 'salles', component: SalleListComponent },
  { path: '', component: FilmDashboardComponent },
  { path: 'snacks', loadChildren: './snack/snack.module#SnackModule' },
  { path: 'admin-snacks', component: SnackFormComponent },
  { path: 'siege', component: RowComponent },
  { path: 'cinemas', loadChildren: './cinema/cinema.module#CinemaModule' },
  { path: 'plan', component: SallePlanComponent },
  { path: 'tarif', component: TarifListComponent },
  { path: 'summary/:id', component: FilmSummaryComponent },
  { path: 'summary', component: CommandeSummaryComponent },
  { path: 'seances/films/:id', component: SeanceListComponent },
  { path: 'film-form', component: FilmFormComponent },
  { path: 'seances', component: SeanceDashboardComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
