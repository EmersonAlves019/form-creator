import { getFormById } from '@/actions/form';

export default async function FormsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const form = await getFormById(Number(id));

  if (!form) throw new Error('Form not found');

  return <>Details</>;
}
