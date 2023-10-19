import { Personne } from "./personne";
import { Adresse } from "./adresse";

export class Enseignant extends Personne{
    private specialite : string;
    private statut : string;
 
     constructor(nom : string, prenom : string, adresse : Adresse, specialite : string, statut : string) {
         super(nom,prenom,adresse)
         this.specialite = specialite;
         this.statut = statut;
     }
 
     public getSpecialite(): string  {
         return this.specialite;
     }
 
     public getStatut(): string {
         return this.statut;
     }
 
     public setSpec(specialite : string): any {
         this.specialite = specialite;
     }
 
     public setStatut(statut : string): any{
         this.statut = statut;
     }
 
     public getFullinfos(): string {
        return super.getFullinfos() + this.specialite + this.statut;
     }
 }