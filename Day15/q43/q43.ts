// Question 43: Unchanged Magicians: 
//Preserve the original magician names 
// while creating a new "great" list.

function show_magacians (){
    let magician_names = ["simra","habib","shahab","sabah"]
    console.log(magician_names);
    
}
function greet_magacians (){
    let magicians_Names = ["simra","habib","shahab","sabah"]
    for (let magician of magicians_Names){
        console.log(`The Great ${magician}`);
        
    }
}
show_magacians();
greet_magacians();