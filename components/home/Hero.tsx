import Image from 'next/image';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plafairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)]'>
      <div className='grid-rows-8 relative  grid h-full w-full items-center gap-5'>
        {/* 1st row */}
        {/* <div className="w-full h-full"></div> */}
        {/* 2nd row */}
        <div className='grid h-[8rem]  w-full grid-cols-[30%_auto] items-center gap-20'>
          {/* 2nd row left side */}
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px] border'>
            <Image
              src='https://images.pexels.com/photos/17987769/pexels-photo-17987769/free-photo-of-woman-with-red-hair-taking-pictures-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt='Woman wearing Sheer Dress underwater'
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          {/* 2nd row right side */}
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>Awaken Your</h2>
          </div>
        </div>

        <hr className='border-gray' />
        {/* 3rd row */}
        <div className='grid h-[8rem]  w-full grid-cols-[25%_auto_50%] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2
              className={cn(plafairDisplay.className, 'headline-1 lowercase')}
            >
              Inner
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[50px_0px_50px_50px] border'>
            <Image
              src='https://images.pexels.com/photos/17995409/pexels-photo-17995409/free-photo-of-smiling-woman-in-traditional-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman wearing Sheer Dress underwater'
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>
              Goddess<span className='text-green'>.</span>
            </h2>
          </div>
        </div>

        <hr className='border-gray' />
        {/* 4th row */}
        <div className='grid h-[8rem] w-full grid-cols-[40%_auto] gap-20 '>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 flex items-center font-semibold uppercase '>
              Essence
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_30px_0px_30px]'>
            <Image
              src='https://images.pexels.com/photos/4156299/pexels-photo-4156299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Bathtub With Water'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
              priority
            />
          </div>
        </div>

        <hr className='border-gray' />
        {/* 5th row */}
        <div className='grid h-[8rem]  w-full grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[50px_50px_50px_0px] border'>
            <Image
              src='https://images.pexels.com/photos/1573141/pexels-photo-1573141.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt='Woman wearing Sheer Dress underwater'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>
              <span
                className={cn(
                  plafairDisplay.className,
                  'font-normal lowercase'
                )}
              >
                With
              </span>{' '}
              M
              <span
                className={cn(
                  plafairDisplay.className,
                  'font-normal lowercase text-pink'
                )}
              >
                i
              </span>
              mosa
              <span className='text-orange'>.</span>
            </h2>
          </div>
        </div>

        <hr className='border-gray' />
        {/* 6th row */}
        {/* <div className="w-full h-full"></div> */}

        {/* packages button */}
        <Link
          href='/#packages'
          className='eoq group absolute bottom-[15%] left-[40%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-violet/50'
        >
          <p className='z-[3]'>packages</p>
          {/* filler */}
          <span className='eoq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full  bg-violet/80 group-hover:top-1/2'></span>
          {/* filler 2 */}
          <span className='eoq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full  bg-violet/80 group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
