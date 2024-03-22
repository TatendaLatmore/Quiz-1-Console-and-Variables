const prompt = require('prompt-sync')();

//Program 1: Temperature Converter

console.log("Welcome to my tempurature converter app");

let fahrenheit = prompt("Input the fahrenheit tempurrature");
let celsius =(fahrenheit - 32) * 5/9;
// converts the degrees using the conversion rate

console.log("Your tempurature in celsius " + celsius);

// this will perform a tempurature conversion.

//Program 2: Grade Calculator
console.log("Hi, I'm here to calculate your grade");

let percentage = prompt("Enter your grade here");
percentage = Number(percentage); // Convert the input to a number

let grade;

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log("Your grade is: " + grade);
// This will show your grade



//Program 3: Leap Year Checker
console.log("Welcome to your Leap Year Checker");

//lets you insert the start an dend year
console.log("Leap Year Checker");

let year = prompt("Enter the year:");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
        //Checks if the year is divisible by four
    }

//This code will prompt the user when there will be a leap year

//Program 4: Largest Number Finder

console.log("Largest Number Finder");

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
//indicates to input your three numbers
//
let largestNumber;

if (num1 >= num2 && num1 >= num3) {
    largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largestNumber = num2;
} else {
    largestNumber = num3;
}

console.log("The largest number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + largestNumber);
