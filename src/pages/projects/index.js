import React, { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import projects from '../../../public/assets/data/projects.json'
import tabGallery from '../../../public/assets/data/tab-gallery.json'
import { Dialog, Transition, Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const index = () => {
  const[DataImg, setDataImg] = useState(projects)
  const[Choice, setChoice] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isParam, setIsParam] = useState({})


  function closeModal() {
    setIsOpen(false)
  }

  function openModal(data) {
    setIsParam(data)
    setIsOpen(true)
  }

  useEffect(() => {
    let data = []
    projects.map((item, idx) => {
      let eachTipe = item.id_tipe
      if(eachTipe === Choice){
        data.push(item)
      } else if (Choice === 0) {
        data.push(item)
      }
    })
    setDataImg(data)
  }, [Choice]);
  
  return (
    <>
    <section className="bg-gray-300">
      <div className="container m-auto p-28">
        <Tab.Group className="smallPhone:hidden my-8 w-[90%] m-auto">
          <Tab.List className="flex space-x-1 rounded-full bg-white p-1">
            {tabGallery.map((value, idx) => (
              <Tab
                onClick={()=>{setChoice(value.id_tipe)}} 
                key={idx}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-mColor text-white shadow'
                      : 'text-mColor hover:ring-2 hover:ring-offset-mColor hover:text-mColor'
                  )
                }
              >
                {value.name_tab}
              </Tab>
            ))}
          </Tab.List>          
        </Tab.Group>

        <div className='grid grid-cols-4 gap-1'>
        {
          DataImg.map((val, idx) => (
            <div key={idx} onClick={() => openModal(val)} className='h-auto max-w-full cursor-pointer'>
              <Image 
                src={'/assets/images/projects/'+val.path}
                width={400}
                height={24}
                priority={true}
                alt="Logo Mitramedia Advertising" 
                className="aspect-auto rounded-lg"
                quality={100}
              />
            </div>
          ))
        }
        </div>
      </div>
    </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300" 
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform rounded-2xl text-left align-middle shadow-xl transition-all Laptop:w-1/3">
                  <Image 
                    src={'/assets/images/projects/'+isParam.path}
                    width={400}
                    height={24}
                    priority={true}
                    alt="Logo Mitramedia Advertising" 
                    className="aspect-auto rounded-lg w-full"
                    quality={100}
                  />
                  {/* <div className="mt-2">
                    <Image 
                      alt='Galeri'
                      src={isParam.imageSrc} 
                      width={720}
                      height={480}
                      sizes="(max-width: 640px) 100vw,
                                (max-width: 1280px) 50vw,
                                (max-width: 1536px) 33vw,
                                25vw" 
                      quality={100} 
                      className='h-full w-full object-cover'
                      priority={true}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Tutup!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default index