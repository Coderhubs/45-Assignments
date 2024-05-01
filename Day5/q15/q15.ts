// Question 15: Changing Guest List: One of your guests can't make it to the dinner, 
//so you need to send out a new set of invitations with a replacement guest.

let Guests = ["Philip", "wilson", "Thomson"];
console.log(Guests);

let unableToAttend = "Philip";
console.log(`${unableToAttend} will not attend dinner.`);

// Replace the guest
let newGuest = "Herry";
Guests[Guests.indexOf(unableToAttend)] = newGuest;

// New invitations
Guests.forEach(Guest => {
    console.log(`Dear ${Guest}, would you like to me for dinner?`);
});
