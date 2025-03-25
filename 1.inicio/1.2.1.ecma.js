/* 
*---------ES6---------- 
*/

/*
 ! Functions 
 */

// Traditional function declaration
function suma(a, b) {
  return a + b;
}

// Arrow function equivalente
const sumaArrow = (a, b) => a + b;

console.log(suma(2, 3));
console.log(sumaArrow(2, 3));

/* 
! Let y const 
*/

// let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
let variableLet = "Esta es una variable let";
// const allows you to declare variables that are read-only.
const variableConst = "Esta es una variable const";

/* 
! template literals 
*/

// Template literals provide an easy way to interpolate variables and expressions into strings.
const firtsName = "Jhon";
const greeting = `Hello, ${firtsName}!`;
console.log(greeting);

/* 
! destructuring 
*/

// Destructuring assignment allows you to unpack values from arrays or properties from objects into distinct variables.
const person = { name: "Jhon", age: 30 };
const { name: personName, age } = person;
console.log(personName);
console.log(age);

const numbers = [1, 2, 3];
const [one, two, three] = numbers;
console.log(one);
console.log(two);
console.log(three);

/* 
! Classes 
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    const myString = `Hello, mi name is ${this.name} and I am ${this.age} years old.`;
    return myString;
  }
}

const person1 = new Person("Jhon", 30);
console.log(person1.greeting());

/* 
*---------ES7---------- 
*/

/* 
! Exponentiation operator (**) for powers 
*/

const base = 2;
const exponent = 3;
const result = base ** exponent;
console.log(`${base} raised to the power of ${exponent} is ${result}`);

/* 
! Array.prototype.includes() 
*/

const fruits = ["apple", "banana", "orange"];
const hasApple = fruits.includes("apple");
const hasGrape = fruits.includes("grape");
console.log(`Does the array include apple? ${hasApple}`);
console.log(`Does the array include grape? ${hasGrape}`);

/* 
*---------ES8---------- 
*/

/* 
! String.prototype.padStart() y String.prototype.padEnd()  
*/

const str = "5";
const paddedStart = str.padStart(4, "0");
const paddedEnd = str.padEnd(4, "0");
console.log(`Padded at start: ${paddedStart}`);
console.log(`Padded at end: ${paddedEnd}`);

/* 
! Object.entries() y Object.values()   
*/

const personObject = { name: "Jhon", age: 30, role: undefined };
const entries = Object.entries(personObject);
const values = Object.values(personObject);

console.log(entries);
console.log(values);

/* 
*---------ES9---------- 
*/

/* 
! Object rest y Object spread 
*/

const person2 = { name: "Jhon", age: 30, role: "developer" };

// Object spread
const updatedPerson = { ...person2, age: 31, location: "Colombia" };
console.log(updatedPerson);

// Object rest
const { role, ...rest } = person2;
console.log(rest);

/* 
! Promise.prototype.finally() 
*/

const myPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("This will run regardless of the promise outcome");
  });

/* 
*---------ES10---------- 
*/

/* 
! Array.prototype.flat(), Array.prototype.flatMap()
*/

const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray);

const array = [1, 2, 3];
const flatMappedArray = array.flatMap((x) => [x, x * 2]);
console.log(flatMappedArray);

/* 
! Object.fromEntries() 
*/

const entriesArray = [
  ["name", "Jhon"],
  ["age", 30],
  ["role", "developer"],
];
const obj = Object.fromEntries(entriesArray);
console.log(obj);

/* 
*---------ES11---------- 
*/

/* 
! coalescente (??) 
*/

const nullValue = null;
const undefinedValue = undefined;
const nonNullValue = "I am not null or undefined";

const result1 = nullValue ?? "Default value";
const result2 = undefinedValue ?? "Default value";
const result3 = nonNullValue ?? "Default value";

console.log(result1);
console.log(result2);
console.log(result3);

/* 
! Promise.allSettled() 
*/

const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.reject("Promise 2 rejected");
const promise3 = Promise.resolve("Promise 3 resolved");

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1}:`, result);
  });
});

/* 
*---------ES12---------- 
*/

/* 
! String.prototype.replaceAll() 
*/

const text = "The rain in Spain stays mainly in the plain";
const newText = text.replaceAll("in", "on");
console.log(newText);

/* 
! &&= y ||=
 */

let a = true;
let b = false;
let c = null;

// Logical AND assignment (&&=)
a &&= "Assigned because a is true";
b &&= "Not assigned because b is false";
console.log(a);
console.log(b);

// Logical OR assignment (||=)
c ||= "Assigned because c is null";
console.log(c);

/* 
*---------ES13---------- 
*/

/* 
! Class fields
*/

class Person3 {
  #name; // Private field
  #age; // Private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getDetails() {
    return `Name: ${this.#name}, Age: ${this.#age}`;
  }
}

const person3 = new Person3("Jhon", 30);
console.log(person3.getDetails());
//console.log(person3.#name); // Error: Private field '#name' must be declared in an enclosing class

/* 
! Array.prototype.at() 
*/

const arrayAt = [10, 20, 30, 40, 50];

console.log(arrayAt.at(0));
console.log(arrayAt.at(1));
console.log(arrayAt.at(-1));
console.log(arrayAt.at(-2));
console.log(arrayAt.at(4));
console.log(arrayAt.at(5));


/* 
*---------ES14---------- 
*/

/* 
! Array.prototype.findLast(), Array.prototype.findLastIndex() 
*/

const numbers02 = [5, 12, 8, 130, 44];

const found = numbers02.findLast((element) => element > 10);
console.log(found);

const numbers03 = [5, 12, 8, 130, 44];

const foundIndex = numbers03.findLastIndex((element) => element > 10);
console.log(foundIndex);

/* 
! toReversed(), toSorted(), toSpliced and with() 
*/

const numbers04 = [1, 3, 2, 4, 5];

// toReversed
const reversedArray = numbers04.toReversed();
console.log(reversedArray);
console.log(numbers04);

// toSorted
const sortedArray = numbers04.toSorted();
console.log(sortedArray);
console.log(numbers04);

// toSpliced
const splicedArray = numbers04.toSpliced(1, 3);
console.log(splicedArray);
console.log(numbers04);

// with
const replaceWithArray = numbers04.with(2, 10);
console.log(replaceWithArray);
console.log(numbers04);

/* 
*---------ES15---------- 
*/

/* 
! Object.groupBy 
*/

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
];

const groupedByAge = Object.groupBy(people, (person) => person.age);
console.log(groupedByAge);
// Output:
// {
//   21: [{ name: "Alice", age: 21 }, { name: "Charlie", age: 21 }],
//   25: [{ name: "Bob", age: 25 }, { name: "David", age: 25 }]
// }

/* 
! Map.groupBy 
*/

const persons = [
  { name: "John", age: 70 },
  { name: "Kane", age: 5 },
  { name: "Jack", age: 50 },
  { name: "Rambo", age: 15 },
];

// Callback function to categorize people based on age
function callbackFunc({ age }) {
  if (age >= 60) {
    return "senior";
  } else if (age > 17 && age < 60) {
    return "adult";
  } else {
    return "kid";
  }
}

console.log("--------");

const groupedByAgeMap = Map.groupBy(persons, callbackFunc);
console.log(groupedByAgeMap);

// Output:
// {
//     'senior' => [ { name: 'John', age: 70 } ],
//     'kid' => [ { name: 'Kane', age: 5 }, { name: 'Rambo', age: 15 } ],
//     'adult' => [ { name: 'Jack', age: 50 } ]
//   }
