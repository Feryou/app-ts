class Personne {
    nom : string;
    prenom : string;
    adresse : Adresse;

    constructor(nom : string, prenom : string, adresse : Adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }

    public getNom()  {
        return this.nom;
    }

    public getPrenom()  {
        return this.prenom;
    }

    public getAdresse() {
        return this.adresse;
    }

    public setAdresse(adresse : Adresse): any{
        this.adresse = adresse;
    }

    public getFullinfos() {
        return this.nom + this.prenom + this.adresse;
    }
}