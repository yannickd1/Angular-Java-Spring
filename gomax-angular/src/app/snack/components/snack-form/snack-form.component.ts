import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SnackService} from '../../services/snack.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Snack} from '../../models/snack';


@Component({
  selector: 'app-snack-form',
  templateUrl: './snack-form.component.html',
  styleUrls: ['./snack-form.component.css']
})
export class SnackFormComponent implements OnInit {

  @Output()
  submitSnack = new EventEmitter<Snack>();
  submitSnacks = new EventEmitter<Snack[]>();

  snackForm: FormGroup;
  snacksForm: FormGroup;

  formGroup: FormGroup[] = [];

  snack: Snack;
  snacks: Snack[] = [];
  //Array<Snack>.reset():any;

  constructor(private snackService: SnackService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.snacks[0] = new Snack(null, "", "", null, null);

  }

  initFormGroup() {
    this.snackForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      image: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
    this.formGroup.push(this.snackForm);
  }

  actionBtnPlusForm() {
    this.snacks.push(new Snack(null, "", "", null, null));
  }

  saveSnack() {
    console.log(this.snackForm.value);
    const snack: Snack = this.snackForm.value;

    this.submitSnack.emit(snack);

    this.snackForm.reset();

    this.snackService.postSnack(snack).subscribe(
      s => {
        console.log('res', s);
        this.submitSnack.emit(s);
      }
    );
  }

  saveListeSnack() {

    console.log(this.snacks);

    this.submitSnacks.emit(this.snacks);

    this.snackService.postListeSnacks(this.snacks).subscribe(
      ss => {
        console.log('res', ss);
        this.submitSnacks.emit(ss);
      }
    );
    this.snacks = [];
  }
}

