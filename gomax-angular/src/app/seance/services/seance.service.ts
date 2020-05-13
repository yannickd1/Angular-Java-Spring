import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seance } from '../models/seance';
import { Observable, of } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http: HttpClient) { }


  getSeances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances`);
  }

  getNbPlacesRestantesBySeanceById(id: number): Observable<number> {
    return this.http.get<number>(`${environment.apiBaseUrl}/seances/${id}/nbPlacesRestantes`);
  }

  getSeancesByFilmDuLundi(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances/lundi?id=${id}`);
  }

  getSeancesByFilmDuMardi(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances/mardi?id=${id}`);
  }

  getSeancesByFilmDuMercredi(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances/mercredi?id=${id}`);
  }

  getSeancesByFilmDuJeudi(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances/jeudi?id=${id}`);
  }
  getSeancesByFilmDuVendredi(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances/vendredi?id=${id}`);
  }

  getSeancesByFilmDuSamedi(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances/samedi?id=${id}`);
  }

  getSeancesByFilmDuDimanche(id: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${environment.apiBaseUrl}/seances/dimanche?id=${id}`);
  }

}
