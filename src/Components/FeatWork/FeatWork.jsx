import React from 'react';
import { ArrowNarrowDownIcon } from '@heroicons/react/solid';
import img1 from './avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg';
import img2 from './mario-gogh-UF5Kdm764RE-unsplash.jpg';
import img3 from './marissa-grootes-flRm0z3MEoA-unsplash.jpg';
import img4 from './mika-novo-x-HpilsdKEk-unsplash.jpg';
import { Tween } from 'react-gsap';
import Fade from 'react-reveal/Fade';

const HovImg = ({ img, hovText }) => {
  return (
    <div className="flex w-full justify-center z-0 mt-8 lg:w-1/2 lg:odd:justify-end lg:even:justify-start lg:px-4 even:mt-10 lg:mt-0">
      <div className="group lg:h-[600px] lg:w-[380px] relative">
        <div className="">
        <Fade bottom>
          <img
            src={img}
            className="h-[600px] w-[380px] object-cover group-hover:brightness-50 transition-all duration-300 ease-in-out rounded-md"
            alt=""
          />
          </Fade>
        </div>
        <p className="font-manrop absolute top-2/4 text-2xl font-bold text-white left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          {hovText}
        </p>
      </div>
    </div>
  );
};

const FeatWork = () => {
  return (
    <section className="bg-main_bg w-full">
      <div className="container mx-auto">
        <Tween
          from={{ y: '-25' }}
          to={{ y: '0' }}
          delay={0}
          ease="slow(0.7, 0.7, false)"
          duration={1}
          repeat={-1}
          yoyo={true}
        >
          <div className="flex items-center text-white font-manrop font-semibold pt-8 ml-5">
            <ArrowNarrowDownIcon className="h-8 w-7" />
            <h1 className="ml-4">Featured Work</h1>
          </div>
        </Tween>
        <div className="mt-10 lg:flex flex-wrap">
          <HovImg img={img1} hovText="InWork" />
          <HovImg img={img2} hovText="Inspiration" />
          <HovImg img={img3} hovText="Working" />
          <HovImg img={img4} hovText="Adobe XD" />
        </div>
      </div>
    </section>
  );
};

export default FeatWork;
