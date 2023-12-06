import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto flex w-full grow flex-col">{children}</div>;
}
