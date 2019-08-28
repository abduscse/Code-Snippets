// 1. Search an element in set, Sets are faster,
let arr = [], set = new Set(), n = 1000000;
for (let i = 0; i < n; i++) {
    arr.push(i);
    set.add(i);
}
let result;
console.time('Array_search');
result = arr.indexOf(123123) !== -1;
console.timeEnd('Array_search');
console.time('Set_search');
result = set.has(123123);
console.timeEnd('Set_search');

// 2. add an element, set is faster
console.time('Array_add');
arr.push(n);
console.timeEnd('Array_add');
console.time('Set_add');
set.add(n);
console.timeEnd('Set_add');

// 3. Delete an element, set is faster
const deleteFromArr = (arr, item) => {
    let index = arr.indexOf(item);
    return index !== -1 && arr.splice(index, 1);
};
console.time('Array_delete');
deleteFromArr(arr, n);
console.timeEnd('Array_delete');
console.time('Set_delete');
set.delete(n);
console.timeEnd('Set_delete');

// Case 1: removing duplicate values from an array
const duplicateCollection = ['A', 'B', 'B', 'C', 'D', 'B', 'C'];
// If you want to turn the array into a Set
let uniqueCollection = new Set(duplicateCollection);
console.log(uniqueCollection) // Result: Set(4) {"A", "B", "C", "D"}
// If you want to keep your values in an array
uniqueCollection = [...new Set(duplicateCollection)];
console.log(uniqueCollection) // Result: ["A", "B", "C", "D"]