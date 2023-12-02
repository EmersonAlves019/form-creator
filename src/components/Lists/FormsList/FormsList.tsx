import { getForms } from '@/actions/form';
import { FormCard, FormCardSkeleton } from '@/components/Cards';
import { Suspense } from 'react';

export async function FormCards() {
  const forms = await getForms();
  
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}
