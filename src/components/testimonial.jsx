import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
SwiperCore.use([Navigation]);

const Testimonial = () => {
  return (
    <>
      <div className="mt-16">
        <div className="h-auto text-xl font-bold tracking-widest text-sky-500 mt-8 text-center">
          TESTIMONIAL
        </div>
        <div className="h-auto text-3xl m-4 md:text-4xl font-semibold text-center font-serif">
          Happy Clients
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="flex flex-col border-2 mx-auto h-[440px] mt-4 w-[350px] border-grey-900 shadow-2xl transition duration-300 ease-in-out transform scale-100 hover:scale-110">
              <div className="w-24 mt-16 h-24 mx-auto  ">
                <img src="/img/Puneet.png" className="rounded-full" alt="" />
              </div>
              <div className="w-[270px] mt-10 text-center text-base mt-2 mx-auto">
                Exceptional service! GoRide Rentals provided us with a top-notch
                car rental experience. From booking to drop-off, everything was
                smooth and convenient. Highly recommended for hassle-free
                travel!
              </div>
              <div className="name text-sky-600 mx-auto font-semibold text-xl mt-5">
                Puneet Kumar
              </div>
              <div className=" mx-auto">Research Analyst</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col border-2 mx-auto h-[440px] mt-4 w-[350px] border-grey-900 shadow-2xl transition duration-300 ease-in-out transform scale-100 hover:scale-110">
              <div className="w-24 mt-16 h-24 mx-auto  ">
                <img src="/img/Devraj.png" className="rounded-full" alt="" />
              </div>
              <div className="w-[270px] mt-10 text-center text-base mt-2 mx-auto">
                Outstanding service! GoRide Rentals exceeded our expectations
                with their impeccable vehicles and seamless rental process. A
                must-try for anyone seeking quality and convenience.
              </div>
              <div className="name text-sky-600 mx-auto font-semibold text-xl mt-5">
                Devraj Aanand
              </div>
              <div className=" mx-auto">Web Devloper</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col border-2 mx-auto h-[440px] mt-4 w-[350px] border-grey-900 shadow-2xl transition duration-300 ease-in-out transform scale-100 hover:scale-110">
              <div className="w-24 mt-16 h-24 mx-auto  ">
                <img src="/img/Prakash.png" className="rounded-full" alt="" />
              </div>
              <div className="w-[270px] mt-10 text-center text-base mt-2 mx-auto">
                Fantastic experience! GoRide Rental&apos;s friendly staff and
                well-maintained fleet made our trip enjoyable and worry-free.
                Will definitely choose them again for our next adventure!
              </div>
              <div className="name text-sky-600 mx-auto font-semibold text-xl mt-5">
                Prakash Mishra
              </div>
              <div className=" mx-auto">Software Developer</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col border-2 mx-auto h-[440px] mt-4 w-[350px] border-grey-900 shadow-2xl transition duration-300 ease-in-out transform scale-100 hover:scale-110">
              <div className="w-24 mt-16 h-24 mx-auto  ">
                <img src="/img/Sumit.png" className="rounded-full" alt="" />
              </div>
              <div className="w-[270px] mt-10 text-center text-base mt-2 mx-auto">
                Impressive service! GoRide Rental&apos;s transparent pricing and
                excellent customer support made renting a car a breeze. Highly
                satisfied with their professionalism and reliability.
              </div>
              <div className="name text-sky-600 mx-auto font-semibold text-xl mt-5">
                Sumit Jakhar
              </div>
              <div className=" mx-auto">Marwadi</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
