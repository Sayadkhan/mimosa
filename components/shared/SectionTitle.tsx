import { cn } from '@/lib/utils';
import React from 'react';
interface SectionTitleProps {
  title: string;
  subtitle: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  color = 'bg-red',
}) => {
  return (
    <div className='mb-20 flex items-center gap-2.5'>
      <span className={cn('h-20 w-4', color)}></span>
      <div className='flex flex-col items-start gap-5'>
        <span className='text-lg font-semibold uppercase tracking-[0.375em]'>
          {subtitle}
        </span>
        <h3 className='text-5xl '>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
