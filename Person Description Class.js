class Personne{
        constructor(nom,age){
            this.nom = nom ;
            this.age = age ;
        }
        decrire(){
            console.log(this.nom+ " , " + this.age + " ans " )
        }
    }

    let test = new Personne ("marieme",20);
    console.log(test.decrire());
