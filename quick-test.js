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

// another way to define functions
let logMessage = (...message) => console.log.apply(null, message)

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

logMessage('number', number);
logMessage('string', string);
logMessage('object', object);
logMessage('array of numbers', arrayOfNumbers);
logMessage('array of strings', arrayOfStrings);
logMessage('array of objects', arrayOfObjects);

// this is how a function is invoked
var result = add(1, 3);
logMessage('result', result);

// this is how a class is instantiated
var person = new Person({ name: "raghu", age: 25 });
logMessage('person details:', person.getName(), "|", person.getAge());