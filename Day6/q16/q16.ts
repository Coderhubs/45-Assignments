//Day 6 Challenge

//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[] = ["Daud","Rossy","william","Harry"];
console.log(`Good News! I found a big dinner table`);

// Add guest in the beginning
guests.unshift ("Henry");

// Add the guest in the middle 

guests.splice ( guests.length / 2 , 0  ,"kelvin");

//Add the guest in the end
guests.push ('Kim');
for(let guest of guests){
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
};
