
// Source: https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/
// Example with function
function Pen(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new Pen("Marker","Blue", "$3");

// Add a function to the constructor
Pen.prototype.showPrice = function(){
    console.log(`Price of ${this.name} is ${this.price}`);
}

const pen2 = new Pen("Pencil","Black", "$2");

//pen2.showPrice();


// Example with class

class Pencil {
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showPrices(){
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pencil = new Pencil("Pencil","Black", "$2");
pencil.showPrices();

