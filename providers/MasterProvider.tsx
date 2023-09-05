'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import NavbarMini from '@/components/shared/NavbarMini';
import FooterMini from '@/components/shared/FooterMini';

const MasterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if ((children as ReactElement).props.childProp.segment.at(0) === 'notFound') {
    return <>{children}</>;
  }

  switch (pathname) {
    case '/':
      return (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      );
    case '/user/sign-in':
    case '/user/sign-up':
      return (
        <>
          <NavbarMini />
          {children}
          <FooterMini />
        </>
      );
    default:
      return (
        <>
          <Navbar />
          {children}
          <FooterMini />
        </>
      );
  }
};

export default MasterProvider;
