import { Suspense } from 'react';

import { getFormStats } from '@/actions/form';
import { StatsCards } from '@/components/Lists';
import { Separator } from '@/components/ui/separator';
import { CreateFormButton } from '@/components/Buttons';
import { FormCards } from '@/components/Lists/FormsList/FormsList';
import { FormCardSkeleton } from '@/components/Cards';

export default function Page() {
  return (
    <div className='container pt-4'>
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className='my-6' />
      <h2 className='text-2xl font-bold col-span-2'>Your Forms</h2>
      <Separator className='my-6' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <CreateFormButton />
        <Suspense
          fallback={[1, 2, 3, 4].map((_, i) => (
            <FormCardSkeleton key={i} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}

export async function CardStatsWrapper() {
  const stats = await getFormStats();
  return <StatsCards loading={false} data={stats} />;
}
