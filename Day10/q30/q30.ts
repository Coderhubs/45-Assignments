// Question 30: Hello Admin: Greet users differently, especially 'admin'.


let usernames :string [] = ["Admin","User1", "user2","user3","user 4"]
usernames.forEach(username => {
  if (username === "Admin" ) {
console.log("Hello Admin, would you like to know my status report?");
  } else  {
    console.log(`Hello ${username} Thank you for logging in ! `)
    
 }
});