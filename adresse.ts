class Adresse {
    private rue : string;
    private cp : string;
    private ville : string;

    constructor(rue : string, cp : string, ville : string) {
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
    }

    public getRue()  {
        return this.rue;
    }

    public getCp()  {
        return this.cp;
    }

    public getVille() {
        return this.ville;
    }

    public setRue(rue:string): any{
        this.rue = rue;
    }

    public setCp(cp:string): any {
        this.cp = cp;
    }

    public setVille(ville:string): any {
        this.ville = ville;
    }

    public getFullAdresse(): string {
        return this.rue + this.cp + this.ville;
    }
    }
