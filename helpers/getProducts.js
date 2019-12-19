'use strict';

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

const { isKey } = require('./isKey');


const getProducts = function(productArr, params = {}, lang) {
    const keys = Object.keys(params);
    const isSearch = keys.includes('name');

    const productFiltering = () => {
        const data = productArr.filter(elem => {
            // elem = { ...elem };

            const eachParam = key => {
                const is = isKey(key);
                const includedKey = is.id || is.name || is.price || is.category || is.subcategory || is.brand || is.origin || is.popular || is.new;

                if (!includedKey) {
                    return;
                }

                const multipleKey = is.id || is.price || is.category || is.subcategory || is.brand || is.origin;
                const numericalKey = is.id || is.price;
                const searchQuery = is.name;

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
                if (searchQuery) {
                    //
                }
            };

            return keys
                .map(eachParam)
                .every(elem => elem === true);
        });

        const mappedData = data.map(elem => {
            const translate = obj => obj[`_key_${lang}`];

            return {
                ...elem,
                name: translate(elem.name),
                description: translate(elem.description),
            };
        });

        return mappedData;
    };

    const productSearch = () => {
        const { quantityOfReturned = null, name: searchQuerySourse } = params;
        let searchQuery = searchQuerySourse.trim().replace(/\s+/, ' ');
        const re = new RegExp(searchQuery, 'gi');

        const isCorrectSearchQuery = new RegExp(/^[^@#$%&|*^()=+\\\[\]/]+$/).test(searchQuery);

        const processSearchQuery = () => {
            const mappedData = productArr.map(elem => {
                const translate = obj => obj[`_key_${lang}`];

                return {
                    ...elem,
                    name: translate(elem.name),
                    description: translate(elem.description),
                };
            });

            return mappedData
                .map(elem => {
                    const { name } = elem;

                    return {
                        searchQuery,
                        searchQueryPosition: name.search(re),
                        product: elem,
                    }
                })
                .filter(({ searchQueryPosition }) => +searchQueryPosition !== -1)
                .sort((a, b) => a.searchQueryPosition - b.searchQueryPosition)
                .slice(0, quantityOfReturned ? quantityOfReturned : undefined)
                .map(({ product }) => {
                    const [ matchFound ] = re.exec(product.name);
                    product.searchedName = product.name.replace(re, `<mark>${matchFound}</mark>`);
                    return product;
                });
        };

        return isCorrectSearchQuery ? processSearchQuery() : [];
    };

    return isSearch ? productSearch() : productFiltering() ;
}

module.exports = { getProducts };