import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';

interface PackageIteamProps {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
}

const PackageIteam: React.FC<PackageIteamProps> = ({
  id,
  title,
  image,
  category,
  description,
  price,
}) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      {/* image */}
      <Link
        className='group h-[15rem] w-full overflow-hidden rounded-2xl border border-grey'
        href={`/packages/${id}`}
      >
        <Image
          width={640}
          height={640}
          src={image}
          alt={title}
          priority
          className='eoq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      {/* contant */}
      <div className='eoq flex w-full flex-col gap-2.5 rounded-2xl border bg-grey/25 p-5 hover:bg-grey/50'>
        <span className='text-xs font-bold uppercase tracking-[0.375em] text-green'>
          {category}
        </span>
        <h4 className='text-2xl'>{title}</h4>
        <hr />
        <p className='text-dark/75'>{description.substring(0, 50)}...</p>
        <div className='flex items-center justify-between gap-2.5'>
          <p>{formatCurrency(price)}</p>
          <Link
            href={`/packages/${id}`}
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
