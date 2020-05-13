import {Siege} from '../../siege/models/siege';

export class Row {
  constructor(public id: string,
              public siege: Siege[]) {
  }
}
