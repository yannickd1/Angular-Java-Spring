import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilmListComponent } from '../film-list/film-list.component';

@Component({
  selector: 'app-film-dashboard',
  templateUrl: './film-dashboard.component.html',
  styleUrls: ['./film-dashboard.component.css']
})
export class FilmDashboardComponent implements OnInit {

  @ViewChild('mainTitle', { static: false, read: ElementRef })
  mainTitle: ElementRef;
  //conf static: false => lié quand il est complètment chargé
  @ViewChild(FilmListComponent, { static: false })
  filmList: FilmListComponent;

  // récupérer des classes du DOM
  @ViewChild(FilmListComponent, { static: false, read: true })
  filmListElementRef: ElementRef;



  constructor() { }

  ngOnInit() {
  }

}
