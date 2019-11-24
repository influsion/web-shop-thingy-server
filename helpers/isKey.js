const isKey = key => {
    const obj = Object.keys(key);
    obj[key] = true;

    return obj;
};

module.exports = { isKey };