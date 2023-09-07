import ProductDetailsSection from '@/components/product-details/ProductDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import { data } from '@/data/Products';
import { productItem } from '@/types/productItem';
import React from 'react';

const ProductDetilsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;
  const product = data.find((item: productItem) => item.id === id);

  if (!product) {
    return null;
  }
  return (
    <>
      <Navbar />
      <main>
        <ProductDetailsSection product={product} />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductDetilsPage;
