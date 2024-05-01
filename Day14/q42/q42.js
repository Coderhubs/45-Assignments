// Question 42: Great Magicians: 
// Add "the Great" to magician names
var magicians = ["simra", "Habib", "shahabuddin", "sabah"];
function make_great() {
    magicians.forEach(function (magician) {
        console.log("The Great ".concat(magician));
    });
}
make_great();
