import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Skeleton } from '../../ui/skeleton';
import type { StatsCardProps } from './@types';

export function StatsCard({
  title,
  icon,
  description,
  value,
  loading,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="pt-1 text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
