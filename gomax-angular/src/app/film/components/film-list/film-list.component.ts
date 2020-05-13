import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Film } from '../../models/film';
import { Observable } from 'rxjs';
import { FilmCardComponent } from '../film-card/film-card.component';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films: Film[];
  @ViewChildren(FilmCardComponent)
  filmsQuery: QueryList<FilmCardComponent>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private filmService: FilmService) { }

  /**
   * Description
   */
  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms()
      .subscribe({
        next: res => {
          this.films = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }


}
