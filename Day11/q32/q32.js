// Question 32: Checking Usernames: Ensure uniqueness in usernames.
var current_users = ["simra", "shahab", "jabeen", "SAhIl"];
var New_Users = ["SIMRA", "sabah", "Anum", "SaHiL"];
for (var _i = 0, New_Users_1 = New_Users; _i < New_Users_1.length; _i++) {
    var newUser = New_Users_1[_i];
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(newUser.toLowerCase())) {
        console.log("The ".concat(newUser, " already exists"));
    }
    else {
        console.log("The ".concat(newUser, " is available"));
    }
}
