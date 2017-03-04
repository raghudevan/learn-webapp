'use strict'

/**
 * This is a function declaration
 * @param  {number} a value to add
 * @param  {number} b value to add
 * @return {number}   resultant of addition
 */
function add(a, b) {
    return a + b;
}

/**
 * A class is like a blueprint,
 * when instantiated - we get access to its methods
 */
class Person {
    constructor(details) {
        let { name, age } = details;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

// The below are variable declarations
// variables are named in lowerCamelcase
// variables names may only start with $, _ or any character
var number = 123;
var string = "hello world!";
var object = { firstWord: "hello", secondWord: "world" };
var arrayOfNumbers = [ 1, 2, 3, 4, 5 ];
var arrayOfStrings = [ "name", "age", "occupation" ];
var arrayOfObjects = [ { name: "raghu", age: 25 }, { name: "devan", age: 26 } ];

console.log('number', number);
console.log('string', string);
console.log('object', object);
console.log('array of numbers', arrayOfNumbers);
console.log('array of strings', arrayOfStrings);
console.log('array of objects', arrayOfObjects);

// this is how a function is invoked
var result = add(1, 3);
console.log('result', result);

// this is how a class is instantiated
var person = new Person({ name: "raghu", age: 25 });
console.log('person details:', person.getName(), "|", person.getAge());