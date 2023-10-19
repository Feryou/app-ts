"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Adresse1 = new _adresse_ts_1.Adresse("Rue du château", "77340", "Pontault");
var Personne1 = new _personne_ts_1.Personne("Khelifi", "Feryel", Adresse1);
var _personne_ts_1 = require("/.personne.ts");
var _adresse_ts_1 = require("/.adresse.ts");
var liste;
liste = [Personne1];
liste.forEach(function (value) {
    console.log(value.getFullInfosPersonne());
});
