my_array = [0, 1, 2, 3];

my_array.forEach((item, index, array) => {
    if (index === array.length - 1) {
        console.log(item);
    }
});