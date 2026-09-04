

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-rose-100 px-6 py-12">
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <h1 className="text-[120px] font-extrabold leading-none text-orange-500 sm:text-[160px]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
          Waan ka xunnahay, bogga aad raadineyso lama helin. Waxaa laga yaabaa
          in link-ga uu khaldan yahay ama bogga la tirtiray.
        </p>


        {/* Small text */}
        <p className="mt-8 text-sm text-gray-500">AD8 Real Estate</p>
      </div>
    </div>
  );
};

export default NotFound;
