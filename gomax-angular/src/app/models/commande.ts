import {Siege} from '../siege/models/siege';
import {Snack} from '../snack/models/snack';
import {Tarif} from './tarif';
import {Seance} from '../seance/models/seance';
import {Client} from './client';

export class Commande {
  constructor(
    public id: number,
    public client: Client,
    public seance: Seance,
    public tarifs: Tarif[],
    public createdOn: Date,
    public sieges?: Siege[],
    public snacks?: Snack[]
  ){ }
}
