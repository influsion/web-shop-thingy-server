'use strict';

const getCategoriesStructure = function(productArr) {
    productArr = [ ...productArr ];

    const counter = {
        entries: {},
        increase(str) {
            this.entries[str] = ++this.entries[str] || 1;

            return this.entries[str];
        },
    };

    const structureArr = [];

    productArr.forEach(function({category, subcategory}, i, arr) {
        const catObjIndex = structureArr.findIndex(obj => obj.value === category);

        const subcategoryObjTemplate = subcategory => ({
            value: subcategory,
            productsQuantity: counter.increase(subcategory),
        });

        if (catObjIndex < 0) {
            structureArr.push({
                value: category,
                productsQuantity: counter.increase(category),
                subcategories: [
                    subcategoryObjTemplate(subcategory),
                ],
            })
        } else {
            structureArr[catObjIndex].productsQuantity = counter.increase(category);

            const { subcategories } = structureArr[catObjIndex];
            const subCatObjIndex = subcategories.findIndex(obj => obj.value === subcategory);

            if (subCatObjIndex < 0) {
                subcategories.push(subcategoryObjTemplate(subcategory));
            } else {
                subcategories[subCatObjIndex].productsQuantity = counter.increase(subcategory);
            }
        }
    });

    return structureArr;
};

module.exports = { getCategoriesStructure };