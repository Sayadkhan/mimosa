import { PackageItem } from '@/types/packageItem';
import React from 'react';

interface PackageDetailsSectionProps {
  packageItem: PackageItem;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return <div>PackageDetailsSection</div>;
};

export default PackageDetailsSection;
