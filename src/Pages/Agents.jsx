import { Link } from "react-router";
export const agents = [
  {
    id: 1,
    name: "Ahmed Hassan",
    image: "/images/agent1.png",
    role: "Senior Real Estate Agent",
    location: "Hodan, Mogadishu",
    email: "ahmed@gmail.com",
    properties: 24,
    review: "★★★★☆",
    experience: "8 Years",
    specialization: "Houses & Comercial",
    description: `
    Ahmed Hassan waa Wakiil Sare oo Dhul iyo Guryo ah, wuxuuna leeyahay in ka badan 5 sano oo waayo-aragnimo ah oo uu ku leeyahay suuqa guryaha iyo hantida ma-guurtada ah. 
    Wuxuu si gaar ah ugu takhasusay guryaha iyo goobaha ganacsiga, isagoo macaamiisha ka caawiya inay helaan hanti ku habboon baahidooda iyo miisaaniyaddooda. 
    Ahmed wuxuu maamulaa 24 hanti, wuxuuna ku dadaalaa inuu bixiyo adeeg lagu kalsoonaan karo, isla markaana u fududeeyo macaamiisha habka iibsashada iyo kiraysashada guryaha.

    `,
  },
  {
    id: 2,
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
    id: 3,
    name: "xalimo cabdi",
    image: "/images/agent3.jpg",
    role: "junior Real Estate Agent",
    location: "karaan, Mogadishu",
    email: "xalimo@gmail.com",
    properties: 15,
    review: "★★★☆",
    experience: "2 Years",
    specialization: "Houses",
    description: `
    Xalimo Cabdi waa Wakiil Dhul iyo Guryo ah oo leh 2 sano oo waayo-aragnimo ah oo ku saabsan suuqa hantida ma-guurtada ah. 
    Waxay si gaar ah ugu takhasustay guryaha, iyadoo macaamiisha ka caawisa inay helaan guryo ku habboon baahidooda iyo miisaaniyaddooda. 
    Xalimo waxay maamushaa 15 hanti, waxayna ku dadaashaa inay bixiso adeeg hufan, daacad ah, oo lagu kalsoonaan karo, iyadoo ka shaqaynaysa in macaamiisheeda ay helaan guri ku habboon.

    `,
  },
  {
    id: 4,
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
    id: 5,
    name: "geedi warsame",
    image: "/images/agent5.jpg",
    role: "Senior Real Estate Agent",
    location: "deyniile, Mogadishu",
    email: "geediwarsame25@gmail.com",
    properties: 20,
    review: "★★★",
    experience: "5 Years",
    specialization: "Houses & Comercial",
    description: `
    Geedi Warsame waa Wakiil Sare oo Dhul iyo Guryo ah, wuxuuna leeyahay 5 sano oo waayo-aragnimo ah oo ku saabsan suuqa hantida ma-guurtada ah. 
    Wuxuu si gaar ah ugu takhasusay guryaha iyo goobaha ganacsiga, isagoo macaamiisha ka caawiya inay helaan hanti ku habboon baahidooda iyo miisaaniyaddooda. 
    Geedi wuxuu maamulaa 20 hanti, wuxuuna ku dadaalaa inuu macaamiishiisa siiyo adeeg hufan, daacad ah, oo lagu kalsoonaan karo, si ay si fudud ugu helaan hanti ku habboon baahidooda.

    `,
  },
  {
    id: 4,
    name: "farax culusow",
    image: "/images/agent6.jpg",
    role: "Senior Real Estate Agent",
    location: "yaqshiid, Mogadishu",
    email: "farax@gmail.com",
    properties: 10,
    review: "★★☆",
    experience: "4 Years",
    specialization: "Houses & Comercial",
    description: `
    Farax Culusow waa Wakiil Sare oo Dhul iyo Guryo ah, wuxuuna leeyahay 4 sano oo waayo-aragnimo ah oo ku saabsan suuqa hantida ma-guurtada ah. 
    Wuxuu si gaar ah ugu takhasusay guryaha iyo goobaha ganacsiga, isagoo macaamiisha ka caawiya inay helaan hanti ku habboon baahidooda iyo miisaaniyaddooda. 
    Farax wuxuu maamulaa 10 hanti, wuxuuna ku dadaalaa inuu bixiyo adeeg hufan, daacad ah, oo lagu kalsoonaan karo, isagoo macaamiisha ka caawiya inay si fudud u helaan hanti ku habboon baahidooda.

    `,
  },
];
const Agents = () => {
  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 text-center">
          <h1 className=" text-3xl font-bold text-gray-900 md:text-4xl  ">
            Wakiilladayada
          </h1>
          <p className="text-sm mt-4 md:text-xl text-gray-700 text-center max-w-2xl mx-auto">
            La kulan wakiilladayada khibradda leh oo diyaar u ah inay kaa
            caawiyaan helitaanka guri ama hanti ganacsi oo ku habboon
            baahidaada. Wakiil kasta wuxuu leeyahay khibrad iyo aqoon ku saabsan
            suuqa hantida ma-guurtada ah.
          </p>
        </div>

        {/* agents */}

        <div className=" grid max-w-7xl gap-6 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
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
                      🧠 {agent.experience}
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
      </div>
    </div>
  );
};

export default Agents;
