const removeDuplicateObjects = (array) => {
    let unique_objs = [];
    array.forEach(item => {
        if (!containsObject(item, unique_objs)) {
            unique_objs.push(item);
        }
    });
    console.log(unique_objs);
    return unique_objs;
}

const containsObject = (obj, list) => {
    let i;
    for (i = 0; i < list.length; i++) {
        if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
            return true;
        }
    }
    return false;
}