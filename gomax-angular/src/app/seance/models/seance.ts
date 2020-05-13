import { Film } from 'src/app/film/models/film';
import { Salle } from 'src/app/salle/models/salle';


export class Seance {
    constructor(
        public id: number,
        public date_seance?: Date,
        public salle?: Salle,
        public film?: Film,

    ) { }
}
