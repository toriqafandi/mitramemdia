import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import ClientsImg from '../../public/assets/data/clients.json'
import Image from 'next/image'

const Clients = () => {
  return (
    <>
    <section className='bg-gray-100 text-mColor'>
        <div className='px-4 m-auto Laptop:container Laptop:px-32'>
          <div className='grid grid-cols-1 Laptop:grid-cols-3 py-3'>
            <div className='text-center text-2xl font-bold uppercase px-4 items-center Laptop:flex Laptop:text-right Laptop:text-5xl'>
              <div className='smallPhone:hidden'></div>
              <div>
                <h1 className=''>our clients</h1>
              </div>
            </div>
            <div className='py-2 font-bold uppercase Laptop:col-span-2 '>
              {
                <Swiper
                  slidesPerView={4}
                  centeredSlides={true}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  {
                    ClientsImg.map((value, idx) => (
                      <SwiperSlide key={idx} className="grid content-center">
                        <Image 
                            src={'/assets/images/clients/'+value.path}
                            width={600}
                            height={50}
                            priority={true}
                            alt="Logo Mitramedia Advertising" 
                            className="aspect-auto w-full"
                            quality={100}
                        />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              }
            </div>
          </div>
                {/* <div className='w-[20%] flex items-center justify-end text-right p-3'>
                    <h1 className='items-end font-bold text-5xl uppercase'>
                      our Clients  
                    </h1>
                </div>
                <div className='w-[80%] flex items-center overflow-hidden p-3'>
                    {
                      <Swiper
                      slidesPerView={4}
                      // centeredSlides={true}
                      spaceBetween={30}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                    >
                      {
                        ClientsImg.map((value, idx) => (
                          <SwiperSlide key={idx} className="grid content-center">
                            <Image 
                            src={'/assets/images/clients/'+value.path}
                            width={400}
                            height={24}
                            priority={true}
                            alt="Logo Mitramedia Advertising" 
                            className="aspect-auto w-3/4 p-1 m-5"
                            quality={100}
                          />
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
                    }
                </div> */}
        </div>
    </section>
    </>
  )
}

export default Clients