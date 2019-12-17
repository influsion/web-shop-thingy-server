'use strict';

const pagesData = {
    "faq": {
        "explanation": {
            "_key_en": "Below are frequently asked questions, you may find the answer for yourself",
        },


        // "accordion": [
        //     {
        //         "id": "0",
        //         "question": "How can I order",
        //         "answer": "You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account. You can also easily make reorders afterwards by clicking the �reorder� button on any of your previously made orders. After clicking the reorder button the cart will open and you can change quantities or products."
        //     },
        //     {
        //         "id": "1",
        //         "question": "Why should I buy online?",
        //         "answer": "Speeding up the process. By ordering online you will you will get prices faster and you will be able to go through order confirmation and payment process much faster. This could save days of your time. Traceability: You will have easy access to all of your previous orders any time you want. Reordering:  you can make a re-order anytime based on your previous orders by only couple of clicks. This will save time and effort as you don�t need to go through all the documents and emails from the past."
        //     },
        //     {
        //         "id": "2",
        //         "question": "What should I do if the payment is not accepted?",
        //         "answer": "Please try again in a little while. If the payment is still not accepted, please verify your account balance. If everything is as it should, but you still can't make the payment, please contact hytest@hytest.fi notify us about the problem. We can manage the order manually."
        //     },
        //     {
        //         "id": "3",
        //         "question": "Can I cancel my order?",
        //         "answer": "If you want to cancel your order, please do so as soon as possible. If we have already processed your order, you need to contact us and return the product."
        //     },
        //     {
        //         "id": "4",
        //         "question": "Can I track my order?",
        //         "answer": "We will send you the tracking code of the shipment when the parcel has been sent."
        //     },
        //     {
        //         "id": "5",
        //         "question": "Shipping time?",
        //         "answer": "Shipping time will be confirmed on the order confirmation document."
        //     },
        //     {
        //         "id": "6",
        //         "question": "Shipping cost?",
        //         "answer": "Shipping costs are dependent on your location and products on your order. Some products need to be shipped in dry ice. These dry ice shipments have a slightly higher shipping fee. Our online store shows the shipping fee and shipping cost automatically on the checkout."
        //     },
        //     {
        //         "id": "7",
        //         "question": "WHY IS THERE A CHECKOUT LIMIT? / WHAT ARE ALL THE CHECKOUT LIMITS?",
        //         "answer": "Sample Store is a popular spot and gets lots of shoppers at a time. These limits are in place to make sure everyone has a good time trying and purchasing their products. So... Each member is entitled to only one (1) sample order every day. Each member is entitled to one (1) bundle of sample for each product. Your account must have sufficient points before you can checkout the sample products. Kindly clear all pending payments before another checkout."
        //     }
        // ],

        "accordion": {
            "0": {
                "id": {
                    "_key_en": "0"
                },
                "question": {
                    "_key_en": "How can I order"
                },
                "answer": {
                    "_key_en": "You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account. You can also easily make reorders afterwards by clicking the �reorder� button on any of your previously made orders. After clicking the reorder button the cart will open and you can change quantities or products."
                },
            },
            "1": {
                "id": {
                    "_key_en": "1"
                },
                "question": {
                    "_key_en": "Why should I buy online?"
                },
                "answer": {
                    "_key_en": "Speeding up the process. By ordering online you will you will get prices faster and you will be able to go through order confirmation and payment process much faster. This could save days of your time. Traceability: You will have easy access to all of your previous orders any time you want. Reordering:  you can make a re-order anytime based on your previous orders by only couple of clicks. This will save time and effort as you don�t need to go through all the documents and emails from the past."
                },
            },
            "2": {
                "id": {
                    "_key_en": "2"
                },
                "question": {
                    "_key_en": "What should I do if the payment is not accepted?"
                },
                "answer": {
                    "_key_en": "Please try again in a little while. If the payment is still not accepted, please verify your account balance. If everything is as it should, but you still can't make the payment, please contact hytest@hytest.fi notify us about the problem. We can manage the order manually."
                },
            },
            "3": {
                "id": {
                    "_key_en": "3"
                },
                "question": {
                    "_key_en": "Can I cancel my order?"
                },
                "answer": {
                    "_key_en": "If you want to cancel your order, please do so as soon as possible. If we have already processed your order, you need to contact us and return the product."
                },
            },
            "4": {
                "id": {
                    "_key_en": "4"
                },
                "question": {
                    "_key_en": "Can I track my order?"
                },
                "answer": {
                    "_key_en": "We will send you the tracking code of the shipment when the parcel has been sent."
                },
            },
            "5": {
                "id": {
                    "_key_en": "5"
                },
                "question": {
                    "_key_en": "Shipping time?"
                },
                "answer": {
                    "_key_en": "Shipping time will be confirmed on the order confirmation document."
                },
            },
            "6": {
                "id": {
                    "_key_en": "6"
                },
                "question": {
                    "_key_en": "Shipping cost?"
                },
                "answer": {
                    "_key_en": "Shipping costs are dependent on your location and products on your order. Some products need to be shipped in dry ice. These dry ice shipments have a slightly higher shipping fee. Our online store shows the shipping fee and shipping cost automatically on the checkout."
                },
            },
            "7": {
                "id": {
                    "_key_en": "7"
                },
                "question": {
                    "_key_en": "Why is there a checkout limit? / What are all the checkout limits?"
                },
                "answer": {
                    "_key_en": "Sample Store is a popular spot and gets lots of shoppers at a time. These limits are in place to make sure everyone has a good time trying and purchasing their products. So... Each member is entitled to only one (1) sample order every day. Each member is entitled to one (1) bundle of sample for each product. Your account must have sufficient points before you can checkout the sample products. Kindly clear all pending payments before another checkout."
                },
            }
        },
    },

    // "about": {

    // },

    "contact": {
        "send_us_a_message": {
            "_key_en": "Send us a message",
        },
        "get_office_info": {
            "_key_en": "Get office info",
        },
        "get_office_info_text": {
            "_key_en": "CRUX, established itself as a premium denim makers that focuses on providing styles that matches with today’s urban lifestyle in the Middle Eastern region since 2016.",
        },
        "get_office_info_address_title": {
            "_key_en": "Address",
        },
        "get_office_info_phone_title": {
            "_key_en": "Phone",
        },
        "get_office_info_email_title": {
            "_key_en": "Email",
        },
        "get_office_info_website_title": {
            "_key_en": "Website",
        },
        "office_info_address": {
            "_key_en": "st. Kanatnaya, 22, Business Center \"Albatros\", 2nd floor, Odessa, Ukraine",
            "_key_ru": "ул. Канатная, 22, БЦ «Альбатрос», 2-й этаж, г. Одесса, Украина",
        },
        "office_info_phone": {
            "_key_en": "+38 (098) 166 25 80",
        },
        "office_info_email": {
            "_key_en": "odessa@ithillel.ua",
        },
        "office_info_website": {
            "_key_en": "https://ithillel.ua",
        },
        "office_info_website_short": {
            "_key_en": "ithillel.ua",
        },


        "form_first_name_placeholder": {
            "_key_en": "First Name",
        },
        "form_last_name_placeholder": {
            "_key_en": "Last Name",
        },
        "form_email_placeholder": {
            "_key_en": "Email",
        },
        "form_website_placeholder": {
            "_key_en": "Website",
        },
        "form_subject_placeholder": {
            "_key_en": "Subject",
        },
        "form_text_placeholder": {
            "_key_en": "Type your message here...",
        },
        "form_send_email_button": {
            "_key_en": "Send Email",
        },








    },
}


module.exports = { pagesData };