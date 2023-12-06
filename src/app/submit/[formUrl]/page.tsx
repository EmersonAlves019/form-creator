import { getFormContentByUrl } from '@/actions/form';
import type { FormElementInstance } from '@/components/Forms/FormElements/@types';
import { SubmitForm } from '@/components/SubmitForm';

export default async function SubmitPage({
  params,
}: {
  params: { formUrl: string };
}) {
  const { formUrl } = params;
  console.log('🚀 ~ file: page.tsx:11 ~ formUrl:', formUrl);
  const form = await getFormContentByUrl(formUrl);

  if (!form) throw new Error('Form not found');

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <SubmitForm formContent={formContent} formUrl={formUrl} />;
}
