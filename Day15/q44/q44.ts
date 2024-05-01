// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich(...items: string[]) {
    console.log(`making a sandwich with: ${items.join(` ,`)}.`);

}
make_sandwich("ham", "cheese")
make_sandwich("turkey", "lettuce", "Tomato")
make_sandwich("avacado", "sprouts", "mustard", "mayo")