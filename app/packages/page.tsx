import AllPackages from '@/components/packages/AllPackages';
import FooterMini from '@/components/shared/FooterMini';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AllPackages />
      </main>
      <FooterMini />
    </>
  );
};

export default PackagesPage;
