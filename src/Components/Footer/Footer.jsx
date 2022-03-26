import React from 'react';
import logo1 from './Group (1).png';
import logo2 from './Group (2).png';
import logo3 from './Group.png';
import logo4 from './Vector (1).png';
import logo5 from './Vector.png';

const Footer = () => {
  return (
    <footer id='footer' className="w-full bg-main_bg border-t-2 border-[#dedede6a] pt-20">
      <div className="container mx-auto">
        <article className="w-full lg:flex lg:flex-row-reverse justify-between">
          <section className='flex logoSec justify-center'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </section>
          <section className='mt-10 pb-10 lg:mt-0'>
            <p className='text-main_font text-center font-manrop text-xl'>
              Designed by <span className='font-semibold'>Shuvo Vai </span> — Copyright 2021
            </p>
          </section>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
