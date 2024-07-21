//Day 8: ES6 + Features
//Activity 1: Template literals
    //Task:1
    let Name = 'RK';
    let age = 20
    let TL = `Name:${Name} age:${age}`
    console.log(TL);

    //Task 2:
    let multiLine = `This is a
    multi-line string.`;
    console.log(multiLine);


//Activity 2: Destructuring
    //Task 3:
//     const numbers = [1, 2, 3];
// const [first, second, third] = numbers;
// console.log(first);  // 1
// console.log(second); // 2
// console.log(third);  // 3

const numbers = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = numbers;
console.log(first);  // 1
console.log(third);  // 3
console.log(fifth);  // 5

//Task 4:
// const person = { name: "Alice", age: 25 };
// const { name, age } = person;
// console.log(name);  // Alice
// console.log(age);   // 25

const person = {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345
    }
  };
  const { name, address: { city, zip } } = person;
  console.log(name); // Alice
  console.log(city); // Wonderland
  console.log(zip);  // 12345



//Activity 3: Spread and Rest Operators
//Task 4
let arr = [1,2,3,4,5]
arr1 = [...arr,6,7,8,9]
console.log(arr1);

//Task 5
function restSum(...nums)  { 
  return  nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(restSum(1,2,3,4,5));

//Activity 4: Default Parameters
//Task 7:
function prod(p1,p2=5) {
  return p1 * p2;
}
console.log(prod(2,3));
console.log(prod(2));

//Activity 5: Enhanced Object literals
//Task 8:
const property1 = 'value1';
const property2 = 'value2';
const dynamicProperty = 'dynamicKey';

const myObject = {
  property1, // Shorthand property name
  property2, // Shorthand property name

  // Method definition
  method1() {
    console.log('This is method1');
  },

  // Computed property name
  [dynamicProperty]: 'dynamicValue',

  // Another method using enhanced object literals
  method2() {
    console.log('This is method2');
  },

  // Getter and setter example
  get combinedProperties() {
    return `${this.property1} ${this.property2}`;
  },

  set combinedProperties(value) {
    const [prop1, prop2] = value.split(' ');
    this.property1 = prop1;
    this.property2 = prop2;
  }
};

console.log(myObject);

// Invoking methods
myObject.method1(); // Output: This is method1
myObject.method2(); // Output: This is method2

// Using getter
console.log(myObject.combinedProperties); // Output: value1 value2

// Using setter
myObject.combinedProperties = 'newValue1 newValue2';
console.log(myObject.property1); // Output: newValue1
console.log(myObject.property2); // Output: newValue2


//Task 9:
const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const value1 = 'John';
const value2 = 'Doe';
const value3 = 30;

const dynamicObject = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
  
  // Method with a computed name
  ['say' + 'Hello']() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }
};

console.log(dynamicObject);
console.log(dynamicObject.sayHello());
