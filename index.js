// Function that creates an animal object using a factory function pattern
function animal(noOfLegs, vegetarian) {
  let obj = {};

  // Set properties
  obj.noOfLegs = noOfLegs;
  obj.vegetarian = vegetarian;

  // Method to simulate eating
  obj.eat = function () {
    return `eating...`;
  };

  // Method to greet and display the number of legs
  obj.greet = function () {
    return `Hi, I have ${noOfLegs} legs.`;
  };

  // Return the created object
  return obj;
}

// Create an animal object using the factory function
let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.

// Function that creates an animal object using a constructor function pattern
function AnimalCF(noOfLegs, vegetarian) {
  // Set properties
  this.noOfLegs = noOfLegs;
  this.vegetarian = vegetarian;

  // Method to simulate eating
  this.eat = function () {
    return `eating...`;
  };

  // Method to greet and display the number of legs
  this.greet = function () {
    return `Hi, I have ${noOfLegs} legs.`;
  };
}

// Create an animal object using the constructor function
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.

// Class that creates an animal object using ES6 class syntax
class AnimalES6 {
  // Constructor to initialize properties
  constructor(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  }

  // Method to simulate eating
  eat = function () {
    return `eating...`;
  };

  // Method to greet and display the number of legs
  greet = function () {
    return `Hi, I have ${this.noOfLegs} legs.`;
  };
}

// Create an animal object using the ES6 class
let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
