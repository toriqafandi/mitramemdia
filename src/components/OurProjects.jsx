import React, { useState } from 'react'
import projects from '../../public/assets/data/projects.json'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const OurProjects = () => {
  return (
    <>
    <section className='py-5 Laptop:py-8'>
        <div className='w-full'>
            <div className='m-auto text-center uppercase font-extrabold Laptop:container Laptop:px-32 Laptop:py-5 Laptop:text-4xl'>
                <h1>Our Projects</h1>
            </div>
            <div className='px-5 py-5 m-auto Laptop:container Laptop:px-32'>
                <div className='smallPhone:hidden grid grid-cols-4'>
                {
                    projects.map((value, idx) => (
                        <div key={idx} onClick={() => openModal(val)} className='h-auto max-w-full cursor-pointer'>
                            <Image 
                                src={'/assets/images/projects/'+value.path}
                                width={400}
                                height={24}
                                priority={true}
                                alt="Logo Mitramedia Advertising" 
                                className="aspect-auto"
                                quality={100}
                            />
                        </div>
                    ))
                }
                </div>
                {/* Phone */}
                <div className='Laptop:hidden'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {
                            projects.map((value, idx) => (
                                <SwiperSlide key={idx}>
                                    <Image 
                                        src={'/assets/images/projects/'+value.path}
                                        width={400}
                                        height={24}
                                        priority={true}
                                        alt="Logo Mitramedia Advertising" 
                                        className="aspect-auto"
                                        quality={100}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurProjects