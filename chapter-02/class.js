/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable max-classes-per-file */
class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        alert(`ahahah${this.type}`);
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');

const result = Human.isHuman(newZero);

console.log(result);
