// Array.some() 
// The some() method tests whether at least one element in the array passes the test implemented by the 
// provided function. It returns a Boolean value.
// This method returns false for any condition put on an empty array.

const array = [1, 2, 3, 4, 5];

console.log(array.some(element => {
    return element % 2 === 0;
}));

// Array.every() 
// The every() method tests whether all elements in the array pass the test implemented by the 
// provided function. It returns a Boolean value. 
// This method returns true for any condition put on an empty array.

console.log(array.every(element => {
    return element >= 0;
}));

