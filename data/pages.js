'use strict';

const pagesData = {
	"faq": {
		"explanation": {
			"_key_en": "Below are frequently asked questions, you may find the answer for yourself",
			"_key_ru": "Ниже приведены часто задаваемые вопросы, вы можете среди них поискать интересующий вас ответ",
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
					"_key_en": "0",
					"_key_ru": "0",
				},
				"question": {
					"_key_en": "How can I order",
					"_key_ru": "Как мне осуществить заказ"
				},
				"answer": {
					"_key_en": "You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored in your account. You can also easily make reorders afterwards by clicking the \"Order\" button on any of your previously made orders. After clicking the button the cart will open and you can change item quantity or products.",
					"_key_ru": "Вы можете легко сделать заказ, используя нашу онлайн-платформу. Когда вы найдете нужный продукт, вы можете добавить его в корзину, войти в систему и пройти процесс заказа. После того, как заказ будет готов, вы получите сводку заказа на свою электронную почту. Сводка заказа также будет сохранена в вашей учетной записи. Вы также можете легко сделать повторные заказы, нажав кнопку «Заказать» на любом из ваших ранее сделанных заказов. После нажатия на кнопку откроется корзина, и вы сможете изменить количество или товар"
				},
			},
			"1": {
				"id": {
					"_key_en": "1",
					"_key_ru": "1",
				},
				"question": {
					"_key_en": "Why should I buy online?",
					"_key_ru": "Почему стоит покупать онлайн?",
				},
				"answer": {
					"_key_en": "Speeding up the process. By ordering online you will you will get prices faster and you will be able to go through order confirmation and payment process much faster. This could save days of your time. Traceability: You will have easy access to all of your previous orders any time you want. Reordering:  you can make a re-order anytime based on your previous orders by only couple of clicks. This will save time and effort as you don�t need to go through all the documents and emails from the past.",
					"_key_ru": "Чтобы ускорить процесс. Заказав онлайн, вы получите более быстрый доступ к ценам на товары и сможете намного быстрее пройти процесс подтверждения заказа и оплаты. Это может сэкономить дни вашего времени. Отслеживаемость: у вас будет легкий доступ ко всем вашим предыдущим заказам в любое время. Изменение порядка: вы можете сделать повторный заказ в любое время на основе ваших предыдущих заказов всего за пару кликов. Это сэкономит время и усилия, так как вам не нужно просматривать все прошлые документы и электронные письма."
				},
			},
			"2": {
				"id": {
					"_key_en": "2",
					"_key_ru": "2",
				},
				"question": {
					"_key_en": "What should I do if the payment is not accepted?",
					"_key_ru": "Что делать если платеж не принимается?"
				},
				"answer": {
					"_key_en": "Please try again in a little while. If the payment is still not accepted, please verify your account balance. If everything is as it should, but you still can't make the payment, please contact odessa@ithillel.ua notify us about the problem. We can manage the order manually.",
					"_key_ru": "Пожалуйста, попробуйте еще раз через некоторое время. Если платеж по-прежнему не принят, проверьте баланс своего счета. Если все в порядке, но вы все равно не можете произвести оплату, пожалуйста, свяжитесь с odessa@ithillel.ua и сообщите нам о проблеме. Мы можем управлять заказом вручную."
				},
			},
			"3": {
				"id": {
					"_key_en": "3",
					"_key_ru": "3",
				},
				"question": {
					"_key_en": "Can I cancel my order?",
					"_key_ru": "Могу ли я отменить мой заказ?"
				},
				"answer": {
					"_key_en": "If you want to cancel your order, please do so as soon as possible. If we have already processed your order, you need to contact us and return the product.",
					"_key_ru": "Если вы хотите отменить свой заказ, сделайте это как можно скорее. Если мы уже обработали ваш заказ, вам необходимо связаться с нами и вернуть товар."
				},
			},
			"4": {
				"id": {
					"_key_en": "4",
					"_key_ru": "4",
				},
				"question": {
					"_key_en": "Can I track my order?",
					"_key_ru": "Могу ли я отследить мой заказ?",
				},
				"answer": {
					"_key_en": "We will send you the tracking code of the shipment when the parcel has been sent.",
					"_key_ru": "Мы отправим вам код отслеживания посылки, когда посылка будет отправлена."
				},
			},
			"5": {
				"id": {
					"_key_en": "5",
					"_key_ru": "5",
				},
				"question": {
					"_key_en": "What is the usual order shipping time?",
					"_key_ru": "Каково обычное время доставки заказа?",
				},
				"answer": {
					"_key_en": "Shipping time will be confirmed on the order confirmation document.",
					"_key_ru": "Время доставки будет подтверждено в документе подтверждения заказа."
				},
			},
			"6": {
				"id": {
					"_key_en": "6",
					"_key_ru": "6",
				},
				"question": {
					"_key_en": "What is the shipping cost?",
					"_key_ru": "Какова цена доставки?",
				},
				"answer": {
					"_key_en": "Shipping costs are dependent on your location and products in your order. Some products require different types of packaging. They can add extra fee. Our online store shows the shipping fee and shipping cost automatically at checkout.",
					"_key_ru": "Стоимость доставки зависит от вашего местоположения и продуктов в вашем заказе. Некоторые продукты требуют разных видов упаковки. Они могут добавить дополнительную плату. Наш интернет-магазин показывает стоимость доставки и стоимость доставки автоматически при оформлении заказа."
				},
			},

		},
	},

	"contact": {
		"send_us_a_message": {
			"_key_en": "Send us an email",
			"_key_ru": "Отправьте нам письмо",
		},
		"get_office_info": {
			"_key_en": "Our office",
			"_key_ru": "Наш офис",
		},
		"get_office_info_text": {
			"_key_en": "Located in downtown Odessa, our office is in comfortable distance of all the major tourist attractions. Feel free to stop by!",
			"_key_ru": "Наш офис расположен в деловом центре Одессы, на удобном расстоянии от всех основных туристических достопримечательностей. Не стесняйтесь заходить!",
		},
		"get_office_info_address_title": {
			"_key_en": "Address",
			"_key_ru": "Адрес",
		},
		"get_office_info_phone_title": {
			"_key_en": "Phone",
			"_key_ru": "Номер телефона",
		},
		"get_office_info_email_title": {
			"_key_en": "Email",
			"_key_ru": "Эл. почта",
		},
		"get_office_info_website_title": {
			"_key_en": "Website",
			"_key_ru": "Вебсайт",
		},
		"office_info_address": {
			"_key_en": "st. Kanatnaya, 22, Business Center \"Albatros\", 2nd floor, Odessa, Ukraine",
			"_key_ru": "ул. Канатная, 22, БЦ «Альбатрос», 2-й этаж, г. Одесса, Украина",
		},
		"office_info_phone": {
			"_key_en": "+38 (098) 166 25 80",
			"_key_ru": "+38 (098) 166 25 80",
		},
		"office_info_email": {
			"_key_en": "odessa@ithillel.ua",
			"_key_ru": "odessa@ithillel.ua",
		},
		"office_info_website": {
			"_key_en": "https://ithillel.ua",
			"_key_ru": "https://ithillel.ua",
		},
		"office_info_website_short": {
			"_key_en": "ithillel.ua",
			"_key_ru": "ithillel.ua",
		},


		"form_first_name_placeholder": {
			"_key_en": "First Name",
			"_key_ru": "Имя",
		},
		"form_last_name_placeholder": {
			"_key_en": "Last Name",
			"_key_ru": "Фамилия",
		},
		"form_email_placeholder": {
			"_key_en": "Email",
			"_key_ru": "Эл. почта",
		},
		"form_website_placeholder": {
			"_key_en": "Website",
			"_key_ru": "Вебсайт",
		},
		"form_subject_placeholder": {
			"_key_en": "Subject",
			"_key_ru": "Тема письма",
		},
		"form_text_placeholder": {
			"_key_en": "Type your message here...",
			"_key_ru": "Введите ваше соообщение...",
		},
		"form_send_email_button": {
			"_key_en": "Send Email",
			"_key_ru": "Отправить эл. письмо",
		},
	},

	"about": {
		"someheaderonaboutpage": {
			"_key_en": "About the company",
			"_key_ru": "О компании",
		},
		"sometextonaboutpage": {
			"_key_en": "This wonderful project was founded by 4 programming enthusiasts in order to bring the bright magic of the cult of JavaScript into the world. 100% Certified Health Safe Products. We select only the highest quality and most innovative products for our customers. We create individual gift sets for each consumer with a wide selection of products. Our staff is constantly improving their qualifications and is trained by world leaders in product and sales industry. We know everything about our product range and recommend only the best products to you.",
			"_key_ru": "Сей чудесный проект был основан 4 энтузиастами программирования, дабы нести в мир светлую магию культа JavaScript. 100% сертифицированные товары, безопасные для здоровья. Мы отбираем только самую высококачественную и инновационную продукцию для наших клиентов. Мы формируем индивидуальные подарочные наборы под каждого потребителя с широким выбором продукции. Наш персонал постоянно повышает квалификацию и проходит тренинги у мировых лидеров индустрии по продукции и продажам. Мы знаем все о своем ассортименте и рекомендуем вам только лучшие товары.",
		},
		"the_right_people_for_your_project": {
			"_key_en": "the right people for your project",
			"_key_ru": "правильные люди для вашего проекта",
		},
		"meet_the_expert_team": {
			"_key_en": "Meet our expert team",
			"_key_ru": "Наши эксперты",
		},


		"experts": {
			"0": {
				"name": {
					"_key_en": "Oleksandr Barna",
					"_key_ru": "Александр Барна",
				},
				"position": {
					"_key_en": "Scope Specialist",
					"_key_ru": "Мастер области видимости",
				},
				"image": {
					"_key_en": "images/about/team/1.jpg",
					"_key_ru": "images/about/team/1.jpg",
				},
			},
			"1": {
				"name": {
					"_key_en": "Paul Mincho",
					"_key_ru": "Павел Минчо",
				},
				"position": {
					"_key_en": "Regular Expression Specialist",
					"_key_ru": "Мастер регулярных выражений",
				},
				"image": {
					"_key_en": "images/about/team/2.jpg",
					"_key_ru": "images/about/team/2.jpg",
				},
			},
			"2": {
				"name": {
					"_key_en": "Denys Aptikieiev",
					"_key_ru": "Денис Аптикеев",
				},
				"position": {
					"_key_en": "Special job specialist",
					"_key_ru": "Специалист по специальным работам",
				},
				"image": {
					"_key_en": "images/about/team/3.jpg",
					"_key_ru": "images/about/team/3.jpg",
				},
			},
			"3": {
				"name": {
					"_key_en": "Stanislav Zaborovets",
					"_key_ru": "Станислав Заборовец",
				},
				"position": {
					"_key_en": "Insert position text",
					"_key_ru": "Введите текст должности",
				},
				"image": {
					"_key_en": "images/about/team/4.jpg",
					"_key_ru": "images/about/team/4.jpg",
				},
			},
		},
	},
};


module.exports = {pagesData};