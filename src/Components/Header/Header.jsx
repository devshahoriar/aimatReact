import React from 'react';
import Me from './me.png';
import { MailIcon } from '@heroicons/react/outline';
import { Controls, PlayState, Tween } from 'react-gsap';

export const Button = ({ children }) => {
  return (
    <button className="dfButton hover:opacity-60 transition duration-300">
      <MailIcon className="h-11 mr-4" />
      {children}
    </button>
  );
};

const Header = () => {
  return (
    <header className="w-full bg-main_bg">
      <div className="container mx-auto">
        <div className="w-full h-32"></div>
        <div className="lg:flex lg:flex-row-reverse">
          <Tween
            from={{ scale: '0' }}
            to={{ scale: '1' }}
            ease="power4.out"
            duration={1}
          >
            <div className="rounded-full w-96 h-96 overflow-hidden lg:mt-8  bg-white mx-auto">
              <img src={Me} alt="My Image" className="" />
            </div>
          </Tween>

          <div className="lg:w-1/2 ">
            <div className="px-7 lg:px-10 mt-20 lg:mt-0 ">
              <h1 className="text-center lg:text-left font-manrop text-4xl md:text-5xl lg:text-6xl font-bold text-main_font">
                <Tween
                  from={{ x: '-700' }}
                  to={{ x: '0' }}
                  ease="power4.out"
                  stagger={0.4}
                  duration={2}
                >
                  <p>Hi, I am Shuvo </p>
                  <p>A programmer.</p>
                  <p> based in City.</p>
                </Tween>
              </h1>
              <Tween
                from={{ x: '-700' }}
                to={{ x: '0' }}
                delay={1}
                ease="power4.out"
                duration={1}
              >
                <p className="font-manrop text-xl md:text-2xl lg:text-3xl opacity-60 leading-relaxed text-main_font lg:text-left font-semibold mt-10 text-center">
                  I help businesses and companies reach their goals by designing
                  user-centric digital products & interactive experiences.
                </p>
              </Tween>
            </div>
            <Tween
                from={{ x: '-700' }}
                to={{ x: '1' }}
                delay={1.5}
                ease="power4.out"
                duration={1}
              >
            <div className="flex justify-center lg:justify-start w-full mt-20 lg:mt-10 pb-20 lg:px-10">
              <Button>hi@yourname.com</Button>
            </div>
            </Tween>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
