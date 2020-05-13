import {Component, OnInit} from '@angular/core';
import {SalleService} from '../../services/salle.service';
import {Plan} from '../../models/plan';
import {ActivatedRoute} from '@angular/router';
import {CommandeService} from 'src/app/services/commande.service';
import {Salle} from '../../models/salle';
import {MajorationService} from 'src/app/services/majoration.service';
import {Majoration} from 'src/app/models/majoration';
import {Siege} from '../../../siege/models/siege';
import {Seance} from '../../../seance/models/seance';

@Component({
  selector: 'app-salle-plan',
  templateUrl: './salle-plan.component.html',
  styleUrls: ['./salle-plan.component.css']
})
export class SallePlanComponent implements OnInit {
  plan: Plan;
  salle: Salle;
  visible = true;
  nbDeSiegesASelectionner: number;
  majorations: Majoration[];
  nbSieges: number;
  siegesUsed: Siege[];

  constructor(private route: ActivatedRoute,
              private commandeService: CommandeService,
              private salleService: SalleService,
              private majorationService: MajorationService) {
  }

  ngOnInit() {
    if (this.commandeService.commande.seance !== null) {
      this.loadSallePlan(this.commandeService.commande.seance.salle.id);
      this.loadMajorations();
      this.loadSiegesUsedBySeance();
      this.nbDeSiegesASelectionner = 0;
      if (this.commandeService.commande.tarifs !== null && this.commandeService.commande.tarifs !== []) {
        for (const tarif of this.commandeService.commande.tarifs) {
          this.nbDeSiegesASelectionner += tarif.quantite;
        }
      }
      this.nbSieges = this.nbDeSiegesASelectionner;
    } else {
      this.commandeService.commande.seance = new Seance(1);
      this.loadSiegesUsedBySeance();
      this.loadSallePlan(1);
      this.loadMajorations();
    }
  }

  loadSallePlan(id: number): void {
    this.salleService.getPlanBySalleById(id)
      .subscribe({
        next: res => {
          this.plan = res;
        },
        error: e => console.log(e),
        complete: () => {
          console.log('Complete');
          for (const i of this.plan.row) {
            i.siege.sort((obj1, obj2) => {
              if (obj1.position > obj2.position) {
                return 1;
              }
              if (obj1.position < obj2.position) {
                return -1;
              }
              return 0;
            });
          }
          console.log(this.plan);
          console.log(this.plan.row);
        }
      });
  }

  loadMajorations(): void {
    this.majorationService.getMajorations()
      .subscribe({
        next: res => {
          this.majorations = res;
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  getMajorationByName(name: string): Majoration {
    for (const majoration of this.majorations) {
      if (majoration.libelle === name) {
        return majoration;
      }
    }
    return null;
  }

  calculSieges(x: number) {
    this.nbDeSiegesASelectionner += x;
  }

  loadSiegesUsedBySeance(): void {
    this.commandeService.getSiegesUsedByIdSeance(this.commandeService.commande.seance.id)
      .subscribe({
        next: x => {
          this.siegesUsed = x;
        },
        error: e => console.log(e)
      });
  }
}
