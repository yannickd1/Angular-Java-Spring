import {Component, OnInit} from '@angular/core';
import {Tarif} from 'src/app/models/tarif';
import {TarifService} from 'src/app/services/tarif.service';
import {ActivatedRoute} from '@angular/router';
import {CommandeService} from 'src/app/services/commande.service';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tarif-list.component.html',
  styleUrls: ['./tarif-list.component.css'],
})
export class TarifListComponent implements OnInit {
  tarifs: Tarif[];
  visible = true;

  displayedColumns: string[] = ['libelle', 'montant', 'quantite', 'total'];

  constructor(private route: ActivatedRoute, private tarifService: TarifService, private commandeService: CommandeService) {
  }

  ngOnInit() {
    if (this.commandeService.commandeCompleted === true) {
      this.tarifs = this.commandeService.commande.tarifs;
      this.visible = false;
    } else {
      this.loadTarifs();
    }

  }

  // Fonction d'ajout de tarifs
  add(id: number): void {
    for (const i of this.tarifs) {
      if (i.id === id) {
        if (i.quantite >= 0) {
          i.quantite++;
        }
      }
    }
  }

  // Fonction de suppression de tarifs
  drop(id: number): void {
    for (const i of this.tarifs) {
      if (i.id === id) {
        if (i.quantite > 0) {
          i.quantite--;
        }
      }
    }
  }

  // Function pour récupérer le total
  getTotal(): number {
    let somme = 0;
    for (const i of this.tarifs) {
      somme += i.montant * i.quantite;
    }
    return somme;
  }

  // Fonction pour récupérer les différents tarifs en BDD
  loadTarifs(): void {
    this.tarifService.getTarifs()
      .subscribe({
        next: x => {
          this.tarifs = x;
        },
        error: e => console.log(e),
        complete: () => {
          for (const i of this.tarifs) {
            i.quantite = 0;
          }
        }
      });
  }

  suivant(): void {
    const places: Tarif[] = [];
    for (const i of this.tarifs) {
      if (i.quantite > 0) {
        places.push(i);
      }
    }
    this.commandeService.commande.tarifs = places;
  }
}
