var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.getPrenom = function () {
        return this.prenom;
    };
    Personne.prototype.getAdresse = function () {
        return this.adresse;
    };
    Personne.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Personne.prototype.getFullinfos = function () {
        return this.nom + this.prenom + this.adresse;
    };
    return Personne;
}());
