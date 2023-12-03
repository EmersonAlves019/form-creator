import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

export function FormCardSkeleton() {
  return (
    <Skeleton className="h-[190px] w-full border-2 border-muted-foreground/30" />
  );
}
