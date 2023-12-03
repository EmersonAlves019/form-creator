import { UserButton } from '@clerk/nextjs';

import { Logo } from '@/components/Logo';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-screen min-h-screen w-full min-w-full flex-col bg-background">
      <div className="w-full border-b border-border">
        <nav className="container flex h-[60px] items-center  justify-between px-4 py-2">
          <Logo />
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </nav>
      </div>
      <main className="flex w-full grow">{children}</main>
    </div>
  );
}
