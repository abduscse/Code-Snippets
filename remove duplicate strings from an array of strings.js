var list = ['aa', 'ab', 'aa'];

const getUnique = (list) => {
    return Array.from(new Set(list));
};

var newList = getUnique(list);
console.log(newList);