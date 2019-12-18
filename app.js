const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const qs = require('qs');
const qsDefaultParams = {
    arrayFormat: 'indices',
    format : 'RFC3986',
};

// const { products: arrOfproducts } = require('./data/products.js');
const { products: arrOfproducts } = require('./data/products-copy');
const { localization } = require('./data/localization.js');
const { getProducts } = require('./helpers/getProducts.js');
const { getCategoriesStructure } = require('./helpers/getCategoriesStructure.js');
const { getLocalization } = require('./helpers/getLocalization.js');
const { getFilterConditions } = require('./helpers/getFilterConditions.js');
const { appSettings } = require('./data/appSettings');
const { pagesData } = require('./data/pages');

const filterProducts = getProducts.bind(null, arrOfproducts);
const getLocal = getLocalization.bind(null, localization);
// const categoriesStructure = getCategoriesStructure.bind(null, filterProducts());

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json());

app.listen(PORT);


console.log('Run server');

app.get('/settings', cors(), function(req, res) {
    const settingsJSON = JSON.stringify(appSettings);

    res.status(200).send(settingsJSON);
});

app.get('/products/:lang', cors(), function(req, res) {
    const { params: { lang }, query } = req;

    const filteredProducts = filterProducts(query, lang);
    const filteredProductsJSON = JSON.stringify(filteredProducts);

    res.status(200).send(filteredProductsJSON);
});

app.get('/localization/:lang', cors(), function(req, res) {
    const { params: { lang } } = req;

    console.log({ lang });
    const localizationJSON = JSON.stringify(getLocal(lang));

    res.status(200).send(localizationJSON);
});

app.get('/categoriesstructure/:lang', cors(), function(req, res) {
    const { params: { lang } } = req;

    const categoriesStructure = getCategoriesStructure(filterProducts({}, lang));
    const categoriesStructureJSON = JSON.stringify(categoriesStructure);

    res.status(200).send(categoriesStructureJSON);
});

app.get('/filterconditions', cors(), function(req, res) {
    const { query, query: { categoryOrSubcategory = '', price = [] } } = req;

    if (categoryOrSubcategory) {
        const filterConditions = getFilterConditions(filterProducts({}, 'en'), categoryOrSubcategory, price);
        const filterConditionsJSON = JSON.stringify(filterConditions)

        res.status(200).send(filterConditionsJSON);
    } else {
        res.status(400);
    }
});

app.get('/page/:page/:lang', cors(), function(req, res) {
    const { params: { page, lang } } = req;

    console.log(page, lang);

    // res.status(400)

    const sourceData = pagesData[page] || {};
    const data = getLocalization(sourceData, lang);

    res.status(200).send(JSON.stringify(data));
});

app.post('/subscribe', cors(), function (req, res) {
    const email = req.body;
    console.log(email);
});

app.post('/contacform', cors(), function (req, res) {
    const formData = req.body;
    console.log(formData);
});