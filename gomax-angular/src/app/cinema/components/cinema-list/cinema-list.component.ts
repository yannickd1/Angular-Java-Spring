import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../models/cinema';
import { CinemaService } from '../../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {
  cinemas : Cinema[];

  displayedColumns: string[] = ['id', 'nom', 'adresse', 'codePostal', 'ville', 'actions'];

  constructor(private route: ActivatedRoute, private cinemaService : CinemaService) { }

  ngOnInit() {  
    this.loadCinemas();
  }

  loadCinemas() : void {
    this.cinemaService.getCinemas()
      .subscribe({next: res => {
        this.cinemas = res;
      },
      error: e => console.log(e),
      complete: () => {
        console.log('Complete');
      }
    });
}
}
