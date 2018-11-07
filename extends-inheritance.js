//Parent Class    

class Person {

    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}
//Child class

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        //this super method calls the constructor method of Person
        super(_name, _age);

        //custom behavior of the Programmer
        this.yearsOfExperience = _yearsOfExperience;
    }

    code() { 
        // console.log(`${this.name} is coding`);
    }
}

let programmers = [
    new Programmer("Dom", 43, 4),
    new Programmer("Bob", 15, 42),
    new Programmer("Cliff", 40, 10)
];

function developSoftware(programmers) {
    //Develop software
    for (let programmer of programmers) {
        programmer.code();
    }
}
developSoftware(programmers);
