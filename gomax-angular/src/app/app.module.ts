import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import { SeanceModule } from './seance/seance.module';
import { SnackModule } from './snack/snack.module';
import { CinemaModule } from './cinema/cinema.module';
import { TarifListComponent } from './components/tarif-list/tarif-list.component';
import { SiegeModule } from './siege/siege.module';
import { SalleModule } from './salle/salle.module';
import { FilmModule } from './film/film.module';
import { CommandeSummaryComponent } from './components/commande-summary/commande-summary.component';
import { FilmSummaryComponent } from './film/components/film-summary/film-summary.component';
import { PanierComponent } from './components/panier/panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmFormComponent } from './film/components/film-form/film-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TarifListComponent,
    CommandeSummaryComponent,
    FilmSummaryComponent,
    PanierComponent,
    FilmFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    SeanceModule,
    SnackModule,
    CinemaModule,
    SiegeModule,
    SalleModule,
    FilmModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
