// Answer question 1
//Created an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"];

// Answer question 2
//Console logged the value of the second item in petArray.

console.log(petArray[1]);


// Answer question 3
// Added the item "sheep" to petArray using the push method.

petArray.push("sheep");



// Answer question 4
// Console logged how many items there are now in petArray using the length method.

console.log(petArray.length);

// Answer question 5
// Create an object called catObject with 3 properties: name, colour, age. Add appropriate values 
// (and type of values) for each of these properties.

var catObject = {
        name: "Siri",
        colour: "white",
        age: 3
    };


// Answer question 6
// Console logged the value of the third property of catObject.

console.log(catObject.age);


// Answer question 7
// Took the value of catObject (the {} part) and place it inside an array called catArray.

var catArray = [
    { 
        name: "Siri", 
        colour: "white", 
        age: 3 
    }
];

// Answer question 8
// Looping through catArray and console logged each property of each object inside (there will be only 1 object inside).

for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);

    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
  }

// Answer question 9
// Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

function logToConsole(animalName) {
    console.log(animalName);
}

logToConsole("Dagros");


// Answer question 10
// Call the logToConsole function and pass in the value "donkey"

var animal = "donkey";

function logToConsole(animalName) {
    console.log("The donkey is named " + animalName);
}