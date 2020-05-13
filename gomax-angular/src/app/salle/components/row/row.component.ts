import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Row} from '../../models/row';
import {Siege} from 'src/app/siege/models/siege';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input()
  row: Row;

  @Input()
  nbSieges: number;

  @Input()
  siegesUsed: Siege[];

  @Output()
  calculSiegesRestantsASelectionner = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    // console.log(this.row);
  }

  modifyQuantiteSiegesRestantes(x: number) {
    this.calculSiegesRestantsASelectionner.emit(x);
  }

}
