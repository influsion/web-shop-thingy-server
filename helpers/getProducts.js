'use strict';

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

const { isKey } = require('./isKey');

const getProducts = function(productArr, params = {}) {
    params = { ...params };
    const keys = Object.keys(params);

    return productArr.filter(elem => {
        elem = { ...elem };

        const eachParam = key => {
            const is = isKey(key);
            const includedKey = is.id || is.name || is.price || is.category || is.subcategory || is.brand || is.origin || is.popular || is.new;

            if (!includedKey) {
                return;
            }

            const multipleKey = is.id || is.price || is.category || is.subcategory || is.brand || is.origin;
            const numericalKey = is.id || is.price;
            const searchKey = is.name;

            // Transformation
            if (multipleKey) {
                params[key] = [ params[key] ].flat();
            }

            // Transformation
            if (numericalKey) {
                params[key] = params[key].map(item => parseInt(item));
                elem[key] = parseInt(elem[key]);
            }

            // Comparison
            if (multipleKey && !is.price) {
                return params[key].includes(elem[key]);
            }

            // Comparison
            if (is.price) {
                const price = elem[key];
                const [ min, max ] = params[key];

                return min <= price && price <= max;
            }

            if (is.popular || is.new) {
                return `${params[key]}`.toLowerCase() === `${elem[key]}`.toLowerCase();
            }

            // Comparison
            if (searchKey) {
                //
            }
        };

        return keys
            .map(eachParam)
            .every(elem => elem === true);
    });
}

module.exports = { getProducts };