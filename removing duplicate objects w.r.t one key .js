var uniq = {}
var arr  = [{"id":"1"},{"id":"1"},{"id":"2"}]
var arrFiltered = arr.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));
console.log('arrFiltered', arrFiltered)