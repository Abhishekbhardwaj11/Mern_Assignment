let age = 25;
let isAdult = age >= 18;

let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

let n = 7;
let isEven = n % 2 === 0;
let evenOrOdd = isEven ? "Even" : "Odd";

let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}

function square(num) {
  return num * num;
}

console.log("Task 1 - isAdult:", isAdult);
console.log("Task 2 - Addition:", addition, "Multiplication:", multiplication, "Modulus:", modulus);
console.log("Task 3 -", n, "is", evenOrOdd);
console.log("Task 4 - Numbers array:", numbers);
console.log("Task 5 - Square of 4:", square(4));
