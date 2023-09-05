import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='relative flex h-full w-full items-center justify-center'>
        {/* main */}
        <div className='bg-gray relative h-[500px] w-[500px]'>
          {/* left */}
          <div className='z-[2]h-[400px] absolute -left-[25%]  -top-[15%] w-[300px] overflow-hidden rounded-tl-[100px]'>
            <Image
              src='https://images.pexels.com/photos/14008893/pexels-photo-14008893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Young Woman with Pink Eye Makeup'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* mid */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[400px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl shadow-dark/50'>
            <Image
              src='https://images.pexels.com/photos/2605198/pexels-photo-2605198.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
              alt='Woman Wearing Black Top'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* right */}
          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-br-[100px]'>
            <Image
              src='https://images.pexels.com/photos/2843035/pexels-photo-2843035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photo of Woman in Black Long-sleeved Dress Posing With Her Eyes Closed In Front of Black Background'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* upper right text */}
          <h2 className='headline-2 absolute -top-[10%] left-[40%] whitespace-nowrap font-semibold uppercase'>
            Jion Mimosa
          </h2>
          {/* bootom left text */}
          <h2 className='headline-2  absolute -bottom-[10%] right-[40%] font-semibold uppercase'>
            Community
          </h2>
        </div>

        {/* button */}
        <Link
          href='/#packages'
          className='eoq group absolute bottom-[15%] right-[10%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-red/50'
        >
          <p className='z-[3]'>Join Now</p>

          {/* FILLER 1*/}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red group-hover:top-1/2'></span>

          {/* FILLER 2*/}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Community;
