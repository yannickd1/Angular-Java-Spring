import { Siege } from '../../siege/models/siege';
import { Plan } from './plan';

export class Salle {
    constructor(
        public id: number,
        public plan: Plan,
        public numero: number,
        public nombreDePlace: number
    ){}
}
