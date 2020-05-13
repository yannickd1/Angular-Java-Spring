import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { Snack } from '../../models/snack';
import { SnackService } from '../../services/snack.service';
import { SnackCardComponent } from '../snack-card/snack-card.component';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {
  snacks: Snack[] = [];
  total: number = 0;
  snacks$: Observable<Snack[]>;

  @ViewChildren(SnackCardComponent)
  snacksQuery: QueryList<SnackCardComponent>;

  constructor(private snackService: SnackService) { }

  ngOnInit() {
    this.loadSnacks();
    this.loadPostSnack();
  }

  loadSnacks() {
    // observable.subscribe
    this.snackService.getSnacks()
      .subscribe({
        next: res => {
          this.snacks = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  getTotal(somme: number) {
    this.total += somme;
  }

  loadPostSnack() {
    this.snacks$ = this.snackService.getSnacks();
  }

}
