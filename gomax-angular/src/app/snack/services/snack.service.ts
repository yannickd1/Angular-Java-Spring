import { Injectable } from '@angular/core';
import { HttpClient, XhrFactory } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Snack } from '../models/snack';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private http: HttpClient) { }

  getSnackById(id: number): Observable<Snack> {
    return this.http.get<Snack>(`${environment.apiBaseUrl}/snacks/${id}`);
  }

  getSnacks(): Observable<Snack[]> {
    return this.http.get<Snack[]>(`${environment.apiBaseUrl}/snacks`);
  }

  postSnack(snack: Snack) {
    return this.http.post<Snack>(environment.apiBaseUrl + '/snacks', snack);
  }

  postListeSnacks(snacks: Snack[]): Observable<Snack[]> {
    return this.http.post<Snack[]>(environment.apiBaseUrl + '/snacks', snacks);
  }

}


