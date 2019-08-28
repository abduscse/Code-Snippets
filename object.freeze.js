const person = {
    name: 'abdus',
    email: 'abduscse@gmail.com',
    salary: 26000
};

Object.freeze(person);  // makes it immutable, but wont work on nested objects.

person.email = 'sattarcse@gmail.com';

console.log(person); // still shows 'abduscse@gmail.com'

// for nested objects we can write our own or use Deepfreeze or immutable-js

// to unfreeze use npm object-unfreeze.

/* 
 objectUnfreeze = require('object-unfreeze');
let person = {
        name: 'abdus',
        email: 'abduscse@gmail.com',
    };
 person = objectUnfreeze(person);
    person.email = 'sattarcse@gmail.com';
    console.log(person);
*/