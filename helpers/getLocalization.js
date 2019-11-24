'use strict';

const { toType } = require('./../helpers/toType');


let getLocalization = function(localizationData, shortKey) {
    shortKey = shortKey.toLowerCase();
    const targetKey = '_key_' + shortKey;

    const circle = function nextIteration(obj, newObj) {
        for (const prop in obj) {
            if (Object.keys(obj[prop]).includes(targetKey)) {
                newObj[prop] = obj[prop][targetKey];
            } else {
                newObj[prop] = nextIteration(obj[prop], {})
            }
        }

        return newObj;
    };

    return circle(localizationData, {});
};

module.exports = { getLocalization };