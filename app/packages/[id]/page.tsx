import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
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
    <main>
      <PackageDetailsSection packageItem={packageItem} />
    </main>
  );
};

export default PackageDetailsPage;
