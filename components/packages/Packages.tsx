'use client';

import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import HorizontailTab from '../ui/HorizontailTab';
import { data } from '@/data/packages';
import PackageIteam from './PackageIteam';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';
import { PackageItem } from '@/types/packageItem';
import useFetch from '@/hooks/use-fetch';

interface PackagesProps {
  formPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ formPackagePage }) => {
  const {
    data: PackageItem,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages/');

  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle
        title='Explore Our Beauty packages'
        subtitle='Packages'
        color='bg-red'
      />

      {PackageItem && PackageItem.leanth > 0 && (
        <HorizontailTab tabs={['Wellness', 'Beauty', 'Events']}>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
            {!formPackagePage &&
              PackageItem.filter(
                (item: PackageItem) => item.masterCategory === 'Wellness'
              )
                .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
                .slice(0, 4)
                .map((item: PackageItem) => (
                  <PackageIteam key={item.id} packageItem={item} />
                ))}
            {formPackagePage &&
              PackageItem.filter(
                (item: PackageItem) => item.masterCategory === 'Wellness'
              )
                .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
                .map((item: PackageItem) => (
                  <PackageIteam key={item.id} packageItem={item} />
                ))}
          </div>

          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {!formPackagePage &&
              PackageItem.filter(
                (item: PackageItem) => item.masterCategory === 'Beauty'
              )
                .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
                .slice(0, 4)
                .map((item: PackageItem) => (
                  <PackageIteam key={item.id} packageItem={item} />
                ))}
            {formPackagePage &&
              PackageItem.filter(
                (item: PackageItem) => item.masterCategory === 'Beauty'
              )
                .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
                .map((item: PackageItem) => (
                  <PackageIteam key={item.id} packageItem={item} />
                ))}
          </div>

          <div className='grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
            {!formPackagePage &&
              PackageItem.filter(
                (item: PackageItem) => item.masterCategory === 'Events'
              )
                .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
                .slice(0, 4)
                .map((item: PackageItem) => (
                  <PackageIteam key={item.id} packageItem={item} />
                ))}
            {formPackagePage &&
              PackageItem.filter(
                (item: PackageItem) => item.masterCategory === 'Events'
              )
                .sort((a: PackageItem, b: PackageItem) => a.price - b.price)
                .map((item: PackageItem) => (
                  <PackageIteam key={item.id} packageItem={item} />
                ))}
          </div>
        </HorizontailTab>
      )}

      {!formPackagePage && PackageItem && PackageItem.length > 0 && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/packages'
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
