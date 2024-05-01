// Question 42: Great Magicians: 
// Add "the Great" to magician names

let magicians : string[] = ["simra","Habib","shahabuddin","sabah"]

function make_great(){ 
    magicians.forEach((magician)=>{
        console.log(`The Great ${magician}`);
        
    });
}
make_great();