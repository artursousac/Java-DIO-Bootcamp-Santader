"use strict";
//Classes
/*
Data modifiers
public -> Por default é public
private -> Só pode ser acessada dentro da classe.
protected -> Só pode ser enxergada dentro da classe e de subclasses.
*/
class Character {
    constructor(name, strenght, skill) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strenght} points`);
    }
}
//Character: superclass
//Magician: subclass
class Magician extends Character {
    constructor(name, strenght, skill, magicPoints) {
        super(name, strenght, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character('Artur', 4, 2);
p1.attack();
const p2 = new Magician('Mago', 6, 2, 100);
