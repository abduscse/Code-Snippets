async.each(data_array, (element, cb) => {
    cb(null);
}, success => {
    reply(success)
});