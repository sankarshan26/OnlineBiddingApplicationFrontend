import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// import required modules
import { Pagination } from "swiper/modules";

export default function TopDeals() {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-[95%] md:w-[80%]">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide>
          <div className="min-w-[200px]">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <Link to="/">
                <img
                  className="p-3 rounded-t-lg"
                  src="https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg"
                  alt="product "
                />
              </Link>
              <div className="px-5 pb-5">
                <Link to="/">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                  <span className=" flex items-center justify-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                    <span>5.0</span>
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1 inline"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="">Base Price</span> <span>:</span>
                  <span className="text-2xl font-bold text-gray-900 ">$599</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="">Current Bid</span> <span>:</span>
                  <span className="text-2xl font-bold text-gray-900 ">$599</span>
                </div>

                <div className="flex items-center justify-center mt-2">
                  <Link
                    to="/"
                    className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Bid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
