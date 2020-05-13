export class Client {
  constructor(public id: number,
              public nom?: string,
              public prenom?: string,
              public email?: string,
              public dateDeNaissance?: Date,
              public adresse?: string,
              public cp?: string,
              public ville?: string,
              public pays?: string,
              public numeroDeFidelite?: string) {
  }
}
