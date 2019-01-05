var arr  = [{"id":"1"},{"id":"1"},{"id":"2"}];

const getUniqueObjects = (list, key) => {
    var uniq = {}
    return list.filter(obj => !uniq[obj[key]] && (uniq[obj[key]] = true));
};

console.log(getUniqueObjects(arr,'id'));
