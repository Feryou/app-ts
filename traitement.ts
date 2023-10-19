let Adresse1 = new Adresse ("Rue du château","77340","Pontault")
let Personne1 = new Personne ("Khelifi","Feryel", Adresse1);

import { Personne } from '/.personne.ts' ;
import { Adresse } from '/.adresse.ts' ;

let liste:Array<Personne>;

liste =[Personne1];

liste.forEach(function (value) {
    console.log(value.getFullInfosPersonne());
});


