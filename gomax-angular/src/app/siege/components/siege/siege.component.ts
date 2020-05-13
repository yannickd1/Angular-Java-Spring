import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Siege} from '../../models/siege';
import {CommandeService} from 'src/app/services/commande.service';

@Component({
  selector: 'app-siege',
  templateUrl: './siege.component.html',
  styleUrls: ['./siege.component.css']
})
export class SiegeComponent implements OnInit {
  @Input()
  siege: Siege;

  @Input()
  nbSieges: number;

  @Input()
  rowId: string;

  @Input()
  siegesUsed: Siege[];

  @Output()
  calculSiegesRestants = new EventEmitter();

  constructor(private commandeService: CommandeService) {
  }

  ngOnInit() {
    this.setAvailabilityForSeat();
  }

  toggleAvailability(siege: Siege): void {
    const indexSiege: number = this.checkSelectedSiege(this.commandeService.commande.sieges, siege.id);
    if (siege.available === true) {
      if (this.nbSieges > 0) {
        if (indexSiege === -1) {
          this.commandeService.commande.sieges.push(new Siege(siege.id));
          siege.available = null;
          this.calculSiegesRestants.emit(-1);
        }
      }
    } else if (siege.available === null) {
      if (indexSiege !== -1) {
        this.commandeService.commande.sieges.splice(indexSiege, 1);
        siege.available = true;
        this.calculSiegesRestants.emit(1);
      }
    }
  }

  checkSelectedSiege(sieges: Siege[], id: number): number {
    if (sieges !== null || sieges !== []) {
      for (let i = 0; i < sieges.length; i++) {
        if (sieges[i].id === id) {
          return i;
        }
      }
    }
    return -1;
  }

  setAvailabilityForSeat() {
    if (this.siege.type !== 'none') {
      this.siege.available = true;
      if (this.commandeService.commande.seance !== null && this.siegesUsed !== []) {
        for (const siegeUsedInSeance of this.siegesUsed) {
          if (siegeUsedInSeance.id === this.siege.id) {
            this.siege.available = false;
          }
        }
      }
    }
  }

}
