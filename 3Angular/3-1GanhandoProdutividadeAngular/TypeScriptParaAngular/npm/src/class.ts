//Classes

/*
Data modifiers
public -> Por default é public
private -> Só pode ser acessada dentro da classe.
protected -> Só pode ser enxergada dentro da classe e de subclasses.
*/

class Character {
    private name: string;
    strenght: number; // strenght?: number, transformaria esse atributo em opcional, sem a necessidade de definir.
    skill: number; //readonly skill: number, tornaria skill somente para leitura, sem conseguir modificar o valor.

    constructor(name: string, strenght: number, skill: number) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
        
    }

    attack(): void{
        console.log(`Attack with ${this.strenght} points`);
    }

}

//Character: superclass
//Magician: subclass
class Magician extends Character{
    magicPoints: number;
    constructor(name: string, strenght: number, skill: number, magicPoints: number){
        super(name, strenght, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character('Artur', 4, 2);
p1.attack();
const p2 = new Magician('Mago', 6, 2, 100);