// Question 41: Magicians:
// Display magician names from an array.
// function (show magacians) / call the function
//  and For display the name we use .for each to console magacians
var magacians = ["Willilam", "Bob", "Joe"];
function show_magacians(magacians) {
    magacians.forEach(function (magacian) {
        console.log(magacian);
    });
}
show_magacians(magacians);
