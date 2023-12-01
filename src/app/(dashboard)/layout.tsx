import { Logo } from '@/components/Logo';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-background max-h-screen w-full'>
      <div className='border-b border-border w-full'>
        <nav className='container flex justify-between items-center  h-[60px] px-4 py-2'>
          <Logo />
          <div className='flex gap-4 items-center'>
            <ThemeSwitcher />
            <UserButton afterSignOutUrl='/sign-in' />
          </div>
        </nav>
      </div>
      <main className='flex w-full flex-grow'>{children}</main>
    </div>
  );
}
