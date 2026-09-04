import { Link, useNavigate } from "react-router";

const properties = [
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
    id: 4,
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
    id: 5,
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
  {
    id: 6,
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
];

const agents = [
  {
    id: 1,
    name: "xaawo taako",
    image: "/images/agent2.png",
    role: "junior Real Estate Agent",
    location: "waberi, Mogadishu",
    email: "xaawo@gmail.com",
    properties: 8,
    review: "★★",
    experience: "1 Years",
    specialization: "Houses",
    description: `
    Xaawo Taako waa Wakiil Dhul iyo Guryo ah oo bilow ah, waxayna leedahay 1 sano oo waayo-aragnimo ah oo ku saabsan suuqa hantida ma-guurtada ah. 
    Waxay si gaar ah ugu takhasustay guryaha, iyadoo macaamiisha ka caawisa inay helaan guri ku habboon baahidooda iyo miisaaniyaddooda. 
    Xaawo waxay maamushaa 8 hanti, waxayna ku dadaashaa inay macaamiisheeda siiso adeeg wanaagsan, daacad ah, oo lagu kalsoonaan karo.

    `,
  },
  {
    id: 2,
    name: "wiil waal jamac",
    image: "/images/agent4.jpg",
    role: "Senior Real Estate Agent",
    location: "hodan, Mogadishu",
    email: "wiilwaal@gmail.com",
    properties: 40,
    review: "★★★★☆",
    experience: "15 Years",
    specialization: "Houses & Comercial",
    description: `
    Wiil Waal Jamac waa Wakiil Sare oo Dhul iyo Guryo ah, wuxuuna leeyahay 15 sano oo waayo-aragnimo ah oo ku saabsan suuqa hantida ma-guurtada ah. 
    Wuxuu si gaar ah ugu takhasusay guryaha iyo goobaha ganacsiga, isagoo macaamiisha ka caawiya inay helaan hanti ku habboon baahidooda iyo miisaaniyaddooda. 
    Wiil Waal wuxuu maamulaa 40 hanti, wuxuuna leeyahay khibrad dheer oo u saamaxaysa inuu macaamiisha siiyo talooyin wanaagsan iyo adeeg lagu kalsoonaan karo.

    `,
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    image: "/images/agent1.png",
    role: "Senior Real Estate Agent",
    location: "Hodan, Mogadishu",
    email: "ahmed@gmail.com",
    properties: 24,
    review: "★★★☆",
    experience: "8 Years",
    specialization: "Houses & Comercial",
    description: `
    Ahmed Hassan waa Wakiil Sare oo Dhul iyo Guryo ah, wuxuuna leeyahay in ka badan 5 sano oo waayo-aragnimo ah oo uu ku leeyahay suuqa guryaha iyo hantida ma-guurtada ah. 
    Wuxuu si gaar ah ugu takhasusay guryaha iyo goobaha ganacsiga, isagoo macaamiisha ka caawiya inay helaan hanti ku habboon baahidooda iyo miisaaniyaddooda. 
    Ahmed wuxuu maamulaa 24 hanti, wuxuuna ku dadaalaa inuu bixiyo adeeg lagu kalsoonaan karo, isla markaana u fududeeyo macaamiisha habka iibsashada iyo kiraysashada guryaha.

    `,
  },
];

const Home = () => {
  const navigat = useNavigate();

  const aboutUs = () => {
    navigat("/about");
  };

  const hanti = () => {
    navigat("/properties");
  };

  return (
    <>
      <div className="relative md:h-160 w-full overflow-hidden bg-white shadow-lg">
        {/* Hero Image */}
        <img
            src="/images/home.png"
            alt="Nagu saabsan"
            className="
          block
          h-[500px]
          w-full
          object-cover
          object-center
          sm:h-[550px]
          md:h-[500px]
          lg:h-[650px]
          "
        />

        {/* Content Area */}
        <div className="absolute inset-0 flex items-center">
          {/* Gradient */}
          <div
              className=" absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white
            via-white/90 to-transparent
            sm:w-[95%]
            md:w-[80%]
            lg:w-[75%]
          "
          />

          {/* Text */}
          <div
            className="relative w-full mb-20 px-10 pt-25 mt-8
            sm:w-[80%]
            sm:px-8
            md:w-[65%]
            md:px-12
            lg:w-[55%]
            lg:px-16
            "
          >
            <h1
                className="mt-2 text-4xl font-bold leading-tight text-gray-900
              sm:text-3xl
              md:text-4xl
              lg:text-6xl"
            >
              Hel Gurigaaga Riyada.
            </h1>

            <p
              className=" mt-4 max-w-xl text-xl leading-6 text-gray-800 sm:text-sm sm:leading-7 md:text-lg"
            >
              Waxaan kaa caawinaynaa inaad hesho guri ku habboon baahidaada,
              miisaaniyaddaada iyo goobta aad jeceshahay.
            </p>
            <div className="flex items-center gap-8 mt-6 ">
              <button
                className="bg-orange-500 py-2 px-6 rounded-2xl text-2xl  text-white cursor-pointer"
                onClick={aboutUs}
              >
                About Us
              </button>
              <button
                className="bg-orange-500 py-2 px-6 rounded-2xl text-2xl text-white cursor-pointer"
                onClick={hanti}
              >
                Properties
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* properties featured */}

      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-orange-50 to-rose-100 px-4 py-8">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <div className="mt-10 mb-5">
            <h2 className="text-2xl text-gray-900 font-bold sm:text-xl md:text-2xl lg:text-2xl">
              Hantida La Heli Karo
            </h2>
          </div>

          {/* properties list */}

          <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
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

          {/* {wax qabad} */}
          <div className="mt-10">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Hanti */}
              <div className="flex min-h-[180px] flex-col items-center justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 sm:h-14 sm:w-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    fill="#F19E39"
                  >
                    <path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
                  </svg>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    1,000+
                  </p>
                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    Hanti
                  </p>
                </div>
              </div>

              {/* La iibiyey */}
              <div className="flex min-h-[180px] flex-col items-center justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 sm:h-14 sm:w-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    fill="#F19E39"
                  >
                    <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z" />
                  </svg>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    400+
                  </p>
                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    La iibiyey
                  </p>
                </div>
              </div>

              {/* Wakiillo */}
              <div className="flex min-h-[180px] flex-col items-center justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 sm:h-14 sm:w-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    fill="#F19E39"
                  >
                    <path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-593-87q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z" />
                  </svg>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    6+
                  </p>
                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    Wakiil
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex min-h-[180px] flex-col items-center justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 sm:h-14 sm:w-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    fill="#F19E39"
                  >
                    <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm410-350q70-70 70-170t-70-170q-70-70-170-70t-170 70q-70 70-70 170t70 170q70 70 170 70t170-70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
                  </svg>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    10+
                  </p>
                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    Khibrad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* maxa nagu dooraneysa? */}
          <div className="mt-8">
            <div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-900 md:text-2xl lg:text-4xl">
                Maxaad Nagu Dooraneysa?
              </h1>
            </div>

            {/* qodobo */}

            <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 px-4 py-10 text-white sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
              {/* 01 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                  01
                </div>

                <div>
                  <h2 className="font-semibold sm:text-lg">Guryo La Hubiyay</h2>

                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Waxaan ku dadaalnaa inaan ku tusno guryo xogtooda iyo
                    xaaladdooda la xaqiijiyay.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                  02
                </div>

                <div>
                  <h2 className="font-semibold sm:text-lg">
                    Wakiillo Khibrad Leh
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Kooxdayada wakiillada waxay kaa caawinayaan inaad si fudud u
                    hesho hantida kugu habboon.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                  03
                </div>

                <div>
                  <h2 className="font-semibold sm:text-lg">Adeeg Degdeg ah</h2>

                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Waxaan kuu fududeyneynaa raadinta, booqashada iyo helitaanka
                    gurigaaga.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                  04
                </div>

                <div>
                  <h2 className="font-semibold sm:text-lg">
                    Doorasho Ballaaran
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Waxaad ka heli kartaa guryo kala duwan oo ku habboon
                    miisaaniyado iyo baahiyo kala duwan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* wakiil */}
          <div className=" mt-10">
            <h1 className=" text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wakiilladayada
            </h1>
          </div>
          <div className=" grid max-w-7xl mt-10 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="overflow-hidden  rounded-2xl bg-white p-4 shadow-md"
              >
                {/* image */}

                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="h-72 w-full object-cover"
                  />
                </div>

                {/* Content */}

                <div className="px-4 pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {agent.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-500">
                        📍 {agent.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-medium text-gray-600">
                        🏚️ {agent.properties}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between px-4 pt-4 ">
                    <div>
                      <p className="text-lg font-medium text-gray-600">
                        experience {agent.experience}
                      </p>
                    </div>
                    <div>
                      <span className="text-yellow-500">{agent.review}</span>
                    </div>
                  </div>

                  {/* Buttons */}

                  <div className="mt-5 flex items-center justify-center">
                    <Link to={`/agents/${agent.id}`}>
                      <button className=" rounded-full bg-black p-4 px-16 text-sm font-medium text-white transition hover:bg-gray-800 cursor-pointer">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidee Ayuu U Shaqeeyaa? */}

          <div className="mt-8">
            <div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-900 md:text-2xl lg:text-4xl">
               Sidee Ayuu U Shaqeeyaa?
              </h1>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl  bg-gradient-to-r from-indigo-950 via-purple-900 to-indigo-950 px-4 py-10 text-white sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {/* 01 */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold sm:text-lg">Raadi</h2>

                <p className="mt-1 text-sm leading-6 text-gray-200">
                  Raadi guri ku habboon goobta iyo miisaaniyaddaada.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z" />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold sm:text-lg">Dooro</h2>

                <p className="mt-1 text-sm leading-6 text-gray-200">
                  Eeg faahfaahinta guryaha oo dooro midka aad jeceshahay.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M640-520v-120H520v-80h120v-120h80v120h120v80H720v120h-80Zm158 400q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold sm:text-lg">La Xiriir Wakiilka</h2>

                <p className="mt-1 text-sm leading-6 text-gray-200">
                  La xiriir wakiilka si aad u hesho xog dheeraad ah ama aad u
                  ballansato booqasho.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold sm:h-14 sm:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
                </svg>
              </div>

              <div>
                <h2 className="font-semibold sm:text-lg">Heshiis Samee</h2>

                <p className="mt-1 text-sm leading-6 text-gray-200">
                  Marka aad hesho guriga saxda ah, waxaan kaa caawinaynaa
                  tallaabooyinka xiga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
