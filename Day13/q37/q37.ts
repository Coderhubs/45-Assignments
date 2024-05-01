// Question 37: Large Shirts: Default values in make_shirt()

function make_Tshirt(
 size: string = "Large",
 message: string = "I'm a Programmer",
 color: string = "Blue") {
 console.log(`
    t-shirt size: ${size}
    t-shirt print: ${message}
    t-shirt color: ${color}`);
}
make_Tshirt()
make_Tshirt("Medium")
make_Tshirt("small")