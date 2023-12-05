import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className=" mx-auto flex flex-col w-full grow">{children}</div>;
}
