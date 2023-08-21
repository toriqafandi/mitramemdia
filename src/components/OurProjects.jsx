import React from 'react'
import projects from '../../public/assets/data/projects.json'
import Image from 'next/image'

const OurProjects = () => {
  return (
    <>
    <section className='py-14'>
        <div className='w-full'>
            <div className='container m-auto px-32 py-5 text-center uppercase font-extrabold text-4xl'>
                <h1>Our Projects</h1>
            </div>
            <div className='container m-auto px-32 py-5'>
                <div className='grid grid-cols-4'>
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
            </div>
        </div>
    </section>
    </>
  )
}

export default OurProjects