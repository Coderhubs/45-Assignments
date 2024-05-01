// // //Question 24: More Conditional Tests: 
// // //Expand your conditional tests to cover a wider range of comparisons.

import chalk from "chalk";

// //test # 01
//Equality with string

let fruit: string = "apple";

console.log(chalk.bold.blueBright("Is apple is equal to apple"));
console.log("apple" == "apple");// True

console.log(chalk.bold.blueBright("\n Is apple is not equal to apple"));
console.log("apple" != "apple");// False


// //test # 02
// using the lower case function

let uppercaseFruit: string = "Apple";

console.log("Is Apple is equal to apple convert it in lower case.");
console.log(uppercaseFruit.toLowerCase() == "apple");

console.log("Is Apple is not equal to apple convert it in lower case.");
console.log(uppercaseFruit.toLowerCase() != "apple");



//test # 03
// Numerical test 
let age: number = 20
console.log("If age is equal to 20! Predict its true");
console.log(20 == 20);

console.log("If age is not  equal to 20! Predict its false");
console.log(20 != 20);


//Greator than 

console.log(chalk.bold.greenBright("\n if age is greator than 10 ? predict true"));
console.log((10 < 20));
//less than
console.log(chalk.bold.greenBright("if the age is less than 20? predict false"));
console.log((10 > 20));


// Test # 04
let num3 = 15

console.log(5 < 10 && 10 > 15);
console.log("If 10 is greator than 5 and 10 is less than 15? it predict false");

console.log(5 < 10 || 10 > 15);
console.log("If 5 is greator than 10 or 10 is less than 15? it predict false");

//Test # 05

// Test whether an item is in a array

let fruits = ["Kiwi", "Pineapple", "Mango"];
console.log(["Is `Kiwi` in fruits?"]);
console.log(fruits.includes("Kiwi"));



// Test whether an item is not in a array

console.log("Is 'strawberry' not in fruits?");
console.log(!fruits.includes("strawberry")); // True
