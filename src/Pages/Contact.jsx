import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    Magac: "",
    number: "",
    Mawduuca: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.Magac === "" ||
      formData.number === "" ||
      formData.Mawduuca === "" ||
      formData.message === ""
    ) {
      alert("fadlan form-ka si sax ah u buuxi");
      return;
    }
    setFormData({
      Magac: "",
      number: "",
      Mawduuca: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <>
      <div className="relative sm:h-160 w-full overflow-hidden bg-white shadow-lg">
        {/* Hero Image */}
        <img
          src="/images/contact.png"
          alt="Nagu saabsan"
          className="block h-[500px] w-full object-cover object-center sm:h-[650px] md:h-[500px] lg:h-[650px]"
        />

        {/* Content Area */}
        <div className="absolute inset-0 flex items-center">
          {/* Gradient */}
          <div
            className="
          absolute inset-y-0 left-0
          w-full
          bg-gradient-to-r
          from-white
          via-white/90
          to-transparent
          sm:w-[95%]
          md:w-[80%]
          lg:w-[85%]
        "
          />

          {/* Text */}
          <div
            className=" relative w-full mb-20 px-5 pt-10 sm:w-[80%]
          sm:px-8
          md:w-[65%]
          md:px-12
          lg:w-[55%]
          lg:px-16 "
          >
            <h1
              className=" mt-2 text-2xl font-bold leading-tight text-gray-900
            sm:text-3xl
            md:text-4xl
            lg:text-5xl"
            >
              Nala Soo Xiriir.
            </h1>

            <p
              className=" mt-4 max-w-xl text-base leading-6 text-gray-800
            sm:text-sm
            sm:leading-7
            md:text-lg"
            >
              Waxaan diyaar u nahay inaan kaa caawino helitaanka gurigaaga ku
              habboon. Nala soo xiriir maanta si aad u hesho macluumaad dheeraad
              ah.
            </p>
          </div>
        </div>
      </div>

      {/* contact side bar */}
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-orange-50 to-rose-100  py-8">
        <div className="grid w-full grid-cols-1 gap-6 p-10 lg:grid-cols-2">
          <aside className="bg-white rounded-2xl p-6 shadow-lg lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Nala Soo Xiriir.
            </h2>

            {/* Phone */}
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F19E39"
                >
                  <path d="M631.5-532.5Q620-544 620-561t11.5-28.5Q643-601 660-601t28.5 11.5Q700-578 700-561t-11.5 28.5Q677-521 660-521t-28.5-11.5ZM798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Naga Soo Wac</h3>

                <p className="mt-1 text-sm text-gray-600">+252 61 4596290</p>

                <p className="text-sm text-gray-600">+252 61 0000000</p>
              </div>
            </div>

            {/* email */}
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F19E39"
                >
                  <path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Nagala so xiriir
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  info@ad8.com
                </p>

                <p className="text-sm text-gray-600">
                  support@ad8.com
                </p>
              </div>
            </div>

            {/* location */}
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F19E39"
                >
                  <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Xarunteena</h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Taleex, Maka Al Mukarama Highway <br />
                  Mogadishu, Somalia
                </p>
              </div>
            </div>

            {/* location */}
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F19E39"
                >
                  <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm-99.5 291.5Q275-137 226-186t-77.5-114.5Q120-366 120-440t28.5-139.5Q177-645 226-694t114.5-77.5Q406-800 480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80q-74 0-139.5-28.5ZM678-242q82-82 82-198t-82-198q-82-82-198-82t-198 82q-82 82-82 198t82 198q82 82 198 82t198-82ZM480-440Z" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Saacadaha shaqada
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Sabti - Khamiis: 8:00 AM - 5:00 PM <br />
                  Mogadishu, Somalia
                </p>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Fadlan Foomkan Buuxi
            </h2>

            {/* Form */}
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Magaca */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Magacaaga
                  </label>

                  <input
                    type="text"
                    name="Magac"
                    placeholder="Fadlan geli magacaaga"
                    value={formData.Magac}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                {/* Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Number-kaaga
                  </label>

                  <input
                    type="tel"
                    name="number"
                    placeholder="Fadlan geli number-kaaga"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                {/* Mawduuca */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Mawduuca
                  </label>

                  <input
                    type="text"
                    name="Mawduuca"
                    placeholder="Fadlan geli mawduuca"
                    value={formData.Mawduuca}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                {/* Farriinta */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Farriintaada
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Halkan ku qor farriintaada..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98]"
                >
                  Farriin U Dir
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
