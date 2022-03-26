import React, { useEffect } from 'react';
import img1 from './Rectangle 9.png';
import img2 from './Rectangle 8.png';
import img3 from './Rectangle 7.png';
import img4 from './Rectangle 6.png';
import img5 from './Rectangle 11.png';
import img6 from './Rectangle 10.png';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/src/ScrollTrigger';
import gsap from 'gsap';

import Tilt from 'react-parallax-tilt';

const Visul = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <section className="w-full bg-main_bg ">
      <div className="container mx-auto pt-32">
        <div>
          <h1
            id="vi"
            className="text-center text-3xl md:text-4xt lg:text-6xl font-semibold text-white"
          >
            Visual Explorations
          </h1>
        </div>
        <div className="imgBox flex flex-wrap justify-center mt-24 overflow-hidden">
          <Tween
            to={{
              y: '0px',
              opacity: '1',
              scrollTrigger: {
                trigger: '.imgBox',
                //start: '100px center',
              },
            }}
            from={{ y: '200px', opacity: '0' }}
            stagger={0.5}
          >
            <div>
              <img className="" src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
            <div>
              <img src={img5} alt="" />
            </div>
            <div>
              <img src={img6} alt="" />
            </div>
          </Tween>
        </div>
      </div>
    </section>
  );
};

export default Visul;
