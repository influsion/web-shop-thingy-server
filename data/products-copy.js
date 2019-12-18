'use strict';

const products = [
	{
		"id": "1",
		"name": {
			"_key_en": "Acer Nitro 5 AN515-52-54KW laptop",
			"_key_ru": "Ноутбук Acer Nitro 5 AN515-52-54KW",
		},
		"image": "./images/products/AN515-52-54KW.jpg",
		"description": {
			"_key_en": "15.6″ IPS screen (1920x1080) Full HD, matte / Intel Core i5-8300H (2.3 - 4.0 Ghz) / RAM 8 GB / HDD 1 ТБ + SSD 128 GB / nVidia GeForce GTX 1060, 6 GB / no optical drive / LAN / Wi-Fi / Bluetooth / webcam / без ОС / 2.7 kg / black",
			"_key_ru": "Экран 15.6″ IPS (1920x1080) Full HD, матовый / Intel Core i5-8300H (2.3 - 4.0 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 128 ГБ / nVidia GeForce GTX 1060, 6 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.7 кг / черный",
		},
		"price": "25555",
		"category": "computers-notebooks",
		"subcategory": "notebooks",
		"brand": "acer",
		"origin": "china",
		"new": false,
		"popular": false
	},
	{
		"id": "2",
		"name": {
			"_key_en": "HP 255 G7 (7DF20EA) Dark Ash laptop",
			"_key_ru": "Ноутбук HP 255 G7 (7DF20EA) Dark Ash",
		},
		"image": "./images/products/hp_6bn09ea.jpg",
		"description": {
			"_key_en": "15.6″ screen (1920x1080) Full HD, matte / AMD Ryzen 5 2500U (2.0 - 3.6 Ghz) / RAM 8 GB / SSD 256 GB / AMD Radeon Vega 8 / no optical drive / LAN / Wi-Fi / Bluetooth / webcam / DOS / 1.78 kg / black",
			"_key_ru": "Экран 15.6″ (1920x1080) Full HD, матовый / AMD Ryzen 5 2500U (2.0 - 3.6 ГГц) / RAM 8 ГБ / SSD 256 ГБ / AMD Radeon Vega 8 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.78 кг / черный"
		},
		"price": "10499",
		"category": "computers-notebooks",
		"subcategory": "notebooks",
		"brand": "hp",
		"origin": "china",
		"new": false,
		"popular": true
	},
	{
		"id": "3",
		"name": {
			"_key_en": "Dell Inspiron 3582 (I3582C54H5NIL-BK) Black laptop",
			"_key_ru": "Ноутбук Dell Inspiron 3582 (I3582C54H5NIL-BK) Black",
		},
		"image": "./images/products/Dell_Inspiron_3582.jpg",
		"description": {
			"_key_en": "15.6″ TN screen (1366x768) WXGA HD, glossy anti-glare / Intel Celeron N4000 (1.1 - 2.6 Ghz) / RAM 4 GB / HDD 500 GB / Intel UHD Graphics 600 / no optical drive / Wi-Fi / Bluetooth / webcam / Linux / 2.28 kg / black",
			"_key_ru": "Экран 15.6″ TN (1366x768) WXGA HD, глянцевый с антибликовым покрытием / Intel Celeron N4000 (1.1 - 2.6 ГГц) / RAM 4 ГБ / HDD 500 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / веб-камера / Linux / 2.28 кг / черный"
		},
		"price": "5555",
		"category": "computers-notebooks",
		"subcategory": "notebooks",
		"brand": "dell",
		"origin": "china",
		"new": false,
		"popular": true
	},
	{
		"id": "4",
		"name": {
			"_key_en": "Asus X509FL-BQ053 (90NB0N12-M01880) Slate Grey laptop",
			"_key_ru": "Ноутбук Asus X509FL-BQ053 (90NB0N12-M01880) Slate Grey",
		},
		"image": "./images/products/Asus-X509FL-BQ053.jpg",
		"description": {
			"_key_en": "15.6″ IPS screen (1920x1080) Full HD, matte / Intel Core i5-8265U (1.6 - 3.9 Ghz) / RAM 8 GB / SSD 256 GB / nVidia GeForce MX250, 2 GB / no optical drive / Wi-Fi / Bluetooth / webcam / без ОС / 1.9 kg / grey",
			"_key_ru": "Экран 15.6″ IPS (1920x1080) Full HD, матовый / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce MX250, 2 ГБ / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.9 кг / серый"
		},
		"price": "16777",
		"category": "computers-notebooks",
		"subcategory": "notebooks",
		"brand": "asus",
		"origin": "china",
		"new": true,
		"popular": false
	},
	{
		"id": "5",
		"name": {
			"_key_en": "Lenovo Tab E7 TB-7104I 3G 1/16GB Slate Black (ZA410066UA) tablet",
			"_key_ru": "Планшет Lenovo Tab E7 TB-7104I 3G 1/16GB Slate Black (ZA410066UA)",
		},
		"image": "./images/products/Lenovo-ZA410066UA.jpg",
		"description": {
			"_key_en": "7″ TN screen (1024x600) MultiTouch / MediaTek MT8321A/D (1.3 Ghz) / RAM 1 GB / 16 GB of integrated memory + microSD / 3G / Wi-Fi / Bluetooth 4.0 / main camera 2 Мп, frontal - 0.3 Мп / A-GPS / Android 8.0 (Oreo Go edition) / 272 g / black",
			"_key_ru": "Экран 7″ TN (1024x600) MultiTouch / MediaTek MT8321A/D (1.3 ГГц) / RAM 1 ГБ / 16 ГБ встроенной памяти + microSD / 3G / Wi-Fi / Bluetooth 4.0 / основная камера 2 Мп, фронтальная - 0.3 Мп / A-GPS / Android 8.0 (Oreo Go edition) / 272 г / черный"
		},
		"price": "1999",
		"category": "computers-notebooks",
		"subcategory": "tablets",
		"brand": "lenovo",
		"origin": "china",
		"new": false,
		"popular": false
	},
	{
		"id": "6",
		"name": {
			"_key_en": "Samsung Galaxy Tab S5e 10.5 (2019) 64GB LTE Black (SM-T725NZKASEK) tablet",
			"_key_ru": "Планшет Samsung Galaxy Tab S5e 10.5 (2019) 64GB LTE Black (SM-T725NZKASEK)",
		},
		"image": "./images/products/SM-T725NZKASEK.jpg",
		"description": {
			"_key_en": "Super AMOLED 10.5″ screen (2560x1600) capacitive MultiTouch / Qualcomm Snapdragon 670 (2x2.0 Ghz + 6x1.7 Ghz) / RAM 4 GB / 64 GB of integrated memory + microSD / 3G / 4G / Wi-Fi / Bluetooth 5.0 / main camera 13 Мп, frontal - 8 Мп / GPS / GLONASS / Android 9.0 (Pie) / 400 g / black",
			"_key_ru": "Экран 10.5″ Super AMOLED (2560x1600) емкостный MultiTouch / Qualcomm Snapdragon 670 (2x2.0 ГГц + 6x1.7 ГГц) / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD / 3G / 4G / Wi-Fi / Bluetooth 5.0 / основная камера 13 Мп, фронтальная - 8 Мп / GPS / ГЛОНАСС / Android 9.0 (Pie) / 400 г / черный"
		},
		"price": "15999",
		"category": "computers-notebooks",
		"subcategory": "tablets",
		"brand": "samsung",
		"origin": "korea",
		"new": false,
		"popular": true
	},
	{
		"id": "7",
		"name": {
			"_key_en": "Huawei MediaPad T5 10″ 4/64GB LTE Black (AGS2-L09) tablet",
			"_key_ru": "Планшет Huawei MediaPad T5 10″ 4/64GB LTE Black (AGS2-L09)",
		},
		"image": "./images/products/Huawei-AGS2-L09.jpg",
		"description": {
			"_key_en": "10.1″ IPS screen (1920x1200) MultiTouch / HiSilicon Kirin 659 (2.36 Ghz + 1.7 Ghz) / RAM 4 GB / 64 GB of integrated memory + microSD / 3G / LTE / Wi-Fi / Bluetooth 4.2 / main camera 5 Мп, frontal 2 Мп / GPS / GLONASS / dual-SIM support / Android 8.0 (EMUI) / 465 g / black",
			"_key_ru": "Экран 10.1″ IPS (1920x1200) MultiTouch / HiSilicon Kirin 659 (2.36 ГГц + 1.7 ГГц) / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD / 3G / LTE / Wi-Fi / Bluetooth 4.2 / основная камера 5 Мп, фронтальная 2 Мп / GPS / ГЛОНАСС / поддержка 2-х СИМ-карт / Android 8.0 (EMUI) / 465 г / черный"
		},
		"price": "7999",
		"category": "computers-notebooks",
		"subcategory": "tablets",
		"brand": "huawei",
		"origin": "china",
		"new": false,
		"popular": false
	},
	{
		"id": "8",
		"name": {
			"_key_en": "Assistant AP-108 Cetus Black tablet",
			"_key_ru": "Планшет Assistant AP-108 Cetus Black",
		},
		"image": "./images/products/Assistant-AP-108.jpg",
		"description": {
			"_key_en": "10″ IPS screen (1920x1200) Multi-Touch / MediaTek MT6750 (1.5 Ghz) / RAM 2 GB / 32 GB of integrated memory + поддержка microSD / 3G / LTE / Wi-Fi / Bluetooth / main camera 5 Мп, frontal - 2 Мп / GPS / dual-SIM support / Android 8.0 (Oreo) / 520 g / black",
			"_key_ru": "Экран 10″ IPS (1920x1200) Multi-Touch / MediaTek MT6750 (1.5 ГГц) / RAM 2 ГБ / 32 ГБ встроенной памяти + поддержка microSD / 3G / LTE / Wi-Fi / Bluetooth / основная камера 5 Мп, фронтальная - 2 Мп / GPS / поддержка 2-х СИМ-карт / Android 8.0 (Oreo) / 520 г / черный"
		},
		"price": "3999",
		"category": "computers-notebooks",
		"subcategory": "tablets",
		"brand": "assistance",
		"origin": "china",
		"new": false,
		"popular": false
	},
	{
		"id": "9",
		"name": {
			"_key_en": "PocketBook 641 Aqua 2 Blue Black (PB641-A-CIS) tablet",
			"_key_ru": "Планшет PocketBook 641 Aqua 2 Blue Black (PB641-A-CIS)",
		},
		"image": "./images/products/PocketBook641Aqua2.jpg",
		"description": {
			"_key_en": "Display diagonal: 6″ / Amount of shades of grey: 16 / Тип матрицы: E Ink Carta / Resolution: 1024х758 / Integrated memory: 8 GB / Вес: 180 g",
			"_key_ru": "Диагональ дисплея: 6″ / Количество градаций серого: 16 / Тип матрицы: E Ink Carta / Разрешение: 1024х758 / Встроенная память: 8 ГБ / Вес: 180 г"
		},
		"price": "3599",
		"category": "computers-notebooks",
		"subcategory": "e-books",
		"brand": "pocket-book",
		"origin": "switzerland",
		"new": true,
		"popular": false
	},
	{
		"id": "10",
		"name": {
			"_key_en": "Pocketbook 627 Touch Lux4 Obsidian Black PB627-H-CIS eBook",
			"_key_ru": "Электронная книга Pocketbook 627 Touch Lux4 Obsidian Black PB627-H-CIS",
		},
		"image": "./images/products/Pocketbook627TouchLux4.jpg",
		"description": {
			"_key_en": "Display diagonal: 6″ / Amount of shades of grey: 16 / Тип матрицы: E Ink Carta HD / Resolution: 1024х758 / Integrated memory: 8 GB / Вес: 155 g",
			"_key_ru": "Диагональ дисплея: 6″ /  Количество градаций серого: 16 / Тип матрицы: E Ink Carta HD / Разрешение: 1024х758 / Встроенная память: 8 ГБ / Вес: 155 г"
		},
		"price": "4016",
		"category": "computers-notebooks",
		"subcategory": "e-books",
		"brand": "pocket-book",
		"origin": "switzerland",
		"new": true,
		"popular": false
	},
	{
		"id": "11",
		"name": {
			"_key_en": "ONYX BOOX Note eBook",
			"_key_ru": "Электронная книга ONYX BOOX Note",
		},
		"image": "./images/products/ONYX-BOOX-Note.jpg",
		"description": {
			"_key_en": "Display diagonal: 10.3″ / Тип матрицы: E Ink Mobius Carta / Resolution: 1872x1404 / Integrated memory: 32 GB / Вес: 325 g",
			"_key_ru": "Диагональ дисплея: 10.3″ / Тип матрицы: E Ink Mobius Carta / Разрешение: 1872x1404 / Встроенная память: 32 ГБ / Вес: 325 г"
		},
		"price": "18999",
		"category": "computers-notebooks",
		"subcategory": "e-books",
		"brand": "onyx-boox",
		"origin": "china",
		"new": true,
		"popular": true
	},
	{
		"id": "12",
		"name": {
			"_key_en": "Amazon Kindle All-new 10th Gen. (2019) White eBook",
			"_key_ru": "Электронная книга Amazon Kindle All-new 10th Gen. (2019) White",
		},
		"image": "./images/products/Amazon-Kindle-All-new10th-Gen.jpg",
		"description": {
			"_key_en": "Сенсорный экран с подсветкой 6″ | Pixel density 167 PPI | Memory 4 Gb | Wi-Fi | Book formats: Kindle (AZW), TXT, PDF, unprotected MOBI, PRC natively, HTML, DOC, DOCX (требуется конвертация) | microUSB | Размер: 160 x 113 x 8.7 мм, Вес: 174 g | White",
			"_key_ru": "Сенсорный экран с подсветкой 6″ | Плотность пикселей 167 PPI | Память 4 Gb | Wi-Fi | Форматы книг: Kindle (AZW), TXT, PDF, unprotected MOBI, PRC natively, HTML, DOC, DOCX (требуется конвертация) | microUSB | Размер: 160 x 113 x 8.7 мм, Вес: 174 г | Белый"
		},
		"price": "2668",
		"category": "computers-notebooks",
		"subcategory": "e-books",
		"brand": "amazon-kindle",
		"origin": "usa",
		"new": false,
		"popular": false
	},
	{
		"id": "13",
		"name": {
			"_key_en": "LG 43UK6300PLB TV",
			"_key_ru": "Телевизор LG 43UK6300PLB",
		},
		"image": "./images/products/LG43UK6300PLB.jpg",
		"description": {
			"_key_en": "Display diagonal: 43″ / Resolution 3840x2160 / Digital tuner ranges: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 / Smart-платформа WebOS 4.0 / Refresh rate 60 Гц",
			"_key_ru": "Диагональ дисплея: 43″ / Разрешение 3840x2160 / Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 / Smart-платформа WebOS 4.0 / Частота развертки панели 60 Гц"
		},
		"price": "11999",
		"category": "phones-tv-and-electronics",
		"subcategory": "tv",
		"brand": "lg",
		"origin": "korea",
		"new": true,
		"popular": false
	},
	{
		"id": "14",
		"name": {
			"_key_en": "Samsung QE55Q67RAUXUA TV",
			"_key_ru": "Телевизор Samsung QE55Q67RAUXUA",
		},
		"image": "./images/products/samsung_qe55q67.jpg",
		"description": {
			"_key_en": "Display diagonal: 55″/ Resolution 3840x2160 / Digital tuner ranges: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 / Smart-платформа Tizen",
			"_key_ru": "Диагональ дисплея: 55″/ Разрешение 3840x2160 / Диапазоны цифрового тюнера: DVB-T, DVB-C, DVB-S, DVB-S2, DVB-T2 / Smart-платформа Tizen"
		},
		"price": "31999",
		"category": "phones-tv-and-electronics",
		"subcategory": "tv",
		"brand": "samsung",
		"origin": "korea",
		"new": false,
		"popular": true
	},
	{
		"id": "15",
		"name": {
			"_key_en": "Philips FHD 32PFS4132/12 TV",
			"_key_ru": "Телевизор Philips FHD 32PFS4132/12",
		},
		"image": "./images/products/philips_32pfs4132_12.jpg",
		"description": {
			"_key_en": "Display diagonal: 32 / Resolution 1920x1080 / Digital tuner ranges DVB-T, DVB-C ,DVB-S, DVB-S2, DVB-T2 / Smart-платформа: Нет / Refresh rate 50 Гц / Страна регистрации бренда Нидерланды",
			"_key_ru": "Диагональ дисплея: 32 / Разрешение 1920x1080 / Диапазоны цифрового тюнера DVB-T, DVB-C ,DVB-S, DVB-S2, DVB-T2 / Smart-платформа: Нет / Частота развертки панели 50 Гц / Страна регистрации бренда Нидерланды"
		},
		"price": "5499",
		"category": "phones-tv-and-electronics",
		"subcategory": "tv",
		"brand": "philips",
		"origin": "nederland",
		"new": true,
		"popular": false
	},
	{
		"id": "16",
		"name": {
			"_key_en": "Kivi 40FB50BU/BR Grey TV",
			"_key_ru": "Телевизор Kivi 40FB50BU/BR Grey",
		},
		"image": "./images/products/kivi_40fb50bu.jpg",
		"description": {
			"_key_en": "Display diagonal: 40″ / Resolution 1920x1080 / Digital tuner ranges DVB-T, DVB-C, DVB-T2 / Refresh rate: 60 Гц",
			"_key_ru": "Диагональ дисплея: 40″ / Разрешение 1920x1080 / Диапазоны цифрового тюнера DVB-T, DVB-C, DVB-T2 / Частота развертки панели: 60 Гц"
		},
		"price": "5599",
		"category": "phones-tv-and-electronics",
		"subcategory": "tv",
		"brand": "kivi",
		"origin": "ukraine",
		"new": false,
		"popular": false
	},
	{
		"id": "17",
		"name": {
			"_key_en": "Samsung Galaxy M30s 4/64GB Gradation Blue phone",
			"_key_ru": "Мобильный телефон Samsung Galaxy M30s 4/64GB Gradation Blue",
		},
		"image": "./images/products/samsung_galaxy_m30s.jpg",
		"description": {
			"_key_en": "Screen (6.4″, Super AMOLED, 2340х1080) / Samsung Exynos 9611 (4 x 2.3 Ghz + 4 x 1.7 Ghz) / triple main camera: 48 Мп + 8 Мп + 5 Мп, frontal 16 Мп / RAM 4 GB / 64 GB of integrated memory + microSD (до 512 ГБ) / 3G / LTE / GPS / GLONASS / BDS / Galileo / dual-SIM support (Nano-SIM) / Android 9.0 (Pie) / 6000 mA*h",
			"_key_ru": "Экран (6.4″, Super AMOLED, 2340х1080) / Samsung Exynos 9611 (4 x 2.3 ГГц + 4 x 1.7 ГГц) / тройная основная камера: 48 Мп + 8 Мп + 5 Мп, фронтальная 16 Мп / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD (до 512 ГБ) / 3G / LTE / GPS / ГЛОНАСС / BDS / Galileo / поддержка 2х SIM-карт (Nano-SIM) / Android 9.0 (Pie) / 6000 мА*ч"
		},
		"price": "6999",
		"category": "phones-tv-and-electronics",
		"subcategory": "phones",
		"brand": "samsung",
		"origin": "korea",
		"new": false,
		"popular": true
	},
	{
		"id": "18",
		"name": {
			"_key_en": "Meizu Note 9 4/64GB Blue phone",
			"_key_ru": "Мобильный телефон Meizu Note 9 4/64GB Blue",
		},
		"image": "./images/products/meizu_note_9_4_64gb.jpg",
		"description": {
			"_key_en": "Screen (6.2″, 2244x1080)/ Qualcomm Snapdragon 675 (2.0 Ghz)/ double main camera: 48 Мп + 5 Мп, frontal camera: 20 Мп/ RAM 4 ГБ/ 64 GB of integrated memory/ 3G/ LTE/ GPS/ dual-SIM support (Nano-SIM)/ Android 9.0 (Pie) / 4000 mA*h",
			"_key_ru": "Экран (6.2″, 2244x1080)/ Qualcomm Snapdragon 675 (2.0 ГГц)/ двойная основная камера: 48 Мп + 5 Мп, фронтальная камера: 20 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie) / 4000 мА*ч"
		},
		"price": "4999",
		"category": "phones-tv-and-electronics",
		"subcategory": "phones",
		"brand": "meizu",
		"origin": "china",
		"new": false,
		"popular": false
	},
	{
		"id": "19",
		"name": {
			"_key_en": "Xiaomi Redmi Note 8 4/64GB Neptune Blue phone",
			"_key_ru": "Мобильный телефон Xiaomi Redmi Note 8 4/64GB Neptune Blue",
		},
		"image": "./images/products/xiaomi_redmi_note_8_4_64GB.jpg",
		"description": {
			"_key_en": "Screen (6.3″, IPS, 2340x1080)/ Qualcomm Snapdragon 665 (2.0 Ghz)/ quad main camera: 48 Мп + 8 Мп + 2 Мп + 2 Мп, frontal camera: 13 Мп/ RAM 4 ГБ/ 64 GB of integrated memory + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ dual-SIM support (Nano-SIM)/ Android 9.0 (Pie) / 4000 mA*h",
			"_key_ru": "Экран (6.3″, IPS, 2340x1080)/ Qualcomm Snapdragon 665 (2.0 ГГц)/ квадро основная камера: 48 Мп + 8 Мп + 2 Мп + 2 Мп, фронтальная камера: 13 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie) / 4000 мА*ч"
		},
		"price": "4549",
		"category": "phones-tv-and-electronics",
		"subcategory": "phones",
		"brand": "xiaomi",
		"origin": "china",
		"new": false,
		"popular": false
	},
	{
		"id": "20",
		"name": {
			"_key_en": "Apple iPhone 11 Pro 64GB Space Gray phone",
			"_key_ru": "Мобильный телефон Apple iPhone 11 Pro 64GB Space Gray",
		},
		"image": "./images/products/iphone_11_pro_64gb_space_gray.jpg",
		"description": {
			"_key_en": "Screen (5.8″, OLED (Super Retina XDR), 2436x1125) / Apple A13 Bionic / triple main camera: 12 Мп + 12 Мп + 12 Мп, frontal camera: 12 Мп / RAM 4 GB / 64 GB of integrated memory / 3G / LTE / GPS / GLONASS / Nano-SIM / iOS 13",
			"_key_ru": "Экран (5.8″, OLED (Super Retina XDR), 2436x1125) / Apple A13 Bionic / основная тройная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / RAM 4 ГБ / 64 ГБ встроенной памяти / 3G / LTE / GPS / ГЛОНАСС / Nano-SIM / iOS 13"
		},
		"price": "33499",
		"category": "phones-tv-and-electronics",
		"subcategory": "phones",
		"brand": "apple",
		"origin": "usa",
		"new": false,
		"popular": false
	},
	{
		"id": "21",
		"name": {
			"_key_en": "Canon EOS 77D EF-S 18-55mm IS STM Kit Black (1892C022AA) camera",
			"_key_ru": "Фотоаппарат Canon EOS 77D EF-S 18-55mm IS STM Kit Black (1892C022AA)",
		},
		"image": "./images/products/canon_1892c022aa.jpg",
		"description": {
			"_key_en": "CMOS Image sensor 22.3 x 14.9 мм, 24.2 Мп / Объектив EF-S 18-55mm IS STM / memory card support SD/SDHC/SDXC / LCD-дисплей 3″ / Full HD video / Wi-Fi / lithium-ion battery power / 131 x 138 x 99.9 мм, 755 g (с объективом)",
			"_key_ru": "Матрица CMOS 22.3 x 14.9 мм, 24.2 Мп / Объектив EF-S 18-55mm IS STM / поддержка карт памяти SD/SDHC/SDXC / LCD-дисплей 3″ / Full HD-видео / Wi-Fi / питание от литий-ионного аккумулятора / 131 x 138 x 99.9 мм, 755 г (с объективом)"
		},
		"price": "19999",
		"category": "phones-tv-and-electronics",
		"subcategory": "photo-and-video",
		"brand": "canon",
		"origin": "japan",
		"new": false,
		"popular": false
	},
	{
		"id": "22",
		"name": {
			"_key_en": "Nikon Coolpix A300 Red (VNA963E1) camera",
			"_key_ru": "Фотоаппарат Nikon Coolpix A300 Red (VNA963E1)",
		},
		"image": "./images/products/nikon_vna963e1.jpg",
		"description": {
			"_key_en": "1/2.3″ Image sensor, ПЗС, 20.1 Мп / Zoom 8х (optical) / 19 МБ of integrated memory + memory card support SD/SDHC/SDXC / LCD-display 2.7″ / Wi-Fi / HD video / lithium-ion battery power / 95.9 x 58 x 20.1 мм, 119 g / red",
			"_key_ru": "Матрица 1/2.3″, ПЗС, 20.1 Мп / Зум 8х (оптический) / 19 МБ встроенной памяти + поддержка карт памяти SD/SDHC/SDXC / ЖК-дисплей 2.7″ / Wi-Fi / HD-видео / питание от литий-ионного аккумулятора / 95.9 x 58 x 20.1 мм, 119 г / красный"
		},
		"price": "2999",
		"category": "phones-tv-and-electronics",
		"subcategory": "photo-and-video",
		"brand": "nikon",
		"origin": "japan",
		"new": true,
		"popular": true
	},
	{
		"id": "23",
		"name": {
			"_key_en": "Sony Cyber-Shot DSC-H300 Black camera",
			"_key_ru": "Фотоаппарат Sony Cyber-Shot DSC-H300 Black",
		},
		"image": "./images/products/sony-dcs-h300.jpg",
		"description": {
			"_key_en": "1/2.3″ Image sensor, 20.1 Мп / Zoom: 35x (optical), до 280x (цифровой) / memory card support MS Duo/MS Pro Duo/MS Pro Duo HS/MS Pro HG Duo/SD/SDHC / ClearPhoto 3.0″ LCD-display / HD video / AA battery power / 127.5 x 89 x 91.7 мм, 590 g / black",
			"_key_ru": "Матрица 1/2.3″, 20.1 Мп / Зум: 35x (оптический), до 280x (цифровой) / поддержка карт памяти MS Duo/MS Pro Duo/MS Pro Duo HS/MS Pro HG Duo/SD/SDHC / ЖК-дисплей ClearPhoto 3.0″ / HD-видео / питание от батареи АА / 127.5 x 89 x 91.7 мм, 590 г / черный"
		},
		"price": "4599",
		"category": "phones-tv-and-electronics",
		"subcategory": "photo-and-video",
		"brand": "sony",
		"origin": "japan",
		"new": true,
		"popular": true
	},
	{
		"id": "24",
		"name": {
			"_key_en": "Nikon D750 camera",
			"_key_ru": "Фотоаппарат Nikon D750",
		},
		"image": "./images/products/nikon_d750.jpg",
		"description": {
			"_key_en": "CMOS Image sensor, 35.9 x 24.0 мм, 24.3 Мп / memory card support SD/SDHC/SDXC / поворотный LCD-дисплей 3.2″ / lithium-ion battery power / 140.5 x 113 x 78 мм, 840 g ",
			"_key_ru": "Матрица КМОП, 35.9 x 24.0 мм, 24.3 Мп / поддержка карт памяти SD/SDHC/SDXC / поворотный LCD-дисплей 3.2″ / питание от литий-ионного аккумулятора / 140.5 x 113 x 78 мм, 840 г"
		},
		"price": "39999",
		"category": "phones-tv-and-electronics",
		"subcategory": "photo-and-video",
		"brand": "nikon",
		"origin": "japan",
		"new": false,
		"popular": true
	},
	{
		"id": "25",
		"name": {
			"_key_en": "BOSCH KGN39VI306 refrigerator",
			"_key_ru": "Холодильник BOSCH KGN39VI306",
		},
		"image": "./images/products/bosch_kgn39vi306.jpg",
		"description": {
			"_key_en": "Color: Stainless steel / Defrost system: No Frost (Frost Free) Холодильное+морозильное отделения / Refrigerator type: Dual chamber / Net volume of the refrigerator: 279 л / Net volume of the freezer: 87 л / Количество компрессоров: 1 / Тип управления: Электронное / Габариты (ВхШхГ): 203 x 60 x 66 см / Вес: 80 kg",
			"_key_ru": "Цвет: Нержавеющая сталь / Система разморозки: No Frost (Frost Free) Холодильное+морозильное отделения / Тип холодильника: Двухкамерный / Полезный объем холодильной камеры: 279 л / Полезный объем морозильной камеры: 87 л / Количество компрессоров: 1 / Тип управления: Электронное / Габариты (ВхШхГ): 203 x 60 x 66 см / Вес: 80 кг"
		},
		"price": "15799",
		"category": "appliances",
		"subcategory": "refrigerators",
		"brand": "bosh",
		"origin": "germany",
		"new": false,
		"popular": false
	},
	{
		"id": "26",
		"name": {
			"_key_en": "SAMSUNG RB29FSRNDSA/UA refrigerator",
			"_key_ru": "Холодильник SAMSUNG RB29FSRNDSA/UA",
		},
		"image": "./images/products/samsung-rb29fsrndsa.jpg",
		"description": {
			"_key_en": "Color: Silver / Defrost system No Frost (Frost Free): Холодильное+морозильное отделения / Refrigerator type: Dual chamber / Net volume of the refrigerator: 192л  / Net volume of the freezer: 98 л / Количество компрессоров: 1 / Тип управления: Электронное / Габариты (ВхШхГ): 178х59, 5х66,8 см / Вес: 63 kg",
			"_key_ru": "Цвет: Серебристый / Система разморозки No Frost (Frost Free): Холодильное+морозильное отделения / Тип холодильника: Двухкамерный / Полезный объем холодильной камеры: 192л  / Полезный объем морозильной камеры: 98 л / Количество компрессоров: 1 / Тип управления: Электронное / Габариты (ВхШхГ): 178х59, 5х66,8 см / Вес: 63 кг"
		},
		"price": "12149",
		"category": "appliances",
		"subcategory": "refrigerators",
		"brand": "samsung",
		"origin": "korea",
		"new": false,
		"popular": false
	},
	{
		"id": "27",
		"name": {
			"_key_en": "INDESIT LI8 FF2 W two-chamber refrigerator",
			"_key_ru": "Двухкамерный холодильник INDESIT LI8 FF2 W",
		},
		"image": "./images/products/indesit_li8_ff2_w.jpg",
		"description": {
			"_key_en": "Color: White /Defrost system No Frost (Frost Free): Морозильное отделение / Refrigerator type: Dual chamber / Net volume of the refrigerator: 215 л / Net volume of the freezer: 88 л / Количество компрессоров: 1 / Тип управления: Механическое / Габариты (ВхШхГ): 189 x 59.6 x 62.7 см / Вес: 70 kg",
			"_key_ru": "Цвет: Белый /Система разморозки No Frost (Frost Free): Морозильное отделение / Тип холодильника: Двухкамерный / Полезный объем холодильной камеры: 215 л / Полезный объем морозильной камеры: 88 л / Количество компрессоров: 1 / Тип управления: Механическое / Габариты (ВхШхГ): 189 x 59.6 x 62.7 см / Вес: 70 кг"
		},
		"price": "8499",
		"category": "appliances",
		"subcategory": "refrigerators",
		"brand": "indesit",
		"origin": "italy",
		"new": false,
		"popular": true
	},
	{
		"id": "28",
		"name": {
			"_key_en": "LG GW-B509SMHZ DoorCooling+ two-chamber refrigerator",
			"_key_ru": "Двухкамерный холодильник LG GW-B509SMHZ DoorCooling+",
		},
		"image": "./images/products/lg_gw-b509smhz.jpg",
		"description": {
			"_key_en": "Color: Платиново-серебристый / Defrost system: No Frost (Frost Free), Холодильное+морозильное отделения / Refrigerator type: Dual chamber / Net volume of the refrigerator: 277 л / Net volume of the freezer: 107 л / Количество компрессоров: 1 / Тип управления: Электронное / Габариты (ВхШхГ): 203 x 59.5 x 68.2 см / Вес:74 kg",
			"_key_ru": "Цвет: Платиново-серебристый / Система разморозки: No Frost (Frost Free), Холодильное+морозильное отделения / Тип холодильника: Двухкамерный / Полезный объем холодильной камеры: 277 л / Полезный объем морозильной камеры: 107 л / Количество компрессоров: 1 / Тип управления: Электронное / Габариты (ВхШхГ): 203 x 59.5 x 68.2 см / Вес:74 кг"
		},
		"price": "17599",
		"category": "appliances",
		"subcategory": "refrigerators",
		"brand": "lg",
		"origin": "korea",
		"new": false,
		"popular": false
	},
	{
		"id": "29",
		"name": {
			"_key_en": "SAMSUNG WF60F1R2E2WDUA narrow washing machine",
			"_key_ru": "Стиральная машина узкая SAMSUNG WF60F1R2E2WDUA",
		},
		"image": "./images/products/samsung_wf60f1r2e2wd.jpg",
		"description": {
			"_key_en": "Maximum laundry load: 6 kg / Energy class: А++ / Spin speed: 1200 об/мин / Number of programs: 6 / Габариты (ВхШхГ): 85х60х45 см / Способ установки: Отдельностоящая (соло) / Дисплей: С дисплеем",
			"_key_ru": "Максимальная загрузка белья: 6 кг / Класс энергопотребления: А++ / Скорость отжима: 1200 об/мин / Количество программ: 6 / Габариты (ВхШхГ): 85х60х45 см / Способ установки: Отдельностоящая (соло) / Дисплей: С дисплеем"
		},
		"price": "7999",
		"category": "appliances",
		"subcategory": "washing-machines",
		"brand": "samsung",
		"origin": "korea",
		"new": false,
		"popular": false
	},
	{
		"id": "30",
		"name": {
			"_key_en": "Стиральная машина с сушкой LG F2J7HG2W",
			"_key_ru": "Стиральная машина с сушкой LG F2J7HG2W",
		},
		"image": "./images/products/lg_f2j7hg2w.jpg",
		"description": {
			"_key_en": "Количество белья при сушке: 4 kg / Maximum laundry load: 7 кг / Energy class: В / Spin speed: 1200 об/мин / Number of programs: 12 / Габариты (ВхШхГ): 85 х 60 х 45 см / Тип двигателя: Инверторный / Способ установки: Отдельностоящая (соло) / Дисплей: С дисплеем",
			"_key_ru": "Количество белья при сушке: 4 кг / Максимальная загрузка белья: 7 кг / Класс энергопотребления: В / Скорость отжима: 1200 об/мин / Количество программ: 12 / Габариты (ВхШхГ): 85 х 60 х 45 см / Тип двигателя: Инверторный / Способ установки: Отдельностоящая (соло) / Дисплей: С дисплеем"
		},
		"price": "7999",
		"category": "appliances",
		"subcategory": "washing-machines",
		"brand": "lg",
		"origin": "korea",
		"new": true,
		"popular": false
	},
	{
		"id": "31",
		"name": {
			"_key_en": "Indesit IWSC 61253 C ECO EU narrow washing machine",
			"_key_ru": "Стиральная машина узкая Indesit IWSC 61253 C ECO EU",
		},
		"image": "./images/products/indesit_iwsc_61253.jpg",
		"description": {
			"_key_en": "Maximum laundry load: 6 kg / Energy class: А+++ / Spin speed: 1200 об/мин / Number of programs: 16 / Габариты (ВхШхГ): 85х59.5х42 см / Способ установки: Отдельностоящая (соло) / Дисплей: Без дисплея",
			"_key_ru": "Максимальная загрузка белья: 6 кг / Класс энергопотребления: А+++ / Скорость отжима: 1200 об/мин / Количество программ: 16 / Габариты (ВхШхГ): 85х59.5х42 см / Способ установки: Отдельностоящая (соло) / Дисплей: Без дисплея"
		},
		"price": "7999",
		"category": "appliances",
		"subcategory": "washing-machines",
		"brand": "indesit",
		"origin": "italy",
		"new": false,
		"popular": false
	},
	{
		"id": "32",
		"name": {
			"_key_en": "ELECTROLUX EWS1266CI narrow washing machine",
			"_key_ru": "Стиральная машина узкая ELECTROLUX EWS1266CI",
		},
		"image": "./images/products/ELECTROLUX-EWS1266CI.jpg",
		"description": {
			"_key_en": "Maximum laundry load: 6 kg /Energy class: А+++ / Spin speed: 1200 об/мин / Number of programs: 14 / Габариты (ВхШхГ): 85х59.5х37.7 см / Тип двигателя: Инверторный / Способ установки: Отдельностоящая (соло) / Дисплей: С дисплеем",
			"_key_ru": "Максимальная загрузка белья: 6 кг /Класс энергопотребления: А+++ / Скорость отжима: 1200 об/мин / Количество программ: 14 / Габариты (ВхШхГ): 85х59.5х37.7 см / Тип двигателя: Инверторный / Способ установки: Отдельностоящая (соло) / Дисплей: С дисплеем"
		},
		"price": "7599",
		"category": "appliances",
		"subcategory": "washing-machines",
		"brand": "electrolux",
		"origin": "sweden",
		"new": true,
		"popular": false
	},
	{
		"id": "33",
		"name": {
			"_key_en": "GORENJE K 5341 XF combined cooker",
			"_key_ru": "Комбинированная плита GORENJE K 5341 XF",
		},
		"image": "./images/products/gorenje_k_5341.jpg",
		"description": {
			"_key_en": "Тип: Комбинированные (газ+электро) / Color: Stainless steel / Типы нагревательных элементов поверхности плиты: Газовые / Тип духовки: Электрическая / Конвекция: Есть / Материал решеток поверхности: Чугунные / Полезный объем: 70 л / Габариты (ВхШхГ): 85 х 50 х 59.4 см",
			"_key_ru": "Тип: Комбинированные (газ+электро) / Цвет: Нержавеющая сталь / Типы нагревательных элементов поверхности плиты: Газовые / Тип духовки: Электрическая / Конвекция: Есть / Материал решеток поверхности: Чугунные / Полезный объем: 70 л / Габариты (ВхШхГ): 85 х 50 х 59.4 см"
		},
		"price": "9099",
		"category": "appliances",
		"subcategory": "cookers",
		"brand": "gorenje",
		"origin": "slovenia",
		"new": false,
		"popular": false
	},
	{
		"id": "34",
		"name": {
			"_key_en": "Газовая плита ZANUSSI ZCG9210M1W",
			"_key_ru": "Газовая плита ZANUSSI ZCG9210M1W",
		},
		"image": "./images/products/ZANUSSI-ZCG9210M1W.jpg",
		"description": {
			"_key_en": "Тип: Газовые / Color: White / Типы нагревательных элементов поверхности плиты: Газовые / Тип духовки: Газовая / Конвекция: Нет / Материал решеток поверхности: Эмалированные / Гриль: Без гриля / Полезный объем: 59 л / Габариты (ВхШхГ): 85 х 50 х 50 см",
			"_key_ru": "Тип: Газовые / Цвет: Белый / Типы нагревательных элементов поверхности плиты: Газовые / Тип духовки: Газовая / Конвекция: Нет / Материал решеток поверхности: Эмалированные / Гриль: Без гриля / Полезный объем: 59 л / Габариты (ВхШхГ): 85 х 50 х 50 см"
		},
		"price": "4999",
		"category": "appliances",
		"subcategory": "cookers",
		"brand": "zanussi",
		"origin": "italy",
		"new": false,
		"popular": false
	},
	{
		"id": "35",
		"name": {
			"_key_en": "Плита электрическая GORENJE EC 5111 WG",
			"_key_ru": "Плита электрическая GORENJE EC 5111 WG",
		},
		"image": "./images/products/gorenje_ec_5111.jpg",
		"description": {
			"_key_en": "Тип Электрические / Color: White / Типы нагревательных элементов поверхности плиты: Стеклокерамический (Hi-Light) / Тип духовки: Электрическая / Конвекция: Нет / Гриль: Без гриля / Полезный объем: 68 л / Габариты (ВхШхГ): 85 х 50 х 59.4 см",
			"_key_ru": "Тип Электрические / Цвет: Белый / Типы нагревательных элементов поверхности плиты: Стеклокерамический (Hi-Light) / Тип духовки: Электрическая / Конвекция: Нет / Гриль: Без гриля / Полезный объем: 68 л / Габариты (ВхШхГ): 85 х 50 х 59.4 см"
		},
		"price": "7399",
		"category": "appliances",
		"subcategory": "cookers",
		"brand": "gorenje",
		"origin": "slovenia",
		"new": false,
		"popular": false
	},
	{
		"id": "36",
		"name": {
			"_key_en": "BEKO FSM 62320 GW combined cooker",
			"_key_ru": "Комбинированная плита BEKO FSM 62320 GW",
		},
		"image": "./images/products/beko_fsm_62320.jpg",
		"description": {
			"_key_en": "Тип: Комбинированные (газ+электро) / Color: White / Типы нагревательных элементов поверхности плиты: Газовые / Тип духовки: Электрическая / Конвекция: Есть / Материал решеток поверхности: Эмалированные / Газ-контроль: Отсутствует / Полезный объем: 66 л / Габариты (ВхШхГ): 85х60х60 см",
			"_key_ru": "Тип: Комбинированные (газ+электро) / Цвет: Белый / Типы нагревательных элементов поверхности плиты: Газовые / Тип духовки: Электрическая / Конвекция: Есть / Материал решеток поверхности: Эмалированные / Газ-контроль: Отсутствует / Полезный объем: 66 л / Габариты (ВхШхГ): 85х60х60 см"
		},
		"price": "7899",
		"category": "appliances",
		"subcategory": "cookers",
		"brand": "beko",
		"origin": "turkey",
		"new": false,
		"popular": false
	},
];

module.exports = {products};