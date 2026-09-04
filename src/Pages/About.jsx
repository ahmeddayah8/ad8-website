const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 to-rose-100">
      <div className="relative h-160 w-full overflow-hidden bg-white shadow-lg ">
        {/* Hero Image */}
        <img
          src="/images/hero.png"
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
           className=" absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/90 to-transparent
          sm:w-[95%]
          md:w-[80%]
          lg:w-[85%]
         "
          />

          {/* Text */}
          <div
            className=" relative  w-full mb-20  pt-10 px-10
          sm:w-[80%]
          sm:px-8
          md:w-[65%]
          md:px-12
          lg:w-[55%]
          lg:px-16
        "
          >
            <span
              className=" block text-sm font-bold text-orange-500
              sm:text-base
              md:text-lg
            "
            >
              Nagu Saabsan
            </span>

            <h1 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Waxaan Dhisnaa Mustaqbal Wanaagsan.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-6 text-gray-800 sm:text-sm sm:leading-7 md:text-lg">
              Waxaan nahay shirkad real estate oo ku takhasustay iibka, kirada
              iyo maamulka guryaha. Waxaan u heellannahay inaan dadka ka caawino
              helitaanka hanti ku habboon baahidooda. Haddii ay tahay guri
              deegaan ah ama maalgashi caqli leh.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 grid w-full min-w-0 grid-cols-1 gap-6 sm:mt-7 md:gap-8 lg:mt-8 lg:grid-cols-2 lg:gap-10 ">
          <div className="min-w-0 w-full max-w-full flex-col justify-center p-8 sm:py-4 lg:flex lg:py-6">
            <h1
              className=" mb-2 text-2xl font-bold leading-tight text-gray-900
              sm:text-3xl
              md:text-4xl
              lg:text-5xl"
            >
              Sheekadeena
            </h1>
            <p className=" max-w-xl text-lg leading-6 text-gray-800
            sm:text-sm
            sm:leading-7
            md:text-lg"
            >
              Waxaa naloo aasaasay ujeeddo ah inaan ka dhigno raadinta iyo
              helitaanka guri mid fudud, hufan oo lagu kalsoonaan karo. Waxaan
              isku xirnaa dadka raadinaya guryo iyo milkiilayaasha doonaya inay
              iibiyaan ama kireeyaan hantidooda.
            </p>

            <div className="mt-10 grid w-full min-w-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
              {/* Hanti */}
              <div className="flex items-center  w-full flex-col justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px] sm:p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 sm:h-14 sm:w-14 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    fill="#F19E39"
                  >
                    <path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    1,000+
                  </p>

                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    Hanti
                  </p>
                </div>
              </div>

              {/* La iibiyey */}
              <div className="flex items-center w-full flex-col justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px] sm:p-4">
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

                <div>
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    400+
                  </p>

                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    La iibiyey
                  </p>
                </div>
              </div>

              {/* Wakiillo */}
              <div className="flex items-center w-full flex-col justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px] sm:p-4">
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

                <div>
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    6
                  </p>

                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    Wakiil
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center w-full flex-col justify-between rounded-xl border border-orange-100 bg-orange-200 p-5 sm:min-h-[210px] sm:p-4">
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

                <div>
                  <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                    10+ Sano
                  </p>

                  <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                    Khibrad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  Image */}
          <div className="min-w-0 w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-lg">
            <img
              src="/images/jiif.png"
              alt="Sheekadeenna"
              className="
            block
            h-64
            w-full
            max-w-full
            object-cover
            sm:h-60
            md:h-[400px]
            lg:h-[700px]
          "
            />
          </div>

          {/* Hadafkeenna */}
          <div className="min-w-0 w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-lg">
            <img
              src="/images/team.png"
              alt="Hadafkeenna"
              className="
      block
      h-64
      w-full
      max-w-full
      object-cover
      sm:h-80
      md:h-[400px]
      lg:h-[500px]
    "
            />
          </div>

          <div className="relative mb-6 flex flex-col justify-center sm:mt-6 sm:py-4 lg:-mt-2 lg:-ml-20 lg:py-6">
            <div className="w-full rounded-2xl bg-orange-500 p-4 sm:p-6 lg:max-w-md lg:p-8">
              <h1 className="font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl">
                Hadafkeenna
              </h1>

              <p className="mt-2 text-sm leading-6 text-gray-900 sm:text-base sm:leading-7 lg:text-lg">
                Inaan macaamiisheena siino adeeg hantiyeed oo tayo leh, daacad
                ah oo la isku halleyn karo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
