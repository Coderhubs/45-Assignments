// Question 45: Cars: Create detailed car objects with flexible properties.
function Car_info(manufacture, model_number) {
    var keywords = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        keywords[_i - 2] = arguments[_i];
    }
    return {
        manufacture: manufacture,
        model_number: model_number,
        features: keywords
    };
}
var car_1 = Car_info("Toyota", "corolla", "Paint: Black");
var car_2 = Car_info("Ford", "Fiesta", "Paint: Blue");
var car_3 = Car_info('Lamborghini', 'Hurracan', 'Paint: white');
console.log(car_1);
console.log(car_2);
console.log(car_3);
