import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import type { TitleFieldPropertiesSchema } from '@/lib/validations/titleFieldPropertiesSchema';
import { useBoundStore } from '@/store/useBoundStore';

import { PropertiesFormField } from '../PropertiesFormField';
import type {
  SubtitleFieldInstance,
  SubtitleFieldPropertiesFormProps,
} from './@types';

export function SubtitleFieldProperties({
  elementInstance,
}: SubtitleFieldPropertiesFormProps) {
  const element = elementInstance as SubtitleFieldInstance;

  const { updateElementProperties } = useBoundStore((state) => state.actions);

  const form = useForm<TitleFieldPropertiesSchema>({
    mode: 'onBlur',
    defaultValues: element.properties,
  });

  useEffect(() => {
    form.reset(element.properties);
  }, [element, form]);

  function applyChanges(values: TitleFieldPropertiesSchema) {
    updateElementProperties(element.id, values);
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-3"
      >
        <PropertiesFormField
          control={form.control}
          label="Title"
          name="title"
          description="The label of the field. This will be displayed above the field."
        />
      </form>
    </Form>
  );
}
