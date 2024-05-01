// Question 32: Checking Usernames: Ensure uniqueness in usernames.


let current_users = ["simra","shahab","jabeen","SAhIl"];

let New_Users = ["SIMRA","sabah","Anum","SaHiL"];

for (let newUser of New_Users) {
    if(current_users.map(user => user.toLowerCase()).includes(newUser.toLowerCase())){
        console.log(`The ${newUser} already exists`);
        
    } else {
        console.log(`The ${newUser} is available`);
        
    }
}

