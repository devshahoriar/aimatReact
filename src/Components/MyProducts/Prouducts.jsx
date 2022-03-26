import React from 'react';
import img1 from './unsplash_iD5aVJFCXJg.png';
import img2 from './unsplash_mr4JG4SYOF8.png';
import img3 from './unsplash_VJ3mkl-0Yog.png';
import Tilt from 'react-parallax-tilt';
import  Fade  from 'react-reveal/Fade';

const Prouducts = () => {
  return (
    <section className="w-full bg-main_bg">
      <div className="container mx-auto pt-40">
        <div>
          <h1 className="text-center text-3xl font-semibold text-main_font">
            My Products
          </h1>
        </div>
        <div className="prodImg w-full flex items-center lg:flex-row flex-col mt-12 overflow-hidden">
        <Fade bottom>
          <Tilt>
            <article>
              <img src={img1} alt="" />
            </article>
          </Tilt>
          <Tilt>
            <article>
              <img src={img2} alt="" />
            </article>
          </Tilt>
          <Tilt>
            <article>
              <img src={img3} alt="" />
            </article>
          </Tilt>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Prouducts;
