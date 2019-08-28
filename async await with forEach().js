Array.prototype.forEach = function (callback) {
    // this represents our array
    for (let index = 0; index < this.length; index++) {
        // We call the callback for each entry
        callback(this[index], index, this);
    }
};

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const start = async () => {
    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
    await asyncForEach([1, 2, 3], async (num) => {
        await waitFor(50);
        console.log(num);
    });
    console.log('Done');
};

start();
