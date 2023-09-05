import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import { PackageItem } from '@/types/packageItem';

interface PackageIteamProps {
  packageItem: PackageItem;
}

const PackageIteam: React.FC<PackageIteamProps> = ({ packageItem }) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      {/* image */}
      <Link
        className='border-gray group h-[15rem] w-full overflow-hidden rounded-2xl border'
        href={`/packages/${packageItem?.id}`}
      >
        <Image
          width={640}
          height={640}
          src={packageItem?.image}
          alt={packageItem?.title}
          priority
          className='eoq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      {/* contant */}
      <div className='eoq bg-gray/25 hover:bg-gray/50 flex w-full flex-col gap-2.5 rounded-2xl border p-5'>
        <span className='text-xs font-bold uppercase tracking-[0.375em] text-green'>
          {packageItem?.category}
        </span>
        <h4 className='text-2xl'>{packageItem?.title}</h4>
        <hr />
        <p className='text-dark/75'>
          {packageItem?.description.substring(0, 50)}...
        </p>
        <div className='flex items-center justify-between gap-2.5'>
          <p>{formatCurrency(packageItem?.price)}</p>
          <Link
            href={`/packages/${packageItem?.id}`}
            className={buttonVariants({ variant: 'violet' })}
          >
            view details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageIteam;
