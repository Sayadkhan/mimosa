import Image from 'next/image';
import React from 'react';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center'>
        {/* main */}
        <div className='bg-gray relative h-[500px] w-[500px]'>
          {/* left */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-tl-[100px] '>
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
          <div className='absolute left-[50%] top-[50%] z-[3] h-[400px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden '>
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
          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-br-[100px] '>
            <Image
              src='https://images.pexels.com/photos/2843035/pexels-photo-2843035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photo of Woman in Black Long-sleeved Dress Posing With Her Eyes Closed In Front of Black Background'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
