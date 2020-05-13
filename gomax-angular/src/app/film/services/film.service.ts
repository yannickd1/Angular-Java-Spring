import { Injectable } from '@angular/core';
import { HttpClient, XhrFactory } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';
import { of, Observable } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.apiBaseUrl}/films/${id}`);
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${environment.apiBaseUrl}/films`)
  }

  postFilm(film: Film) {
    return this.http.post<Film[]>(environment.apiBaseUrl + '/films', film);
  }

}
