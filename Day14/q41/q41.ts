// Question 41: Magicians:
// Display magician names from an array.
// function (show magacians) / call the function
//  and For display the name we use .for each to console magacians

let magacians:string[] = ["Willilam","Bob","Joe"]

function show_magacians(magacians:string[]) {
    magacians.forEach(magacian => {
        console.log(magacian);
        
    });
}
show_magacians(magacians)

// with index loop
// let magacians: string[] = ["simra","Shahabuddin","habib","sabah"]

// for (let magacian = 0; magacian < magacians.length; magacian ++)
//     console.log(`The Great ${magacians[magacian]}`);