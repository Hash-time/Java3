/*----------Завдання №1.1----------*/


console.log("----------Завдання №1.1----------");
let array = [1, 2, 3, 56, 84, 6, -7, 0, -10, "Hello", 123, null, undefined];

array.forEach(function(item) {
    if (item % 2 == 0 && item > 0) {
        console.log(item);
    };
});


/*----------Завдання №1.2----------*/


console.log("----------Завдання №1.2----------");
if (Array.isArray(array)) {
    console.log(array);
}


/*----------Завдання №1.3----------*/


console.log("----------Завдання №1.3----------");
array.forEach(function(item) {
    if (item == 0) {
        console.log("В масиві є нуль");
    }
});


/*----------Завдання №1.4----------*/


console.log("----------Завдання №1.4----------");
let index = 0;
array.forEach(function(item) {
    if (index == 5) {
        console.log(item);
    }
    index++;
});


/*----------Завдання №2----------*/


console.log("----------Завдання №2----------");
let product = [2, 3, 4, 5];
let product_ = 1;
product.forEach(function(item) {
    product_ *= item;
});
console.log(product_);


/*----------Завдання №3----------*/


console.log("----------Завдання №3----------");
let lang = "ukr";
if (lang == "ukr") {
    console.log("пн", "вт", "ср", "чт", "пт", "сб", "нд");
} else if (lang == "en") {
    console.log("mon", "tu", "wed", "thu", "fr", "sat", "sun");
};


/*----------Завдання №4----------*/


console.log("----------Завдання №4----------");
let corp = {
    Steve_Jobs: "Apple",
    Bill_Gates: "Microsoft",
    Elon_Mask: "Tesla",
    furry: null
}

for (key in corp) {
    if (corp[key] === null) {
        continue;
    }
    console.log(key + " - заcновник " + corp[key]);
}
