console.log("hello world");
const data = require("./food.json");
// console.log(data);

let Food_names = [];
let Food_vegetable_category = [];
let Food_fruit_category = [];
let Food_protein_category = [];
let Food_nuts_category = [];
let Food_grain_category = [];
let Food_dairy_category = [];
let calorie_above_100 = [];
let calorie_below_100 = [];
let cabs = [];
let proteins = [];

function food_items_names(data) {
  data.forEach((item) => {
    Food_names.push(item.foodname);
  });
  return console.log(Food_names);
}

function category_distribution(data) {
  data.forEach((item) => {
    if (item.category === "Vegetable") {
      Food_vegetable_category.push(item.foodname);
    } else if (item.category === "Fruit") {
      Food_fruit_category.push(item.foodname);
    } else if (item.category === "Protein") {
      Food_protein_category.push(item.foodname);
    } else if (item.category === "Nuts") {
      Food_nuts_category.push(item.foodname);
    } else if (item.category === "Grain") {
      Food_grain_category.push(item.foodname);
    } else if (item.category === "Dairy") {
      Food_dairy_category.push(item.foodname);
    }
  });
}

function calorie_distribution(data) {
  data.forEach((item) => {
    if (item.calorie > 100) {
      calorie_above_100.push(item.foodname);
    } else {
      calorie_below_100.push(item.foodname);
    }
  });
}

function protein_and_cabs(data) {
  data.forEach((item) => {
    cabs.push(item.cab);
    proteins.push(item.protiens);
  });
  cabs.sort(function (a, b) {
    return a - b;
  });
  proteins.sort(function (a, b) {
    return b - a;
  });
  return console.log(proteins, cabs);
}
