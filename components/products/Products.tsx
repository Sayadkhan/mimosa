import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { data } from '@/data/Products';
import ProductsItem from './ProductsItem';
import { productItem } from '@/types/productItem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';

interface ProductsProps {
  formProductPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ formProductPage }) => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subtitle='Products'
        title='Browse our beauty products'
        color='bg-blue'
      />
      {/* PRODUCTS */}
      <div className=' grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {/* MULTIPLE PRODUCTS */}
        {!formProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 8)
            .map((item: productItem) => (
              <ProductsItem key={item.id} item={item} />
            ))}

        {formProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item: productItem) => (
              <ProductsItem key={item.id} item={item} />
            ))}
      </div>

      {!formProductPage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/products'
            className={buttonVariants({ variant: 'outline' })}
          >
            View all products
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
