import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typed from 'react-typed'

import { FaFacebookSquare, FaTwitter, FaInstagram, FaWhatsapp, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <footer className='bg-black text-white px-2 w-full'>
        <div className='m-auto py-4 flex flex-col flex-wrap Laptop:px-28 Laptop:container Laptop:grid Laptop:grid-cols-4 Laptop:gap-4'>
            <div className='mt-4 text-center'>
                <Image src={`/assets/images/mitramedia2.png`}
                  width={400}
                  height={24}
                  priority={true}
                  alt="Logo Mitramedia Advertising" 
                  className="w-full aspect-auto"
                  quality={100}
                />
                <h1 className='italic text-xl my-8'>
                    <blockquote>
                        <Typed className='' strings={['Your Trust Ads Partner.']} typeSpeed={140} backSpeed={70} loop />
                    </blockquote>
                </h1>
            </div>
            <div className='mt-4 px-8'>
                <h1 className='text-2xl'>Product Services</h1>
                <div className='py-4 text-sm'>
                    <ul>
                        <li>Letter Timbul</li>
                        <li>Billboard / Baliho</li>
                        <li>Neon Box / Led Box</li>
                        <li>Sign Board / PNT</li>
                        <li>Branding Mobil</li>
                        <li>Escalator Branding</li>
                        <li>Event Booth</li>
                        <li>Wall Branding / Stiker</li>
                        <li>Vinyl</li>
                        <li>Pajak & Perijinan</li>
                    </ul>
                </div>
            </div>
            <div className='mt-4 px-8'>
                <h1 className='text-2xl'>Find us on</h1>
                <div className='flex justify-normal text-4xl py-4'>
                    <div className='px-2'>
                        <Link href={'#'}>
                            <FaFacebookSquare /> 
                        </Link>
                    </div>
                    <div className='px-2'>
                        <Link href={'#'}>
                            <FaTwitter /> 
                        </Link>
                    </div>
                    <div className='px-2'>
                        <Link href={'#'}>
                            <FaInstagram /> 
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mt-4 px-8'>
                <h1 className='text-2xl'>Head Office</h1>
                <div className='py-4 text-sm'>
                    <p className=''>Nginden Semolo 38-40, The Mezzanine A15 Kel. Nginden Jangkungan, Kec. Sukolilo, Kota Surabaya Jawa Timur 60118</p>
                    <div className='my-2 text-sm'>
                        <div className='flex justify-normal items-center'>
                            <div className='p-2'>
                                <FaWhatsapp/>
                            </div>
                            <div className='p-2'>
                                <p className=''>0822-1328-0698 (telp/WA)</p>
                            </div>
                        </div>

                        <div className='flex justify-normal items-center'>
                            <div className='p-2'>
                                <FaPhone/>
                            </div>
                            <div className='p-2'>
                                <p className=''>(031) 58253549 (Telp)</p>
                            </div>
                        </div>

                        <div className='flex justify-normal items-center'>
                            <div className='p-2'>
                                <FaMailBulk/>
                            </div>
                            <div className='p-2'>
                                <ul>
                                    <li>adm.mitramedia@gmail.com</li>
                                    <li>adm3.mitramedia@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center text-xs italic py-2'>
            <p>© 2023, Mitra Media. All rights reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer