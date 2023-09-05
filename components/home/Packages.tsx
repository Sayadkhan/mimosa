import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import HorizontailTab from '../ui/HorizontailTab';
import { data } from '@/data/packages';
import PackageIteam from './PackageIteam';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';
import { PackageItem } from '@/types/packageItem';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle
        title='Explore Our Beauty packages'
        subtitle='Packages'
        color='bg-red'
      />
      <HorizontailTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: PackageItem) => item.masterCategory === 'Wellness')
            .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: PackageItem) => (
              <PackageIteam key={item.id} {...item} />
            ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: PackageItem) => item.masterCategory === 'Beauty')
            .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: PackageItem) => (
              <PackageIteam key={item.id} {...item} />
            ))}
        </div>

        {/* Events */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: PackageItem) => item.masterCategory === 'Events')
            .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: PackageItem) => (
              <PackageIteam key={item.id} {...item} />
            ))}
        </div>
      </HorizontailTab>
      <div className='flex justify-center'>
        <Link
          href='/packages'
          className={cn(buttonVariants({ variant: 'outline' }), 'mt-20')}
        >
          view all packages
        </Link>
      </div>
    </section>
  );
};

export default Packages;
