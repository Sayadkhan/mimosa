import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import PackageIteam from '../home/PackageIteam';
import { data } from '@/data/packages';
import HorizontailTab from '../ui/HorizontailTab';

const AllPackages = () => {
  return (
    <section className='wrapper section-padding min-h-screen'>
      <SectionTitle
        title='Explore Our Beauty packages'
        subtitle='Packages'
        color='bg-red'
      />

      {/* packages */}

      <HorizontailTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Wellness')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageIteam key={item.id} {...item} />
            ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageIteam key={item.id} {...item} />
            ))}
        </div>

        {/* Events */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Events')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageIteam key={item.id} {...item} />
            ))}
        </div>
      </HorizontailTab>
    </section>
  );
};

export default AllPackages;
