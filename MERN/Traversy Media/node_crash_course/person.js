// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hola = 'brooo';
  list = [
    { name: 'bruh', roll: 99 },
    { name: 'bruh', roll: 99 },
    { name: 'bruh', roll: 99 }
  ]

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
