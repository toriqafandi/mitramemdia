import { Fragment, useCallback, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';

import images from '../../public/assets/data/imageLocations.json'
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 13);
  return null;
}

export default function OpenStreetMapAll({markers}) {
  const [geoData, setGeoData] = useState({ lat: -7.2916592, lng: 112.7617769 });
  const centerLoc = [geoData.lat, geoData.lng];

  const [isOpen, setIsOpen] = useState(false)
  const [isParam, setIsParam] = useState({})


  function closeModal() {
    setIsOpen(false)
  }

  function openModal(data) {
    setIsParam(data)
    setIsOpen(true)
  }

  return (
    <>
    <MapContainer center={centerLoc} className='rounded-lg z-0' style={{ width: '75vw', height: '80vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {images.map((position, index) => { 
        return (
        <Marker 
          key={index} 
          position={[position.lat, position.long]} 
          icon={
            new L.Icon({
              iconUrl: '/assets/images/point-mitra.png',
              iconSize: [50, 50]
            })
          } 
        >
          <Popup closeOnClick>
            <div className="text-center">
              <h1 className='text-lg m-2'>{position.title}</h1>
              <button type='button' onClick={() => openModal(position)} className="rounded-full bg-mainColor py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">show image</button>
            </div>
          </Popup>
        </Marker>
      )})}
      <ChangeView coords={centerLoc} />
    </MapContainer>

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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all Laptop:w-1/2">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Lokasi {isParam.title}
                  </Dialog.Title>
                  <div className="mt-2">
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
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
