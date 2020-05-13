import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { Commande } from 'src/app/models/commande';
import { Film } from 'src/app/film/models/film';

@Component({
  selector: 'app-commande-summary',
  templateUrl: './commande-summary.component.html',
  styleUrls: ['./commande-summary.component.css']
})
export class CommandeSummaryComponent implements OnInit {
commande : Commande ;
totalCommande : number;
btnDisable : boolean;
film : Film;
  
  constructor(private commandeService : CommandeService) { }

  ngOnInit() {
    this.totalCommande = 0;
    this.btnDisable = false;
    this.commandeService.commandeCompleted = true;
    this.commande = this.commandeService.commande;
    this.film = this.commande.seance.film;
    for(const tarif of this.commande.tarifs){
      this.totalCommande += tarif.montant*tarif.quantite;
    }
    for(const snack of this.commande.snacks){
      this.totalCommande += snack.price*snack.qte;
    }
    if(this.commande.sieges.length > 3 ){
      this.totalCommande = this.totalCommande * (1+0.015);
    }else if (this.commande.sieges.length < 3 && this.commande.sieges.length > 0) {
      this.totalCommande = this.totalCommande * (1+0.025);
    }
  }

  payer(){
    this.commandeService.save();
    this.btnDisable = true;
  }
}
