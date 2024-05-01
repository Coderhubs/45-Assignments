// // Question 35: Animals: Highlight animals with a common trait.
// let petanimals : string [] = ["Cat","Dog","Rabbit"];
// petanimals.forEach(animal=> {
//     console.log(`A ${animal} is a great pet animal`);
// });
// console.log("Any of these animal would be a great pet animal");
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
