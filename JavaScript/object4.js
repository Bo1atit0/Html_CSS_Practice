function Cat (name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    console.log(`Hello,said ${this.name} the ${this.breed}`);
  };
}

const cat1 = new Cat('carol', 'siamese', 'grey');
cat1.greeting();
