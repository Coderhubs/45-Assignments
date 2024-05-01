// Question 38: Cities: Describing cities with a function.
function describe_city(city, country) {
    if (city === void 0) { city = "Thatta"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n    city name:".concat(city, "\n    country name:").concat(country));
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Tokyo", "Japan");
