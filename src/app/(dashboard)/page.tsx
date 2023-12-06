import { Suspense } from 'react';

import { CreateFormButton } from '@/components/Buttons/CreateFormButton';
import { FormCardSkeleton } from '@/components/Cards';
import { CardStatsWrapper } from '@/components/CardStatsWrapper';
import { FormCards } from '@/components/Lists/FormCards';
import { StatsCards } from '@/components/Lists/StatsCards';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="col-span-2 text-2xl font-bold">Your Forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CreateFormButton />
        <Suspense
          fallback={[1, 2, 3, 4].map((i) => (
            <FormCardSkeleton key={i} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}
