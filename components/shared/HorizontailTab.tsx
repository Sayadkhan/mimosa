'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useState } from 'react';

interface HorizontailTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const HorizontailTab: React.FC<HorizontailTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [shouldOpenTab, setShouldOpenTab] = useState(0);

  const handleClick = useCallback(
    (index: number) => {
      setShouldOpenTab(index);
      onClick && onClick;
    },
    [onClick]
  );

  return (
    <div className='flex flex-col gap-20'>
      {/* tabs */}
      <div className='flex items-center self-center'>
        {tabs.map((tab, index: number) => (
          <button
            onClick={() => {
              handleClick(index);
            }}
            key={index}
            className={cn(
              'h-["5rem] eoq flex w-[15rem] items-center justify-center whitespace-nowrap border border-grey px-6 py-3 text-center text-lg font-semibold tracking-widest',
              index === 0 && 'rounded-bl-2xl',
              index === tabs.length - 1 && 'rounded-tr-2xl',
              shouldOpenTab === index && 'border-dark bg-dark text-light'
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* contents */}
      <div>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(shouldOpenTab === index ? 'block' : 'hidden')}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontailTab;
