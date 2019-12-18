'use strict';

const appSettings = {
    "language": {
        "default": "en",
        "available": [
            {
                "key": "en",
                "name": "English",
            },
            {
                "key": "ru",
                "name": "Русский",
            }
        ]
    },
    "currency": {
        "default": "uah",
        "available": [
            {
                "key": "uah",
                "name": "UAH",
                "rate": "1",
            },
            {
                "key": "usd",
                "name": "USD",
                "rate": 1/23.46913200,
            },
            {
                "key": "eur",
                "name": "EUR",
                "rate": 1/26.19624500,
            }
        ]
    }
};

module.exports = { appSettings };