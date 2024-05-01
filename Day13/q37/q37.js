// Question 37: Large Shirts: Default values in make_shirt()
function make_Tshirt(size, message, color) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I'm a Programmer"; }
    if (color === void 0) { color = "Blue"; }
    console.log("\n    t-shirt size: ".concat(size, "\n    t-shirt print: ").concat(message, "\n    t-shirt color: ").concat(color));
}
make_Tshirt();
make_Tshirt("Medium");
make_Tshirt("small");
