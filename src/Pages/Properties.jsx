import { useState } from "react";
import { Link } from "react-router";
export const properties = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Houses",
    price: 500,
    bedroom: 5,
    bathrooms: 3,
    masterroom: 2,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "Hodan",
    image: "/images/guri1.jpg",
    description: `
    Villa Casri ah oo ku taalla Muqdisho Villa-dan quruxda badan  waxaa lagu dhisay naqshad casri ah oo isku darsanaysa raaxo, qurux iyo adeegyo ku habboon nolol qoys. 
    Gurigu wuxuu leeyahay qolal waasac ah oo si wanaagsan loo qorsheeyay, iyadoo qol kasta loo sameeyay meel ku filan oo lagu noolaado.

    Villa-du waxay ka kooban tahay 5 qol jiif, 3 musqulood, qol fadhiga oo ballaaran, jikad casri ah iyo barxad qurux badan. 
    Gudaha guriga waxaa lagu dhammeystiray qalab iyo agab tayo sare leh, iyadoo daaqadaha waaweyn ay guriga siinayaan iftiin dabiici ah iyo hawo wanaagsan.

    Goobta villa-du waxay ku dhowdahay adeegyada muhiimka ah sida dugsiyada, isbitaallada, suuqyada, maqaayadaha iyo waddooyinka waaweyn, 
    taasoo ka dhigaysa meel ku habboon qoys doonaya inuu ku noolaado deegaan raaxo leh oo adeegyada magaalada si fudud looga heli karo.

    Villa-dan waxay ku habboon tahay qoys weyn ama qof raadinaya guri casri ah oo leh meel deggan, naqshad qurux badan iyo adeegyo dhammeystiran.
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Qaboojiye/AC 
    2-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    3-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    4:Baarkin baabuur.
    `,
  },
  {
    id: 2,
    title: "Modern House G + ",
    category: "Houses",
    price: 150000,
    bedroom: 8,
    bathrooms: 5,
    masterroom: 2,
    status: "For Sale",
    location: "Mogadishu",
    District: "Waberi",
    description: `
    Gurigaan G+ waxa uu ka kooban yahay: 
    8 qol jiif ah, 2 qol ka mid ah waa master room iyo 5 musqul. 
    gurigan waxa uu ku yaala degmada waberi
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    2-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    3:Baarkin baabuur.
    `,
    image: "/images/guri2.png",
  },
  {
    id: 3,
    title: "Modern House G + ",
    category: "Houses",
    price: 300000,
    bedroom: 6,
    bathrooms: 3,
    masterroom: 2,
    status: "For Sale",
    location: "Mogadishu",
    District: "Hamar Wane",
    image: "/images/guri3.png",
    description: `
    Gurigaan G+1 waxa uu ka kooban yahay: 
    8 qol jiif ah, 2 qol ka mid ah waa master room iyo 5 musqul. 
    gurigan waxa uu ku yaala degmada waberi
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    2-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    3:Baarkin baabuur.
    `,
  },
  {
    id: 4,
    title: "Modern Villa ",
    category: "Houses",
    price: 200,
    bedroom: 3,
    bathrooms: 1,
    masterroom: 1,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "Howlwadaag",
    image: "/images/guri4.png",
    description: `
    Villa Casri ah oo ku taalla Muqdisho Villa-dan quruxda badan  waxaa lagu dhisay naqshad casri ah oo isku darsanaysa raaxo, qurux iyo adeegyo ku habboon nolol qoys. 
    Gurigu wuxuu leeyahay qolal waasac ah oo si wanaagsan loo qorsheeyay, iyadoo qol kasta loo sameeyay meel ku filan oo lagu noolaado.

    Villa-du waxay ka kooban tahay 3 qol jiif 1 qol ka mid ah waa master room, 1 musqulood, qol fadhiga oo ballaaran, jikad casri ah iyo barxad qurux badan. 
    Gudaha guriga waxaa lagu dhammeystiray qalab iyo agab tayo sare leh, iyadoo daaqadaha waaweyn ay guriga siinayaan iftiin dabiici ah iyo hawo wanaagsan.

    Goobta villa-du waxay ku dhowdahay adeegyada muhiimka ah sida dugsiyada, isbitaallada, suuqyada, maqaayadaha iyo waddooyinka waaweyn, 
    taasoo ka dhigaysa meel ku habboon qoys doonaya inuu ku noolaado deegaan raaxo leh oo adeegyada magaalada si fudud looga heli karo.

    Villa-dan waxay ku habboon tahay qoys weyn ama qof raadinaya guri casri ah oo leh meel deggan, naqshad qurux badan iyo adeegyo dhammeystiran.
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Qaboojiye/AC 
    2-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    3-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    4:Baarkin baabuur.
    `,
  },
  {
    id: 5,
    title: "Modern Villa ",
    category: "Houses",
    price: 250,
    bedroom: 4,
    bathrooms: 3,
    masterroom: 1,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "Dayniile",
    image: "/images/guri5.jpg",
    description: `
    Villa Casri ah oo ku taalla Muqdisho Villa-dan quruxda badan  waxaa lagu dhisay naqshad casri ah oo isku darsanaysa raaxo, qurux iyo adeegyo ku habboon nolol qoys. 
    Gurigu wuxuu leeyahay qolal waasac ah oo si wanaagsan loo qorsheeyay, iyadoo qol kasta loo sameeyay meel ku filan oo lagu noolaado.

    Villa-du waxay ka kooban tahay 4 qol jiif 1 qol ka mid ah waa master room, 3 musqulood, qol fadhiga oo ballaaran, jikad casri ah iyo barxad qurux badan. 
    Gudaha guriga waxaa lagu dhammeystiray qalab iyo agab tayo sare leh, iyadoo daaqadaha waaweyn ay guriga siinayaan iftiin dabiici ah iyo hawo wanaagsan.

    Goobta villa-du waxay ku dhowdahay adeegyada muhiimka ah sida dugsiyada, isbitaallada, suuqyada, maqaayadaha iyo waddooyinka waaweyn, 
    taasoo ka dhigaysa meel ku habboon qoys doonaya inuu ku noolaado deegaan raaxo leh oo adeegyada magaalada si fudud looga heli karo.

    Villa-dan waxay ku habboon tahay qoys weyn ama qof raadinaya guri casri ah oo leh meel deggan, naqshad qurux badan iyo adeegyo dhammeystiran.
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Qaboojiye/AC 
    2-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    3-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    4:Baarkin baabuur.
    `,
  },
  {
    id: 6,
    title: "Modern Villa ",
    category: "Houses",
    price: 750,
    bedroom: 5,
    bathrooms: 3,
    masterroom: 2,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "Yaaqshiid",
    image: "/images/guri6.jpg",
    description: `
    Villa Casri ah oo ku taalla Muqdisho Villa-dan quruxda badan  waxaa lagu dhisay naqshad casri ah oo isku darsanaysa raaxo, qurux iyo adeegyo ku habboon nolol qoys. 
    Gurigu wuxuu leeyahay qolal waasac ah oo si wanaagsan loo qorsheeyay, iyadoo qol kasta loo sameeyay meel ku filan oo lagu noolaado.

    Villa-du waxay ka kooban tahay 5 qol jiif 2 qol ka mid ah waa master room, 3 musqulood, qol fadhiga oo ballaaran, jikad casri ah iyo barxad qurux badan. 
    Gudaha guriga waxaa lagu dhammeystiray qalab iyo agab tayo sare leh, iyadoo daaqadaha waaweyn ay guriga siinayaan iftiin dabiici ah iyo hawo wanaagsan.

    Goobta villa-du waxay ku dhowdahay adeegyada muhiimka ah sida dugsiyada, isbitaallada, suuqyada, maqaayadaha iyo waddooyinka waaweyn, 
    taasoo ka dhigaysa meel ku habboon qoys doonaya inuu ku noolaado deegaan raaxo leh oo adeegyada magaalada si fudud looga heli karo.

    Villa-dan waxay ku habboon tahay qoys weyn ama qof raadinaya guri casri ah oo leh meel deggan, naqshad qurux badan iyo adeegyo dhammeystiran.
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Qaboojiye/AC 
    2-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    3-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    4:Baarkin baabuur.
    `,
  },
  {
    id: 7,
    title: "Modern Villa ",
    category: "Houses",
    price: 450,
    bedroom: 8,
    bathrooms: 5,
    masterroom: 3,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "warta nabada",
    image: "/images/guri7.jpg",
    description: `
    Villa Casri ah oo ku taalla Muqdisho Villa-dan quruxda badan  waxaa lagu dhisay naqshad casri ah oo isku darsanaysa raaxo, qurux iyo adeegyo ku habboon nolol qoys. 
    Gurigu wuxuu leeyahay qolal waasac ah oo si wanaagsan loo qorsheeyay, iyadoo qol kasta loo sameeyay meel ku filan oo lagu noolaado.

    Villa-du waxay ka kooban tahay 8 qol jiif 3 qol ka mid ah waa master room, 5  musqulood, qol fadhiga oo ballaaran, jikad casri ah iyo barxad qurux badan. 
    Gudaha guriga waxaa lagu dhammeystiray qalab iyo agab tayo sare leh, iyadoo daaqadaha waaweyn ay guriga siinayaan iftiin dabiici ah iyo hawo wanaagsan.

    Goobta villa-du waxay ku dhowdahay adeegyada muhiimka ah sida dugsiyada, isbitaallada, suuqyada, maqaayadaha iyo waddooyinka waaweyn, 
    taasoo ka dhigaysa meel ku habboon qoys doonaya inuu ku noolaado deegaan raaxo leh oo adeegyada magaalada si fudud looga heli karo.

    Villa-dan waxay ku habboon tahay qoys weyn ama qof raadinaya guri casri ah oo leh meel deggan, naqshad qurux badan iyo adeegyo dhammeystiran.
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Qaboojiye/AC 
    2-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    3-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    4:Baarkin baabuur.
    `,
  },
  {
    id: 8,
    title: "Modern Villa ",
    category: "Houses",
    price: 80000,
    bedroom: 5,
    bathrooms: 2,
    masterroom: 1,
    status: "For Sale",
    location: "Mogadishu",
    District: "Karaan",
    image: "/images/guri8.jpg",
    description: `
    Villa Casri ah oo ku taalla Muqdisho Villa-dan quruxda badan  waxaa lagu dhisay naqshad casri ah oo isku darsanaysa raaxo, qurux iyo adeegyo ku habboon nolol qoys. 
    Gurigu wuxuu leeyahay qolal waasac ah oo si wanaagsan loo qorsheeyay, iyadoo qol kasta loo sameeyay meel ku filan oo lagu noolaado.

    Villa-du waxay ka kooban tahay 5 qol jiif 1 qol ka mid ah waa master room, 2 musqulood, qol fadhiga oo ballaaran, jikad casri ah iyo barxad qurux badan. 
    Gudaha guriga waxaa lagu dhammeystiray qalab iyo agab tayo sare leh, iyadoo daaqadaha waaweyn ay guriga siinayaan iftiin dabiici ah iyo hawo wanaagsan.

    Goobta villa-du waxay ku dhowdahay adeegyada muhiimka ah sida dugsiyada, isbitaallada, suuqyada, maqaayadaha iyo waddooyinka waaweyn, 
    taasoo ka dhigaysa meel ku habboon qoys doonaya inuu ku noolaado deegaan raaxo leh oo adeegyada magaalada si fudud looga heli karo.

    Villa-dan waxay ku habboon tahay qoys weyn ama qof raadinaya guri casri ah oo leh meel deggan, naqshad qurux badan iyo adeegyo dhammeystiran.
    gurigan waa ALL-IN-ONE oo isku daraya raaxo iyo amni.
    Adeegyada uu leeyahay gurigaan:
    1-Qaboojiye/AC 
    2-Nidaamka badbaadada dabka: waxa loogu talagalay kordhinta badbaadada dadkaiyo dhismaha.
    3-CCTV Cameras: kor u qaadaya amniga iyo la socodka dhismaha.
    4:Baarkin baabuur.
    `,
  },
  {
    id: 9,
    title: "Office",
    category: "Comercial",
    price: 1500,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "Hodan",
    image: "/images/office.png",
    description: `
    Xafiis Casri ah oo Kiro ah  Muqdisho

    Xafiiskan casriga ah wuxuu ku yaallaa goob ganacsi oo muhiim ah gudaha Muqdisho gaar ahaan degmada hodan, wuxuuna ku habboon yahay shirkado, hay’ado, iyo ganacsiyo raadinaya meel shaqo oo wanaagsan, fududna looga heli karo adeegyada muhiimka ah ee magaalada.

    Xafiisku wuxuu leeyahay qolal shaqo oo waasac ah, reception, qol shirar, musqulo iyo meel ku habboon shaqaalaha iyo macaamiisha. Dhismaha waxaa loo sameeyay naqshad casri ah oo bixisa jawi shaqo oo raaxo leh, iyadoo leh hawo iyo iftiin dabiici ah oo wanaagsan.

    Goobta xafiisku waxay ku dhowdahay waddooyinka waaweyn, suuqyada, bangiyada, maqaayadaha iyo xarumaha ganacsiga, taasoo fududeynaysa in macaamiisha iyo shaqaaluhu si sahlan ku gaaraan.

    Xafiiskan waxaa si gaar ah ugu habboon shirkadaha gaarka loo leeyahay, NGO-yada, hay’adaha, xafiisyada adeegyada, iyo ganacsiyada kale ee doonaya xafiis tayo leh oo ku yaalla meel istiraatiiji ah.

    `,
  },
  {
    id: 10,
    title: "Restaurants & Caffe",
    category: "Comercial",
    price: 3000,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "Waberi",
    image: "/images/restuarent.png",
    description: `
    Restaurant Casri ah oo Kiro ah Muqdisho

    Restaurant-kan quruxda badan wuxuu ku yaallaa goob ganacsi oo muhiim ah gudaha Muqdisho gaar ahaan degmada waberi, wuxuuna fursad wanaagsan u yahay qof ama shirkad doonaysa inay ka shaqeyso ganacsiga cuntada iyo cabitaanka.

    Goobtu waxay leedahay hool cunto oo waasac ah, jikad si wanaagsan loo qorsheeyay, counter adeeg, musqulo iyo meel ku habboon in lagu qaabilo macaamiisha. Naqshadda restaurant-ka waxaa loo sameeyay jawi nadiif ah, raaxo leh oo ku habboon qoysaska, shaqaalaha xafiisyada iyo dadka doonaya meel wanaagsan oo ay ku raaxaystaan cunto iyo cabitaan.

    Restaurant-ku wuxuu ku yaallaa meel si fudud looga soo gaari karo, wuxuuna ku dhow yahay waddooyinka waaweyn, goobaha ganacsiga, xafiisyada iyo meelaha ay dadku ku badan yihiin. Goobta ayaa sidoo kale ku habboon in lagu sameeyo branding iyo qurxin cusub iyadoo loo waafajinayo nooca ganacsiga.

    Waxaa si gaar ah ugu habboon restaurant, café, fast food, bakery ama adeeg kale oo cunto iyo cabitaan ah.

    `,
  },
  {
    id: 11,
    title: "Pharmacy",
    category: "Comercial",
    price: 15000,
    status: "For Sale",
    location: "Mogadishu",
    District: "Howlwadaag",
    image: "/images/pharmacy.png",
    description: `
    Pharmacy Casri ah oo Iib ah Muqdisho

    Pharmacy-gan wuxuu ku yaallaa goob ganacsi oo muhiim ah gudaha Muqdisho gaar ahaan degmada howlwadaag, waana fursad wanaagsan oo loogu talagalay qof ama shirkad doonaysa inay la wareegto ganacsi hore u diyaarsan oo ku yaalla meel si fudud ay macaamiishu u heli karaan.

    Goobtu waxay leedahay meel iibka iyo adeegga macaamiisha, shelves iyo cabinets si wanaagsan loo habeeyay, meel kayd ah, reception/counter iyo musqul. Pharmacy-ga waxaa loo diyaariyay jawi nadiif ah oo ku habboon adeegga macaamiisha iyo habeynta alaabaha.

    Goobtu waxay ku dhowdahay waddooyinka waaweyn, xaafadaha la deggan yahay, xarumaha caafimaadka, suuqyada iyo goobaha ganacsiga, taasoo siinaysa fursad wanaagsan oo lagu gaari karo macaamiil badan.

    Pharmacy-gan wuxuu ku habboon yahay qof ganacsade ah, shirkad caafimaad ama maal-gashade doonaya inuu helo goob ganacsi oo diyaarsan. Iibsaduhu wuxuu goobta uga faa’iideysan karaa sii wadista pharmacy-ga ama inuu u beddelo ganacsi caafimaad oo waafaqsan shuruucda iyo ruqsadaha khuseeya.
    `,
  },
  {
    id: 12,
    title: "Retail Shop",
    category: "Comercial",
    price: 1000,
    status: "For Sale",
    location: "Mogadishu",
    District: "Hodan",
    image: "/images/shop.png",
    description: `
    Retail Shop Casri ah oo Iib ah Muqdisho

    Dukaan ganacsi oo wanaagsan oo iib ah, kuna yaalla goob muhiim ah oo ganacsi gudaha Muqdisho gaar ahaan degmada hodan. Dukaanku wuxuu ku habboon yahay qof ama shirkad doonaysa inay maal-gashato hanti ganacsi oo leh fursad wanaagsan oo ganacsi iyo dakhli joogto ah.

    Dukaanku wuxuu leeyahay meel iib oo waasac ah, shelves iyo cabinets lagu habeeyo alaabta, counter adeeg, qol kayd ah iyo musqul. Naqshadda gudaha iyo bannaankaba waxaa loo diyaariyay si ay ugu habboonaato noocyo kala duwan oo ganacsi tafaariiq ah.

    Goobtu waxay ku dhowdahay waddo weyn, suuqyo, xaafado la deggan yahay, xafiisyo iyo xarumo ganacsi, taasoo fududeynaysa in macaamiishu si sahlan u gaaraan dukaanka.

    Retail Shop-kan wuxuu ku habboon yahay supermarket yar, dharka, kabaha, qalabka elektarooniga ah, cosmetics, alaabta guriga ama ganacsi kale oo tafaariiq ah.

    Waa fursad ku habboon qof doonaya inuu helo hanti ganacsi oo muddo dheer qiime yeelan karta, isla markaana laga hirgelin karo ganacsi kala duwan.

    `,
  },
  {
    id: 13,
    title: "Car Showrooms ",
    category: "Comercial",
    price: 100000,
    status: "For Sale",
    location: "Mogadishu",
    District: "waberi",
    image: "/images/Car Showrooms.png",
    description: `
    Car Showroom Casri ah oo Iib ah Muqdisho

    Car Showroom-kan wuxuu ku yaallaa goob ganacsi oo muhiim ah gudaha Muqdisho gaar ahaan degmada waberi, wuxuuna fursad wanaagsan u yahay qof ama shirkad doonaysa inay maal-gashato hanti ganacsi oo loogu talagalay iibinta iyo bandhigga baabuurta.

    Showroom-ku wuxuu leeyahay meel ballaaran oo baabuurta lagu soo bandhigo, xafiis maamulka, reception, qol kayd ah iyo musqulo, iyadoo goobta bannaankeeda ay leedahay meel ku filan oo lagu dhigto laguna soo bandhigo baabuurta macaamiisha.

    Goobtu waxay ku taallaa meel si fudud looga soo gaari karo, kuna dhow waddooyinka waaweyn, xarumaha ganacsiga, suuqyada iyo meelaha ay dadku ku badan yihiin, taasoo ka dhigaysa meel ku habboon ganacsi baabuur oo doonaya muuqaal iyo helitaan wanaagsan.

    Car Showroom-kan wuxuu ku habboon yahay iibinta baabuurta cusub iyo kuwa la isticmaalay, shirkadaha baabuurta, car rental, auto dealership ama ganacsi kale oo la xiriira baabuurta.

    Waa fursad wanaagsan oo loogu talagalay maal-gashade doonaya hanti ganacsi oo meel istiraatiiji ah ku taalla, iyadoo goobta loo adeegsan karo ganacsi muddo dheer ah.
    `,
  },
  {
    id: 14,
    title: "Beauty Salons ",
    category: "Comercial",
    price: 500,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "wadajir",
    image: "/images/salon.png",
    description: `
    Beauty Salon Casri ah oo Kiro ah Muqdisho

    Beauty Salon-kan quruxda badan wuxuu ku yaallaa goob ganacsi oo muhiim ah gudaha Muqdisho gaar ahaan degmada wadajir, wuxuuna fursad wanaagsan u yahay qof ama shirkad doonaysa inay bilowdo ama ballaariso ganacsi ku saabsan quruxda iyo daryeelka shaqsiga.

    Salon-ku wuxuu leeyahay meel soo dhaweyn iyo reception ah, qolal adeeg oo si wanaagsan loo habeeyay, meel timaha lagu qurxiyo, meel makeup iyo skincare loogu adeego macaamiisha, iyo musqul. Gudaha waxaa loogu talagalay jawi nadiif ah, qurux badan oo raaxo leh, si macaamiishu u helaan adeeg iyo waayo-aragnimo wanaagsan.

    Goobtu waxay ku dhowdahay waddooyinka waaweyn, suuqyada, xaafadaha la deggan yahay iyo xarumaha ganacsiga, taasoo fududeynaysa in macaamiishu si sahlan u soo gaaraan salon-ka.

    Beauty Salon-kan wuxuu ku habboon yahay adeegyo kala duwan sida hair styling, makeup, skincare, manicure & pedicure, henna iyo adeegyada kale ee quruxda iyo daryeelka shaqsiga.

    Waa fursad wanaagsan oo loogu talagalay qof doonaya inuu yeesho ganacsi quruxeed ku yaalla meel muuqata oo si fudud loo heli karo, iyadoo goobta lagu qurxin karo laguna habeyn karo brand-ka iyo adeegyada ganacsiga.


    `,
  },
  {
    id: 15,
    title: "Gyms & Fitness Centers ",
    category: "Comercial",
    price: 1000,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "shangaani",
    image: "/images/gym.png",
    description: `
    Gym & Fitness Center Casri ah oo Kiro ah Muqdisho

    Gym & Fitness Center-kan wuxuu ku yaallaa goob muhiim ah oo si fudud looga heli karo gudaha Muqdisho gaar ahaan degmada shangaani, wuxuuna fursad wanaagsan u yahay qof ama shirkad doonaysa inay bilowdo ama ballaariso ganacsi ku saabsan caafimaadka, jimicsiga iyo fitness-ka.

    Goobtu waxay leedahay hool jimicsi oo ballaaran, meel loogu talagalay cardio iyo strength training, qolal tababar, reception, qol labiska iyo musqulo. Dhismaha waxaa loo habeeyay si uu u bixiyo meel ku filan oo loogu talagalay qalabka jimicsiga iyo dhaqdhaqaaqa xubnaha.

    Goobta gym-ku waxay ku dhowdahay waddooyinka waaweyn, xaafadaha la deggan yahay, xafiisyada iyo goobaha ganacsiga, taasoo u sahlaysa macaamiisha inay si fudud u yimaadaan una isticmaalaan adeegyada gym-ka.

    Gym-kan wuxuu ku habboon yahay adeegyo kala duwan sida weight training, cardio, personal training, group workouts, fitness classes iyo wellness programs. Waxa kale oo lagu dari karaa adeegyo dheeraad ah iyadoo ku xiran qorshaha ganacsiga.

    Waa fursad wanaagsan oo loogu talagalay qof ama shirkad doonaysa inay ka shaqeyso fitness iyo wellness business, iyadoo goobta lagu habeyn karo brand-ka, qalabka iyo adeegyada ganacsiga.

    `,
  },
  {
    id: 16,
    title: "Supermarket ",
    category: "Comercial",
    price: 1500,
    status: "For Rent",
    period: "Month",
    location: "Mogadishu",
    District: "abdiAziiz",
    image: "/images/market.png",
    description: `
    Supermarket Center Casri ah oo Kiro ah Muqdisho

    Supermarket Center-kan wuxuu ku yaallaa goob ganacsi oo muhiim ah gudaha Muqdisho gaar ahaan degmada abdiAziiz, wuxuuna fursad wanaagsan u yahay qof ama shirkad doonaysa inay ka hirgeliso ganacsi tafaariiq ah oo ballaaran.

    Goobtu waxay leedahay hool weyn oo iibka ah, shelves iyo display areas, counter-ka lacag bixinta, qol kayd ah, xafiis maamulka, musqulo iyo meel ku filan oo macaamiisha loogu adeego. Dhismaha waxaa loo qorsheeyay inuu qaadi karo alaabooyin kala duwan, iyadoo gudaha si fudud loogu habeyn karo baahida ganacsiga.

    Supermarket-ku wuxuu ku dhow yahay waddooyinka waaweyn, xaafadaha la deggan yahay, xafiisyada iyo goobaha ganacsiga, taasoo ka dhigaysa meel ku habboon in si joogto ah ay u soo booqdaan macaamiil badan.

    Goobtan waxay ku habboon tahay supermarket, grocery store, mini-market, wholesale & retail business ama xarun ganacsi oo alaabooyin kala duwan lagu iibiyo.

    Waa fursad wanaagsan oo loogu talagalay qof ama shirkad doonaysa inay hesho goob ganacsi oo ballaaran, muuqata oo si fudud loo heli karo, isla markaana leh awood lagu ballaarin karo adeegyada iyo qaybaha ganacsiga.


    `,
  },
  {
    id: 17,
    title: "elecronic shop ",
    category: "Comercial",
    price: 30000,
    status: "For Sale",
    location: "Mogadishu",
    District: "daru salaam",
    image: "/images/elecronic shop.png",
    description: `
    Electronic Shop Casri ah oo Kiro ah Muqdisho

    Electronic Shop-kan wuxuu ku yaallaa goob ganacsi oo muhiim ah gudaha Muqdisho gaar ahaan degmada daaru salaam, wuxuuna fursad wanaagsan u yahay qof ama shirkad doonaysa inay bilowdo ama ballaariso ganacsi ku saabsan qalabka elektaroonigga ah iyo teknoolojiyadda.

    Dukaanku wuxuu leeyahay meel iib oo waasac ah, shelves iyo display cabinets lagu soo bandhigo qalabka, counter adeeg, qol kayd ah iyo musqul. Gudaha waxaa loo habeeyay si alaabaha si qurux badan loogu soo bandhigi karo, isla markaana macaamiishu si fudud ugu arki karaan una dooran karaan badeecadaha.

    Goobtu waxay ku dhowdahay waddooyinka waaweyn, suuqyada, xafiisyada iyo xarumaha ganacsiga, taasoo fududeynaysa in macaamiisha iyo ganacsatada kale si sahlan u soo gaaraan dukaanka.

    Electronic Shop-kan wuxuu ku habboon yahay iibinta telefishinnada, laptops, telefoonnada, qalabka computer-ka, accessories, qalabka guriga iyo electronics kale, sidoo kale waxaa lagu dari karaa adeegyo dayactir ama installation ah iyadoo ku xiran qorshaha ganacsiga.

    Waa fursad wanaagsan oo loogu talagalay qof doonaya inuu ka shaqeeyo ganacsiga electronics iyo technology, iyadoo goobta loo habeyn karo brand-ka iyo nooca badeecadaha ganacsigu iibinayo.

    `,
  },
];
const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Houses", "Comercial", "For Rent", "For Sale"];

  const filteredProperty =
    selectedCategory === "All"
      ? properties
      : selectedCategory === "For Rent" || selectedCategory === "For Sale"
        ? properties.filter((property) => property.status === selectedCategory)
        : properties.filter(
            (property) => property.category === selectedCategory,
          );

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-orange-50 to-rose-100 px-4 py-8">
      <div className="mx-auto w-full min-w-0 max-w-6xl mt-10">
        <div className="mt-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900  md:text-4xl md:text-6xl ">
            Guryaha La Heli Karo
          </h1>

          <p className="mx-auto max-w-2xl text-center text-lg text-gray-700 md:text-xl">
            Ka dooro guryaha la heli karo kuwa ku habboon baahidaada,
            miisaaniyaddaada, iyo qaab nololeedkaaga.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 mt-6 flex w-full flex-wrap justify-center gap-4 md:mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer rounded-full px-4 py-2 capitalize ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-rose-200 text-gray-900 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Properties */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperty.map((property) => (
            <div
              key={property.id}
              className="min-w-0 overflow-hidden rounded-2xl bg-white p-4 shadow-md"
            >
              {/* Image */}
              <div className="w-full min-w-0 overflow-hidden rounded-xl">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-72 w-full max-w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="min-w-0 px-4 pt-4">
                {/* Title + Price */}
                <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h2 className="break-words text-xl font-semibold text-gray-900">
                      {property.title}
                    </h2>

                    <p className="mt-1 break-words text-xs text-gray-500">
                      📍 {property.location} / 📍 {property.District}
                    </p>
                  </div>

                  <div className="min-w-0">
                    <p className="break-words text-right text-lg font-medium text-gray-600">
                      ${property.price.toLocaleString()} {property.period}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-2">
                  <p className="text-lg font-semibold text-gray-600">
                    {property.status}
                  </p>
                </div>

                {/* Features */}
                {property.category === "Houses" && (
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="flex min-w-0 items-center justify-center rounded-xl bg-orange-100 p-2 text-orange-500">
                      <span className="text-xs">🛏️ {property.bedroom}</span>
                    </div>

                    <div className="flex min-w-0 items-center justify-center rounded-xl bg-orange-100 p-2 text-orange-500">
                      <span className="text-xs">🛁 {property.bathrooms}</span>
                    </div>

                    <div className="flex min-w-0 items-center justify-center rounded-xl bg-orange-100 p-2 text-orange-500">
                      <span className="truncate text-xs">
                        VIP 🛏️ {property.masterroom}
                      </span>
                    </div>
                  </div>
                )}

                {/* Button */}
                <div className="mt-5 flex justify-center">
                  <Link to={`/properties/${property.id}`}>
                    <button className="cursor-pointer rounded-full bg-black px-10 py-3 text-sm font-medium text-white transition hover:bg-gray-800 sm:px-16">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperty.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500">
              No properties found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
