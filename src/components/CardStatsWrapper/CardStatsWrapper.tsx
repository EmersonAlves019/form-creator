import { getFormStats } from '@/actions/form';

import { StatsCards } from '../Lists/StatsCards';

export async function CardStatsWrapper() {
  const stats = await getFormStats();
  return <StatsCards loading={false} data={stats} />;
}
