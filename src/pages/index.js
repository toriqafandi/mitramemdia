import React from 'react'
// import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import imageData from '../../public/assets/data/imageSlider.json'
import Typed from "react-typed";
import Image from "next/image";
import Apa from "@/components/Apa";
import OurProjects from "@/components/OurProjects";
import Clients from "@/components/Clients";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from 'swiper/modules';


export default function Home() {
  return (
    <>
    <section>
      <div className="smallPhone:mt-12">
      <Swiper 
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          imageData.map((each, index) => (
            <SwiperSlide  key={index} className="flex justify-center md:items-center items-start relative">
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
                <Image 
                    src={'/assets/images/hero/'+each.path}
                    width={400}
                    height={24}
                    priority={true}
                    alt="Logo Mitramedia Advertising" 
                    className="w-full h-[50%] Laptop:h-screen aspect-auto"
                    quality={100}
                  />
            </SwiperSlide>
          ))
        }
      </Swiper>
        <h1 className="absolute text-left font-bold text-xl bold text-white z-[3] uppercase top-[12%] w-[50%] inset-x-[10%] Laptop:top-[35%] Laptop:text-6xl">Advertising outdoor & indoor solution</h1>
        <p className="absolute top-[23%] inset-x-[10%] text-left text-sm bold text-white z-[3] capitalize w-[75%] leading-6 Laptop:top-[70%] Laptop:text-2xl">Menyediakan jasa pembuatan & pemasangan seperti <Typed className='bg-white text-black uppercase p-2 font-extrabold' strings={['Pembuatan Brosur', 'Letter Timbul', 'Mobil Branding', 'Billboard & Reklame', 'Neon Box & LED Box,', 'Banner']} typeSpeed={140} backSpeed={140} loop/></p>
        <button className='font-medium absolute bg-mainColor rounded-full capitalize z-[3] px-4 py-2 left-[10%] top-[32%] text-sm Laptop:text-2xl text-white Laptop:top-[80%]'>hubungi kami</button>
      </div>
    </section>
    <Apa />
    <OurProjects />
    <Clients />
    </>
  )
}
