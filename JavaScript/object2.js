const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log(`Hello,said ${this.name} the ${this.breed}`);
  }
};
const cat2 = {
  name: 'Carol',
  breed: 'Siamese',
  color: 'black',
  greeting: function () {
    console.log(`Hello,said ${this.name} the ${this.breed}`);
  }
};

cat.greeting();
cat2.greeting();
