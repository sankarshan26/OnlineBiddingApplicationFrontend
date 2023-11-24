import React, { useState } from "react";
import Navbar from "../NavigationBar/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeDetailedView } from "../../store/ProductDetailedViewSlice";
import Timer from "../Home/Timer";
import Footer from "../Footer/Footer";
import Axios from "axios";

function ProductDetails() {
  const dispatch = useDispatch();
  const activeProduct = useSelector(
    (state) => state.productdetailedview,
    shallowEqual
  );

  const activeUser = useSelector(
    (state) => state.loggedin_userDetails,
    shallowEqual
  );
  const [active_pic, setActive_pic] = useState(activeProduct.image);
  function handleClick() {
    console.log(activeProduct, " : Active Product Data in handle Click");
    dispatch(
      changeDetailedView({
        id: 101,
        name: "",
        rating: 5.0,
        endDate: "",
        description: "",
        baseprice: 350,
        currPrice: 400,
        image: "",
        images: [...["", "", "", ""]],
      })
    );
  }

  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleMoreInfoClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getTruncatedDescription = (description) => {
    const maxLength = 300;
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + "...";
  };

  async function updateBid(activeProduct, activeUser) {
    console.log(activeUser.username);
    dispatch(
      changeDetailedView({
        id: activeProduct.id,
        name: activeProduct.name,
        baseprice: activeProduct.baseprice,
        image: activeProduct.image,
        images: [...activeProduct.images],
        TrendingDeal: activeProduct.TrendingDeal,
        TopDeal: activeProduct.TopDeal,
        description: activeProduct.description,
        currPrice: activeProduct.currPrice + 10,
        Topbidder: activeUser.username,
        endDate: activeProduct.endDate,
        rating: activeProduct.rating,
      })
    );

    Axios.put("https://oblinebidappbackend.onrender.com/updatebid", {
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
  }

  // const description =
  //   "This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionalityThis is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality This is a product description with a lot of text to demonstrate the toggle functionality ";
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center my-4 lg:my-6">
        <div className="w-[95%] md:w-[80%] ">
          <Link
            to="/home"
            onClick={() => {
              handleClick();
            }}
          >
            <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-6 border-2 border-red-500 hover:border-transparent rounded-lg">
              Back
            </button>
          </Link>
          <div className="mt-4 flex flex-wrap justify-center items-start gap-6">
            <div className="w-[40%] min-w-[250px]  md:min-h-[80vh] flex flex-col items-center">
              <div className="h-[30vh] md:[40vh] lg:h-[50vh] w-[75%] flex justify-center items-center overflow-hidden">
                <img
                  src={`${active_pic}`}
                  className="aspect-saquare object-fit h-[100%]"
                  alt="productimage"
                />
              </div>
              <div className="h-[15%] flex justify-between mt-8">
                {activeProduct.images.map((item) => {
                  return (
                    <div
                      className={
                        item === active_pic
                          ? "inline w-[20%] h-[20%] p-[4px] border-2 border-blue-300 rounded-md"
                          : "inline w-[20%] h-[20%] p-[2px]"
                      }
                    >
                      <img
                        src={`${item}`}
                        alt="productimage"
                        className="w-[100%] h-[100%] aspect-square"
                        onClick={() => {
                          setActive_pic(item);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[80%] md:w-[50%] min-w-[300px] min-h-[500px] flex flex-col relative">
              <div className="">
                <h1 className="text-3xl font-semibold text-center">
                  {activeProduct.name}
                </h1>
              </div>

              <div className="mt-2 flex flex-wrap whitespace-nowrap justify-between px-4">
                <div className="flex items-center gap-1 mt-4 lg:mt-6">
                  <span className="text-xl">Base Price</span> <span>:</span>
                  <span
                    className="text-xl font-semibold text-gray-400 "
                    style={{ textDecoration: "line-through" }}
                  >
                    ${activeProduct.baseprice}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-4 lg:mt-6">
                  <span className="text-xl">Current Price</span> <span>:</span>
                  <span className="text-2xl font-bold text-gray-900 ">
                    ${activeProduct.currPrice}
                  </span>
                </div>
              </div>

              <div className="px-4 mt-4 lg:mt-6">
                <Timer endDate={new Date(activeProduct.endDate)} />
              </div>
              <div className="flex justify-between flex-wrap">
                <div className="flex items-center mt-4 lg:mt-6 px-4">
                  <span className="text-xl">Rating</span>{" "}
                  <span className="mx-2"> : </span>
                  <span className=" flex items-center justify-start gap-2 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 pl-2.5 pr-1 py-0.5 rounded">
                    <span className="text-base">{activeProduct.rating}</span>
                    <svg
                      className="w-6 h-4 text-yellow-300 mr-1 inline"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center mt-4 lg:mt-6 px-4">
                  <span className="text-xl whitespace-nowrap">Top Bidder</span>
                  <span className="mx-2"> : </span>
                  <span className="text-lg text-gray-700 font-semibold">
                    {activeProduct.Topbidder}
                  </span>
                </div>
              </div>
              <div className="product-description px-4 font-sans text-lg mt-4 lg:mt-6">
                {!showFullDescription && (
                  <p>{getTruncatedDescription(activeProduct.description)}</p>
                )}
                {showFullDescription && <p>{activeProduct.description}</p>}
                <button
                  onClick={handleMoreInfoClick}
                  className={`text-blue-500 text-lg ${
                    showFullDescription ? "active" : ""
                  }`}
                >
                  {showFullDescription ? "Hide Info" : "More Info..."}
                </button>
              </div>

              <div className="mt-4 lg:mt-8 flex items-center justify-center p-2">
                <button
                  onClick={() => {
                    // updating bid logic
                    if(activeProduct.Topbidder !== activeUser.username)
                    updateBid(activeProduct, activeUser);
                  }}
                >
                  <Link
                    to="/productdetails"
                    className="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium rounded-xl text-lg px-8 py-2.5 text-center "
                  >
                    Bid Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
