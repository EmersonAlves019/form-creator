import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export function FormCardSkeleton() {
  return (
    <Skeleton className='border-2 border-muted-foreground/30 h-[190px] w-full' />
  );
}
