import { Suspense } from 'react';

import { getFormStats } from '@/actions/form';
import { StatsCards } from '@/components/StatsCards';

export default function Page() {
  return (
    <div className='container pt-4'>
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
    </div>
  );
}

export async function CardStatsWrapper() {
  const stats = await getFormStats();
  return <StatsCards loading={false} data={stats} />;
}
