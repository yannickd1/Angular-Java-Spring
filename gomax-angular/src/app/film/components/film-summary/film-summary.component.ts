import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../models/film';

@Component({
  selector: 'app-film-summary',
  templateUrl: './film-summary.component.html',
  styleUrls: ['./film-summary.component.css']
})
export class FilmSummaryComponent implements OnInit {
  router: any;

  @Input()
  film: Film;

  @Input()
  dateSeance: Date;

  constructor() { }

  ngOnInit() {
  }

}
