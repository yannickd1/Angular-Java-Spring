import {Salle} from 'src/app/salle/models/salle';

export class Cinema {
  constructor(public id: number,
              public nom?: string,
              public adresse?: string,
              public codePostal?: string,
              public ville?: string) {
  }
}
