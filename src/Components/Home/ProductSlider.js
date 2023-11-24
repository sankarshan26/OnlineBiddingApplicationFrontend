import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {banner} from "../../Data/Trending";
import "swiper/css";

function ProductSlider() {
  // console.log(data);
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-[95%] md:w-[80%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {banner.map(function (item) {
            return (
              <SwiperSlide>

                <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={item.backgroundimageUrl}
                    alt="noimg"
                  />
                </div>
                
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
