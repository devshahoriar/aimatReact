import React from 'react';
import { Button } from '../Header/Header';

const Contract = () => {
  return (
    <section className='w-full bg-main_bg'>
      <div className='container mx-auto pt-32 pb-32'>
        <div>
          <article className='flex flex-col items-center text-main_font font-manrop'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Contact Me</h1>
            <p className='w-[300px] text-center mt-10 font-medium text-lg md:text-xl lg:text-2xl md:w-[350px] lg:w-[380px] text-main_font opacity-70 mb-11'>
              If you are looking to hire a product designer, I’m currently
              available for freelance work
            </p>
            <Button>hi@yourname.com</Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contract;
