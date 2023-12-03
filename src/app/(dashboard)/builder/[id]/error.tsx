'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-4xl text-destructive">Something went wrong!</p>
      <Button asChild>
        <Link href="/">Go back to home</Link>
      </Button>
    </div>
  );
}
