import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Snack} from '../../models/snack';


@Component({
  selector: 'app-snack-card',
  templateUrl: './snack-card.component.html',
  styleUrls: ['./snack-card.component.css']
})
export class SnackCardComponent implements OnInit {

  btnDisabled = false;

  somme: number = 0;

  @Input()
  snack: Snack;

  @Output()
  sommeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.snack.qte = 0;
  }

  actionBtnPlus() {
    if (this.snack.qte >= 0) {
      this.snack.qte++;
      console.log(this.snack);
      this.sommeChange.emit(this.snack.price);
      console.log(this.somme);
    }
  }

  actionBtnMoins() {
    if (this.snack.qte > 0) {
      this.snack.qte--;
      console.log(this.snack);
      this.sommeChange.emit(-this.snack.price);
      console.log(this.somme);

    }
  }

}
