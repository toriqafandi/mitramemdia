import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { FaPhone, FaMapMarker, FaMailBulk } from 'react-icons/fa'

const OpenStreetMap = dynamic(() => import('../../components/OpenStreetMap'), {
  ssr: false,
})

const index = () => {
  const params = { lat:-7.3000424, lng:112.765686 } 
  return (
    <section id='contact-us' className='bg-gray-200 pt-28 pb-14'>
      <div className='smallPhone:mx-8 m-auto shadow-lg rounded-md bg-white Laptop:container'>
        <div className="grid Laptop:grid-cols-2 gap-5 p-6">
          <div className='font-normal text-base grid grid-cols-1'>
            <div>
              <p>
                Untuk pertanyaan atau permintaan dapat dilakukan dengan menghubungi kami melalui telepon, email, atau kunjungi office dan workshop kami dibawah ini.
              </p>
            </div>
            <div className='py-3'>
              <div className='flex justify-normal items-center'>
                <div className='p-1'>
                  <FaMapMarker/>
                </div>
                <div className='p-2'>
                  <p>Nginden Semolo 38-40, The Mezzanine A15 Kel. Nginden Jangkungan, Kec. Sukolilo, Kota Surabaya - Jawa Timur 60118</p>
                </div>
              </div>

              <div className='flex justify-normal items-center'>
                <div className='p-1'>
                  <FaPhone/>
                </div>
                <div className='p-2'>
                  <p className=''>0822-1328-0698 (telp/WA)</p>
                </div>
              </div>

              <div className='flex justify-normal items-center'>
                <div className='p-1'>
                  <FaMailBulk/>
                </div>
                <div className='p-2'>
                  <p className=''>adm.mitramedia@gmail.com</p>
                </div>
              </div>

              <div className='flex justify-normal items-center'>
                <div className='p-1'>
                  <FaMailBulk/>
                </div>
                <div className='p-2'>
                  <p className=''>adm3.mitramedia@gmail.com</p>
                </div>
              </div>             

            </div>
          </div>
          <div className='font-normal text-base text-center'>
            <div>
              <p>Dapatkan Penawaran Terbaik Melalui Nomor dibawah Ini :</p>
              <h1 className='text-mColor text-3xl font-extrabold Laptop:text-5xl py-4'>0822-1328-0698</h1>
              <Link href={'tel:+6282213280698'} className='Laptop:hidden'>
                <button className='font-medium bg-mainColor rounded-lg capitalize px-4 py-2 text-sm Laptop:text-2xl text-white'>hubungi kami</button>
              </Link>
              <Link href={'https://wa.me/6285732403855'} className='smallPhone:hidden'>
                <button className='font-medium bg-mainColor rounded-lg capitalize px-4 py-2 text-sm Laptop:text-2xl text-white'>hubungi kami</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='px-6 pb-6'>
          <OpenStreetMap {...params} /> 
        </div>

      </div>
    </section>
  )
}

export default index