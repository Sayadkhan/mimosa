import Products from '@/components/products/Products';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Products formProductPage />
      </main>
      ;
      <FooterMini />
    </>
  );
};

export default page;
