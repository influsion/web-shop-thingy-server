'use strict';

const priceRange = function() {
    let min = Infinity;
    let max = -Infinity;

    return {
        update(price) {
            price = parseInt(price);

            if (min > price) {
                min = price;
            }

            if (max < price) {
                max = price;
            }
        },

        get() {
            return [min, max];
        },
    }
};

const somethingList = function() {
    const list = [];

    return {
        update(something) {
            !list.includes(something) && list.push(something);
        },

        get() {
            return list;
        },
    }
};

const getFilterConditions = (productArray, categoryOrSubcategory) => {
    const price_Range = priceRange();
    const brandsList = somethingList();
    const originList = somethingList();

    productArray.forEach(item => {
        const necessaryProduct = [item.category, item.subcategory].includes(categoryOrSubcategory);

        if (necessaryProduct ) {
            price_Range.update(item.price);
            brandsList.update(item.brand);
            originList.update(item.origin);
        }
    });

    return {
        priceRange: price_Range.get(),
        brands: brandsList.get(),
        origin: originList.get(),
    }
};

// example: getFilterConditions(filterProducts(), "appliances")

module.exports = { getFilterConditions };