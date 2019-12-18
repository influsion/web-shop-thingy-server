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

const inRange = (itemPrice, priceRange) => {
    const rangeIsCorrect = isNaN(parseFloat(priceRange[0])) && isNaN(parseFloat(priceRange[1]));
    const chech = () => +itemPrice >= +priceRange[0] && +itemPrice <= priceRange[1];

    return rangeIsCorrect ? rangeIsCorrect : chech() ;
}

const getFilterConditions = (productArray, categoryOrSubcategory, priceRangeToFilter) => {
    const price_Range = priceRange();
    const brandsList = somethingList();
    const originList = somethingList();

    productArray.forEach(item => {
        const necessaryProduct = [item.category, item.subcategory].includes(categoryOrSubcategory);

        if (necessaryProduct) {
            price_Range.update(item.price);

            inRange(item.price, priceRangeToFilter) && brandsList.update(item.brand);
            inRange(item.price, priceRangeToFilter) && originList.update(item.origin);
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