// Question 43: Unchanged Magicians: 
//Preserve the original magician names 
// while creating a new "great" list.
function show_magacians() {
    var magician_names = ["simra", "habib", "shahab", "sabah"];
    console.log(magician_names);
}
function greet_magacians() {
    var magicians_Names = ["simra", "habib", "shahab", "sabah"];
    for (var _i = 0, magicians_Names_1 = magicians_Names; _i < magicians_Names_1.length; _i++) {
        var magician = magicians_Names_1[_i];
        console.log("The Great ".concat(magician));
    }
}
show_magacians();
greet_magacians();
