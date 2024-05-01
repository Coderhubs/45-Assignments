//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
//print a message to them. The message should be the same for each person,
// but personalized with their name.


let greeting = ['whats up', 'Happy Holy Month of Ramzan', 'Stay tuned', 'Welcome to programmers world'];
let MyFriends = ['sabah','sanober','sanam','Habib'];
for (let friend in MyFriends){
    console.log(`${greeting[friend]} ${MyFriends[friend]}`);
}
