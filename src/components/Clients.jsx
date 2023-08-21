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
    <section className='bg-gray-300 text-mColor'>
        <div className='container m-auto px-32'>
            <div className='flex justify-between'>
                <div className='w-[20%] flex items-center justify-end text-right p-3'>
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
                    /* {
                      ClientsImg.map((value, idx) => (
                        <div key={idx} className='p-1 m-5'>
                          <Image 
                            src={'/assets/images/clients/'+value.path}
                            width={400}
                            height={24}
                            priority={true}
                            alt="Logo Mitramedia Advertising" 
                            className="aspect-auto w-full"
                            quality={100}
                          />
                        </div>
                      ))
                    } */
                    }
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Clients