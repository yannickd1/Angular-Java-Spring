import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { Snack } from 'src/app/snack/models/snack';
import { CommandeSummaryComponent } from '../commande-summary/commande-summary.component';
import { Commande } from 'src/app/models/commande';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  commande : Commande;
  displayedColumns: string[] = ['nom', 'quantite', 'price', 'montant'];
  snacks : Snack[];
  sommePanier : number;

  constructor(private commandeService : CommandeService) {
    
  }

  ngOnInit() {
    this.sommePanier = 0;
    this.snacks = this.commandeService.commande.snacks;
    this.totalPanier(this.snacks);
  }

  //Fonction permettant de récupérer une commande par son id en BDD
  loadCommandeById(id : number){
    this.commandeService.getCommandeById(id)
    .subscribe({
      next: x => this.commande=x,
      error : e => console.log(e),
      complete : () => {
        this.snacks = this.commande.snacks;
        this.totalPanier(this.snacks);
      }
    })
  }

  totalPanier(snacks : Snack[]): void{
    for(let i of snacks){
      this.sommePanier+=i.qte*i.price;      
    }
  }
}