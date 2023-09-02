import React from 'react';

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
  return <div>PackageIteam</div>;
};

export default PackageIteam;
