
// Question 45: Cars: Create detailed car objects with flexible properties.

interface car {

    manufacture: string;
    model_number: string;
    features: any[];
}
function Car_info(manufacture: string, model_number: string, ...keywords: any[]): car {
    return {
        manufacture: manufacture,
        model_number: model_number,
        features: keywords

    };
}

let car_1 = Car_info("Toyota", "corolla", "Paint: Black");

let car_2 = Car_info("Ford", "Fiesta", "Paint: Blue");

let car_3 = Car_info('Lamborghini', 'Hurracan', 'Paint: white');

console.log(car_1);

console.log(car_2);

console.log(car_3);

