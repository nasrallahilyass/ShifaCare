import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

export const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
    <Button type="submit" className={className ?? 'shad-primary-btn w-full'} disabled={isLoading}>
        {isLoading ? (
            <div className='flex items-center gap-4'>
                <Image
                    src='/assets/icons/loader.svg'
                    alt='loader'
                    height={24}
                    width={24}
                    className='animate-spin'
                />
                Loading...
            </div>
        ) : children}
    </Button>
  )
}
