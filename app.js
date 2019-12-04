const express = require('express');
const cors = require('cors');
const qs = require('qs');
const qsDefaultParams = {
    arrayFormat: 'indices',
    format : 'RFC3986',
};

const { products: arrOfproducts } = require('./data/products.js');
const { localization } = require('./data/localization.js');
const { getProducts } = require('./helpers/getProducts.js');
const { getCategoriesStructure } = require('./helpers/getCategoriesStructure.js');
const { getLocalization } = require('./helpers/getLocalization.js');
const { getFilterConditions } = require('./helpers/getFilterConditions.js');
const { faqData } = require('./data/faq.js');

const filterProducts = getProducts.bind(null, arrOfproducts);
const getLocal = getLocalization.bind(null, localization);
const categoriesStructure = getCategoriesStructure.bind(null, filterProducts());

const app = express();
const PORT = 3000;
// app.use(cors());
app.listen(PORT);


console.log('Run server');

app.get('/products', cors(), function(req, res) {
    const { query } = req;

    const filteredProducts = filterProducts(query);
    console.log('products quantity: ', Object.keys(filteredProducts).length);

    console.log('req.query: ', req.query);
    const filteredProductsJSON = JSON.stringify(filterProducts(query))

    res.status(200).send(filteredProductsJSON);
});

app.get('/localization/:lang', cors(), function(req, res) {
    const { params: { lang = 'en' } } = req;

    console.log({ lang });
    const localizationJSON = JSON.stringify(getLocalization.call(null, localization, lang));

    res.status(200).send(localizationJSON);
});

app.get('/categoriesstructure', cors(), function(req, res) {
    const categoriesStructureJSON = JSON.stringify(categoriesStructure());

    res.status(200).send(categoriesStructureJSON);
});

app.get('/filterconditions/:categoryOrSubcategory', cors(), function(req, res) {
    const { params: { categoryOrSubcategory = null } } = req;

    if (categoryOrSubcategory) {
        const filterConditions = getFilterConditions(filterProducts(), categoryOrSubcategory);;
        const filterConditionsJSON = JSON.stringify(filterConditions)

        res.status(200).send(filterConditionsJSON);
    } else {
        res.status(400);
    }
});

app.get('/faq', cors(), function(req, res) {
    const faqDataJSON = JSON.stringify(faqData);

    res.status(200).send(faqDataJSON);
});