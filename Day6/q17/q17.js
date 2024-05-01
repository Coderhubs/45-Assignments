// Question 17: Shrinking Guest List: Unfortunately, 
//your new table won’t arrive in time, 
// and you can only invite two guests.
let guests = ["Henry", "william", "kelvin", "Boltzman", "Maxwell"];
console.log(guests);
while (guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`Sorry ${removedGuests} You are not invited to dinner`);
}
let invitedGuests = guests;
console.log(`${invitedGuests} you are invited to tonight dinner gathering`);
export {};
