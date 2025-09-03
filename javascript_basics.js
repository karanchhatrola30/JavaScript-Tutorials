// ===============================
// JavaScript Basics - Examples
// ===============================

// 1. VARIABLES
let name = "John";         // block-scoped, reassignable
const pi = 3.14;           // constant, immutable
var age = 25;              // function-scoped, legacy
console.log("Name:", name, "| Age:", age, "| PI:", pi);

// 2. DATA TYPES
let str = "Hello";         // string
let num = 42;              // number
let bool = true;           // boolean
let undef;                 // undefined
let nul = null;            // null
let sym = Symbol("id");    // symbol
let big = 123456789012345678901234567890n; // bigint

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Symbol:", sym);
console.log("BigInt:", big);

// 3. OPERATORS
let a = 10, b = 3;
console.log("Addition:", a + b);          // 13
console.log("Subtraction:", a - b);       // 7
console.log("Multiplication:", a * b);    // 30
console.log("Division:", a / b);          // 3.333...
console.log("Modulus:", a % b);           // 1
console.log("Strict Equality:", a === b); // false
console.log("Logical AND:", a > 5 && b < 5); // true

a += 5;
console.log("After a += 5:", a);          // 15

// 4. CONDITIONALS
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater or equal");
}

let grade = "B";
switch (grade) {
    case "A": 
        console.log("Excellent"); 
        break;
    case "B": 
        console.log("Good"); 
        break;
    default: 
        console.log("Keep Trying");
}

let result = (a > b) ? "a > b" : "b >= a";
console.log("Ternary Result:", result);

// 5. LOOPS
for (let i = 1; i <= 3; i++) {
    console.log("For Loop:", i);
}

let count = 0;
while (count < 3) {
    console.log("While Loop:", count);
    count++;
}

do {
    console.log("Do While Loop runs at least once");
} while (false);

let obj = { x: 10, y: 20 };
for (let key in obj) {
    console.log("For...in:", key, obj[key]);
}

let arr = [10, 20, 30];
for (let val of arr) {
    console.log("For...of:", val);
}

// 6. FUNCTIONS
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Alice"));

const square = function(n) { 
    return n * n; 
};
console.log("Square of 4:", square(4));

const arrowAdd = (x, y) => x + y;
console.log("Arrow Function:", arrowAdd(3, 7));

// 7. OBJECTS & ARRAYS
let person = {
    name: "John",
    age: 30,
    greet: function() { 
        console.log("Hi, I am " + this.name); 
    }
};
person.greet();

let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log("Fruits:", fruits);
console.log("Pop:", fruits.pop());

// 8. SCOPE
function testScope() {
    let blockVar = "block";
    console.log("Inside function:", blockVar);
}
testScope();

// 9. HOISTING
console.log(hoistedVar); // undefined (due to var hoisting)
var hoistedVar = "I am hoisted";

// 10. DOM MANIPULATION (Requires browser)
// Example HTML: <button id="myBtn">Click Me</button>
document.getElementById("myBtn").innerHTML = "Click Me!";
document.querySelector("p").style.color = "blue";

// 11. EVENTS (Requires browser)
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clicked!");
});

// 12. ASYNC JAVASCRIPT
function asyncDemo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Done after 2s"), 2000);
    });
}

asyncDemo().then(console.log);

async function runAsync() {
    let res = await asyncDemo();
    console.log("Async/Await:", res);
}
runAsync();

// 13. ERROR HANDLING
try {
    throw new Error("Something went wrong!");
} catch (e) {
    console.log("Caught error:", e.message);
}

// 14. ES6+ FEATURES
let username = "Sam";
console.log(`Hello ${username}, welcome!`); // Template literal

let [first, second] = [1, 2]; // Destructuring
console.log("Destructuring:", first, second);

let nums = [1, 2, 3];
let newNums = [...nums, 4, 5]; // Spread operator
console.log("Spread:", newNums);

function sum(...args) { // Rest operator
    return args.reduce((acc, n) => acc + n, 0);
}
console.log("Rest Operator Sum:", sum(1,2,3,4));