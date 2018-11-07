class Animal { 
    constructor(_name) { 
        this.name = _name;
    }
    makeSound() { 
        console.log("Generic animal sound!!!");
    }
}

class Dog extends Animal {
    constructor(_name) {
        super(_name);
    }  
    //it's checking if the dog class has this method 
    //if it's doesn't it checks the parent class and uses it
    //that's polymorphism

    makeSound() { 
        super.makeSound();
        console.log("Woof! Woof!");
    }
}

const a1 = new Animal("Dom");
const a2 = new Dog("Jim");

