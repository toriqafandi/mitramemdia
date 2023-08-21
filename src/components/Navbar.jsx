import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import data from '/public/assets/data/menu.json'
import useScroll from '@/hooks/useScroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import useWidth from '@/hooks/useWidth';

const Navbar = () => {
    const router = useRouter()
    const [navbar, setNavbar] = useState(true)
    const handleNavbar = ()=>{
        setNavbar(!navbar)
    }

    const widthScreen = useWidth()
    const witdhThreshold = 1080

    const scrollY = useScroll();
    const scrollThreshold = 100;

    const navbarColor = scrollY > scrollThreshold ? 'bg-white' : 'Laptop:bg-transparant smallPhone:bg-white';
    const imgLogo = scrollY > scrollThreshold || router.pathname != '/' || widthScreen <= witdhThreshold ? 'mitramedia.webp':'mitramedia2.png'
    
  return (
    <>
    <header className={navbarColor + " fixed left-0 top-0 w-full z-50 ease-in duration-300 Laptop:w-full " }>
        <div className='text-mainColor m-auto flex justify-between items-center Laptop:container Laptop:px-32 '>
            <div>
                <Image src={`/assets/images/${imgLogo}`}
                  width={200}
                  height={24}
                  priority={true}
                  alt="Logo Mitramedia Advertising" 
                  className="p-2 aspect-auto"
                  quality={100}
                />
            </div>
            <div className="flex items-center space-x-3">
              <nav className="hidden Laptop:block">
                <ul className='hidden Laptop:flex'>
                    {
                      data.map((menu, idx) => (
                        <Link key={idx} href={menu.href}>
                          <li onClick={handleNavbar} className={router.pathname.replace('/[id]', '') === menu.href ? ('bg-mainColor mx-2 rounded-none text-white py-2 border-b-2 Laptop:rounded-full Laptop:px-2 Laptop:border-b-0 hover:Laptop:bg-secColor hover:Laptop:rounded-full hover:Laptop:text-white'):('mx-2 py-2 border-b-2 hover:Laptop:text-white hover:Laptop:bg-mainColor Laptop:px-2 hover:Laptop:rounded-full Laptop:border-b-0')}>
                            <span className="px-2 py-2 leading-[50%] Laptop:text-xs font-bold">{menu.text.toUpperCase()}</span>
                          </li>
                        </Link>
                      ))
                    }
                </ul>
              </nav> 
                <button className="p-2 text-text Laptop:hidden" onClick={() => setNavbar(!navbar)}>
                  { navbar ? (<Bars3Icon className="w-6 h-6" />):(<XMarkIcon className="w-6 h-6" />)}
                </button>
            </div>
        </div>
        {
          <nav className={ !navbar ? "bg-white absolute left-0 ease-in duration-300 w-screen h-screen Laptop:hidden":"bg-whiteColor absolute left-[-110%] ease-in duration-300 w-screen h-screen Laptop:hidden"}>
            <ul className='Laptop:flex Laptop:space-x-2'>
                  {
                    data.map((menu, idx) => (
                      <Link key={idx} href={menu.href}>
                        <li onClick={handleNavbar} className={router.pathname.replace('/[id]', '') === menu.href ? ('bg-black rounded-none text-white py-2 border-b-2'):'text-mainColor py-2 border-b-2'}>
                          <span className="px-3 py-2 leading-[160%] text-sm">{menu.text}</span>
                        </li>
                      </Link>
                    ))
                  }
              </ul>
          </nav>
        }
    </header>
    </>
  )
}

export default Navbar