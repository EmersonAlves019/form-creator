import { calculateFormStats } from '@/lib/utils';

import { ShareFormLinkButton } from '../Buttons/ShareFormLinkButton';
import { VisitFormButton } from '../Buttons/VisitFormButton';
import { StatsCards } from '../Lists/StatsCards';
import { SubmissionsTable } from '../Tables/SubmissionsTable';
import type { FormDetailsProps } from './@types';

export function FormDetails({ form }: FormDetailsProps) {
  const { visits, submissions } = form;

  return (
    <>
      <div className="py-10">
        <div className="container flex justify-between">
          <h1 className="truncate text-4xl font-bold">{form.name}</h1>
          <VisitFormButton shareUrl={form.shareUrl} />
        </div>
      </div>

      <div className="container border-b border-muted pb-8">
        <div className="flex w-full items-center justify-between gap-2">
          <ShareFormLinkButton shareUrl={form.shareUrl} />
        </div>
        <div className="w-full">
          <StatsCards
            data={calculateFormStats({ visits, submissions })}
            loading={false}
          />
        </div>
      </div>
      <SubmissionsTable formId={form.id} />
    </>
  );
}
