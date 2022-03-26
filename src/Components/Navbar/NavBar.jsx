import React, { useState,useEffect } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import logo from './logo.png';
import { config, useTransition, animated } from 'react-spring';
import { XIcon } from '@heroicons/react/solid'

const SideBar = ({show,set})=> {
  const transitions = useTransition(show, {
    from: { x: 800 },
    enter: { x: 0 },
    leave: { x: 800 },
    reverse: show,
    //delay: 100,
    config: { duration: 500 },
    //onRest: () => set(!show),
  });

  useEffect(()=>{
    window.onscroll = () =>{
      set(false);
    }
  })

  const setHide = () =>{
    set(false);
  }

  return transitions(
    (styles, item) =>
      item && (
        <animated.div className='bg-[#2c2c2ce2] backdrop-blur-md md:hidden fixed top-0 right-0 w-1/2 h-full z-50 flex items-center' style={styles}>
          <XIcon className='absolute hover:scale-110 transition duration-300 h-10 w-10  text-main_font top-10 right-10 cursor-pointer' onClick={setHide}/>
          <div className="text-white sideBar font-manrop text-4xl font-medium flex flex-col">
            <a href="#" onClick={setHide}>Home</a>
            <a href="#vi" onClick={setHide}>Work</a>
            <a href="#footer" onClick={setHide}>Contact</a>
          </div>
        </animated.div>
      )
  );
}

const NavBar = () => {
  const [showSide, setShowSide] = useState(false);
  return (
    <>
    <SideBar show={showSide} set={setShowSide}/>

      <nav className="z-30 w-full backdrop-blur-md bg-[#131313d7] backdrop-saturate-100 sticky top-0 ">
        <div className="container mx-auto ">
          <div className="h-full flex justify-between items-center mx-3 md:mx-0 py-5">
            <a
              href="#"
              className="text-3xl font-manrop font-extrabold flex items-center hover:opacity-60 transition duration-300"
            >
              <img src={logo} alt="" className="h-16" />
              <p className="text-3xl ml-2 text-main_font">Logo Here</p>
            </a>

            <div className="navBB font-manrop text-lg font-medium">
              <a href="#" className="mr-8">
                Home
              </a>
              <a href="#vi" className="mr-8">
                Work
              </a>
              <a href="#footer">Contact</a>
            </div>

            <div className="h-10 w-10 md:hidden">
              <button className="" onClick={()=> setShowSide(true)}>
                <MenuIcon className="h-10 w-10 text-main_font" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
