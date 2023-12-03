import type { UseFormReturn } from 'react-hook-form';

import type { CreateNewFormSchema } from '@/lib/validations/createFormSchema';

export type CreateNewFormProps = {
  form: UseFormReturn<
    {
      name: string;
      description?: string | undefined;
    },
    any,
    undefined
  >;
  onSubmit: (data: CreateNewFormSchema) => Promise<void>;
};
