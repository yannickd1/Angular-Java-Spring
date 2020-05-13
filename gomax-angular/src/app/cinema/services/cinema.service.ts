import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Cinema} from '../models/cinema';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) {
  }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(`${environment.apiBaseUrl}/cinemas`);
  }

  getCinemaById(id: number): Observable<Cinema> {
    return this.http.get<Cinema>(`${environment.apiBaseUrl}/cinemas/${id}`);
  }

  postCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(`${environment.apiBaseUrl}/cinemas`, cinema);
  }

  putCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${environment.apiBaseUrl}/cinemas`, cinema);
  }
}
