import { LuView } from 'react-icons/lu';
import { FaWpforms } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { TbArrowBounce } from 'react-icons/tb';

import { StatsCardsProps } from './@types';
import { StatsCard } from '@/components/Cards';

export function StatsCards({ data, loading }: StatsCardsProps) {
  return (
    <div className='w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <StatsCard
        title='Total Visits'
        icon={<LuView className='h-6 w-6 text-blue-600' />}
        description='Total number of forms'
        value={data?.visits.toLocaleString()}
        loading={loading}
        className='shadow-md shadow-blue-600 border-none'
      />
      <StatsCard
        title='Total Submissions'
        icon={<FaWpforms className='h-6 w-6 text-yellow-600' />}
        description='Total number of submissions'
        value={data?.submissions.toLocaleString()}
        loading={loading}
        className='shadow-md shadow-yellow-600 border-none'
      />
      <StatsCard
        title='Submissions Rate'
        icon={<HiCursorClick className='h-6 w-6 text-green-600' />}
        description='Visits that resulted in a submission'
        value={data?.submissionsRate.toLocaleString() + '%'}
        loading={loading}
        className='shadow-md shadow-green-600 border-none'
      />
      <StatsCard
        title='Bounce Rate'
        icon={<TbArrowBounce className='h-6 w-6 text-red-600' />}
        description='Visits that leaves without interacting'
        value={data?.bounceRate.toLocaleString() + '%'}
        loading={loading}
        className='shadow-md shadow-red-600 border-none'
      />
    </div>
  );
}
