// Section 1: Basic Rules and Data Types

// Exercise 1: Formatting and Naming (Code Correction)
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  // code block
  console.log("===(Exercise 1)=== \n"+Object.keys({thisIsANewVariable})[0]);
}
console.log("");

// Exercise 2: Defining Core Data Types (Coding)
let userName = `John Doe`;   // string backticks
let itemPrice = 19.99;       // float number
let isActive = true;         // boolean
console.log("===(Exercise 2)=== \nuserName: "+userName+"\nitemPrice: "+itemPrice+"\nisActive: "+isActive);
console.log("");

// Exercise 3: Single-Line Comments (Coding)
let currentScore = 95; // Stores the player's current score in the game
console.log("===(Exercise 3)=== \ncurrentScore: ",currentScore);
console.log("");

// Exercise 4: Equality Comparison (Coding)
console.log("===(Exercise 4)===");
console.log('100' == 100);  // true
console.log('100' === 100); // false
console.log("");



// Section 2: Conditionals and Control Flow

// Exercise 5: Ternary Operator (Coding)
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log("===(Exercise 5)=== \n"+schedule);
console.log("");

// Exercise 6: If/Else Structure (Coding)
let userAge = 16;
console.log("===(Exercise 6)===");
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
console.log("");

// Exercise 7: Logical AND Operator (Coding)
let hasPermission = true;
let itemCount = 3;
console.log("===(Exercise 7)===");
if (hasPermission && itemCount < 5) {
  console.log("Ready to process");
}
console.log("");

// Exercise 8: For Loop (Coding)
console.log("===(Exercise 8)===");
for (let i = 1; i <= 5; i++) {
    console.log("Current iteration number:", i);
}
console.log("");

// Exercise 9: Loop Control (Coding)
console.log("===(Exercise 9)===");
for (let i = 0; i < 10; i++) {
    if (i === 7) {
        console.log("Current iteration is",i,", loop terminated.");
        break;
    }
    console.log(i);
}
console.log("");

// Exercise 10: Ensuring Execution (Coding)
let counter = 10;
console.log("===(Exercise 10)===");
do {
    console.log("Running once");
} while (counter === 9);
console.log("");



// Section 3: Functions and Data Structures

// Exercise 11: Function Definition (Coding)
console.log("===(Exercise 11)===");
function calculateArea(width, height) {
    return width * height;
}  
let resultArea = calculateArea(5, 10);
console.log("Area:", resultArea);
console.log("");

// Exercise 12: Array Manipulation (Coding)
console.log("===(Exercise 12)===");
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape'); // Adds 'Grape' to the end
console.log("Current List: "+fruitList)
fruitList.shift(); // Removes the first item ('Apple')
console.log("Current List: "+fruitList)
console.log("Index of Banana:", fruitList.indexOf('Banana')); // Logs the index of 'Banana'
console.log("");

// Exercise 13: Array Copying (Coding)
console.log("===(Exercise 13)===");
let originalData = [1, 2, 3, 4];
let clonedData = originalData.slice();
console.log("Original:", originalData);
console.log("Clone:", clonedData);
console.log("Explanation:\
\nThe slice() method creates a shallow copy of the array.\
\nThis means primitive values are copied, but for objects or arrays,\
\nit copies references to those objects rather than creating new copies of them.\
\nThis means that both the original array and the shallow copy will point to the same underlying objects in memory.");
console.log("");

// Exercise 14: Object Constructor (Coding)
console.log("===(Exercise 14)===");
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}
console.log(`function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}`);
console.log("");

// Exercise 15: Object Instantiation (Coding)
console.log("===(Exercise 15)===");
let cat = new Animal("Feline", "Meow");
let dog = new Animal("Canine", "Woof");
let animalArray = [dog, cat];
console.log(animalArray);
