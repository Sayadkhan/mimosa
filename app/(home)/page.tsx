import Community from '@/components/home/Community';
import CommunityGathered from '@/components/home/CommunityGathered';
import Hero from '@/components/home/Hero';
import Packages from '@/components/packages/Packages';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import Button from '@/components/ui/Button';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <CommunityGathered />
        <Community />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
