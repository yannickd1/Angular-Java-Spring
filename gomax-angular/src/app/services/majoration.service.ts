import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Majoration} from '../models/majoration';

@Injectable({
  providedIn: 'root'
})
export class MajorationService {

  constructor(private http: HttpClient) {
  }

  getMajorations(): Observable<Majoration[]> {
    return this.http.get<Majoration[]>(`${environment.apiBaseUrl}/majorations`);
  }

  postMajoration(majoration: Majoration): Observable<Majoration> {
    return this.http.post<Majoration>(`${environment.apiBaseUrl}/majorations`, majoration);
  }

}
