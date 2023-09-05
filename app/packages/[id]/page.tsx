import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import Footer from '@/components/shared/footer/Footer';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import { data } from '@/data/packages';
import { PackageItem } from '@/types/packageItem';
import React from 'react';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;

  const packageItem = data.find((item: PackageItem) => item.id === id);

  if (!packageItem) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <PackageDetailsSection packageItem={packageItem} />
      </main>
      <FooterMini />
    </>
  );
};

export default PackageDetailsPage;
