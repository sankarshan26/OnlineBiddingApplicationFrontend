import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import { useDispatch, useSelector, shallowEqual } from "react-redux"; // for putting something or changing some value in the store we use useDispatch
// for getting some value from the store we use useSelector
import { Pagination } from "swiper/modules";
import { changeDetailedView } from "../../store/ProductDetailedViewSlice";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function TopDeals({ heading }) {
  const activeUser = useSelector(
    (state) => state.loggedin_userDetails,
    shallowEqual
  );

  const dispatch = useDispatch();
  const [data, SetProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://oblinebidappbackend.onrender.com/getallproducts")
      .then((result) => SetProducts(result.data))
      .catch((err) => console.log(err));
  }, []);

  async function updateBid(activeProduct, activeUser) {
    await Axios.put("https://oblinebidappbackend.onrender.com/updatebid", {
      id: activeProduct.id,
      name: activeProduct.name,
      baseprice: activeProduct.baseprice,
      image: activeProduct.image,
      images: activeProduct.images,
      TrendingDeal: activeProduct.TrendingDeal,
      TopDeal: activeProduct.TopDeal,
      description: activeProduct.description,
      currPrice: activeProduct.currPrice + 10,
      Topbidder: activeUser.username,
      endDate: activeProduct.endDate,
      rating: activeProduct.rating,
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

      await Axios.get(
        "https://oblinebidappbackend.onrender.com/getallproducts"
      )
        .then((result) => SetProducts(result.data))
        .catch((err) => console.log(err));
  }

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div
        className="w-[95%] md:w-[80%] text-left text-3xl my-5"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        {heading}
      </div>
      <div className="w-[95%] md:w-[80%]">
        <Swiper
          slidesPerView={1}
          // centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            500: { slidesPerView: 2 },
            922: { slidesPerView: 3 },
            1320: { slidesPerView: 4 },
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <div
                  className="min-w-[250px]"
                  onClick={() => {
                    dispatch(
                      changeDetailedView({
                        id: item.id,
                        name: item.name,
                        rating: item.rating,
                        endDate: item.endDate,
                        baseprice: item.baseprice,
                        currPrice: item.currPrice,
                        Topbidder: item.Topbidder,
                        image: item.image,
                        images: item.images,
                        description: item.description,
                      })
                    );
                  }}
                >
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                    <Link to="/productdetails" className="flex justify-center">
                      <img
                        className="p-3 rounded-t-lg h-[200px] overflow-hidden"
                        src={item.image}
                        alt="product"
                      />
                    </Link>
                    <div className="px-5 pb-5">
                      <Link to="/productdetails">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">
                          {item.name}
                        </h5>
                      </Link>
                      <div className="flex items-center mt-2.5 mb-5">
                        <span className=" flex items-center justify-start gap-2 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 pl-2.5 pr-1 py-0.5 rounded">
                          <span>{item.rating}</span>
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
                      <div>
                        <Timer endDate={new Date(`${item.endDate}`)} />
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="">Base Price</span> <span>:</span>
                        <span
                          className="text-xl font-semibold text-gray-400 "
                          style={{ textDecoration: "line-through" }}
                        >
                          ${item.baseprice}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="">Current Bid</span> <span>:</span>
                        <span className="text-2xl font-bold text-gray-900 ">
                          ${item.currPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="">Top Bidder</span> <span>:</span>
                        <span className=" text-gray-900 ">
                          {item.Topbidder}
                        </span>
                      </div>

                      <div className="flex items-center justify-center mt-2">
                        <button
                          className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                          onClick={async () => {
                            if (item.Topbidder !== activeUser.username)
                              updateBid(item, activeUser);
                            
                          }}
                        >Bid Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
