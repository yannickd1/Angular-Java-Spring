export class Tarif {
  constructor(public id: number,
              public libelle: string,
              public montant: number,
              public quantite?: number) {
  }
}
