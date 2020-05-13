import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SeanceListComponent } from '../seance-list/seance-list.component';
import { Seance } from '../../models/seance';

@Component({
  selector: 'app-seance-dashboard',
  templateUrl: './seance-dashboard.component.html',
  styleUrls: ['./seance-dashboard.component.css']
})
export class SeanceDashboardComponent implements OnInit {

  seance: Seance;

  @ViewChild('mainTitle', { static: false, read: ElementRef })
  mainTitle: ElementRef;
  //conf static: false => lié quand il est complètment chargé
  @ViewChild(SeanceListComponent, { static: false })
  seanceList: SeanceListComponent;

  // récupérer des classes du DOM
  @ViewChild(SeanceListComponent, { static: false, read: true })
  seanceListElementRef: ElementRef;



  constructor() { }

  ngOnInit() {
  }

}
