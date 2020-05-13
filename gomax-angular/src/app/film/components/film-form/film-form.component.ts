import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';



export function forbiddenNameValidator(forbiddenWord: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return (control.value == forbiddenWord) ? { 'forbiddenName': { value: control.value } } : null
  }
}

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  @Output()
  submitFilm = new EventEmitter<Film>();

  filmForm: FormGroup;

  formGroup: FormGroup[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.filmForm = new FormGroup({
      id: new FormControl(''),
      Title: new FormControl('', [Validators.required, Validators.minLength(5), forbiddenNameValidator('test')]),
      Runtime: new FormControl('', [Validators.required]),
      Genre: new FormControl('', [Validators.required]),
      Plot: new FormControl('', [Validators.required]),
      Actors: new FormControl('', [Validators.required]),
      Poster: new FormControl('', [Validators.required])
    });
  }

  saveFilm() {

    const film: Film = this.filmForm.value;

    this.submitFilm.emit(film);

    this.filmForm.reset();

    this.filmService.postFilm(film).subscribe(
      filmForm => {
        console.log('res', filmForm);
        this.submitFilm.emit(film);
      }
    );
  }

}
