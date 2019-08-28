// Example 1
let foods = [800, 200, 100, 300, 700];

let total = foods.reduce((sum, item) => {
    return sum + item;
});

console.log(total);

// Example 2
let foods = [
    { name: 'steak', calories: 800 },
    { name: 'fruit', calories: 200 },
    { name: 'salad', calories: 100 },
    { name: 'chips', calories: 300 },
    { name: 'ice cream', calories: 700 }
];

let total = foods.reduce((sum, item) => {
    return sum + item.calories;
}, 0); // 0 is initialised to sum.

console.log(total);


// Example 3
let foods = [
    { name: 'steak', calories: 800, carbs: 10, fat: 30 },
    { name: 'fruit', calories: 200, carbs: 20, fat: 0 },
    { name: 'salad', calories: 100, carbs: 0, fat: 5 },
    { name: 'chips', calories: 300, carbs: 10, fat: 10 },
    { name: 'ice cream', calories: 700, carbs: 20, fat: 20 }
];

let total = foods.reduce((buckets, item) => {
    buckets['calories'] += item.calories;
    buckets['carbs'] += item.carbs;
    buckets['fat'] += item.fat;
    return buckets;
});

console.log(total);
