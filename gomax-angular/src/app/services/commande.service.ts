import {Injectable} from '@angular/core';
import {Commande} from '../models/commande';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';
import {Siege} from '../siege/models/siege';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  commande: Commande;
  commandeCompleted = false;

  constructor(private http: HttpClient) {
    this.commande = new Commande(
      null,
      null,
      null,
      null,
      null,
      [],
      null);
    this.commande.client = new Client(1);
  }

  save() {
    this.http.post<Commande>(`${environment.apiBaseUrl}/commandes`, this.commande)
      .subscribe({
        next: () => console.log('Saving'),
        error: e => console.log(e),
        complete: () => console.log('Commande Saved')
      });
  }

  getCommandeById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${environment.apiBaseUrl}/commandes/${id}`);
  }

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.apiBaseUrl}/commandes`);
  }

  getCommandesByIdSeance(idSeance: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.apiBaseUrl}/commandes?seanceId=${idSeance}`);
  }

  getSiegesUsedByIdSeance(idSeance: number): Observable<Siege[]> {
    return this.http.get<Commande[]>(`${environment.apiBaseUrl}/sieges/seances/${idSeance}`);
   /* let commandes : Commande[];
    this.getCommandesByIdSeance(idSeance)
    .subscribe({
      next: commandesMap => {
        commandes = commandesMap;
        console.log(commandes);
      },
      error: e => console.log(e),
      complete: () => {
        console.log('Complete');
        let sieges : number[] = [];
        for(const commande of commandes){
          if(commande.sieges.length>0){
            for(const siege of commande.sieges)
              sieges.push(Number(siege.id));
          }
        }
        this.siegesUsed=sieges;
        console.log(this.siegesUsed);
      }
    });*/
  }
}
