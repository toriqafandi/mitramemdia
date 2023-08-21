import dynamic from 'next/dynamic'
import React from 'react'

const OpenStreetMapAll = dynamic(() => import('../../components/OpenStreetMapAll'), {
    ssr: false,
  })

const index = () => {
  return (
    <>
    <section id='billboard-location' className='py-2 bg-heroWallpaper bg-black/30'>
        <div className="flex flex-col h-screen items-center justify-center my-14 p-2 z-0 text-black">
          <div className='py-6 text-2xl font-bold uppercase'>
            <h1>Our BillBoard Locations</h1>
          </div>
          <div>
            <OpenStreetMapAll/>
          </div>
        </div>
    </section>
    </>
  )
}

export default index