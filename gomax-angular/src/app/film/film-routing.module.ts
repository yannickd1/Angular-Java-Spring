import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDashboardComponent } from './components/film-dashboard/film-dashboard.component';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';

const routes: Routes = [
    { path: '', component: FilmDashboardComponent },
    { path: 'details/:id', component: DetailFilmComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilmRoutingModule { }
