import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import {
  type DateFieldPropertiesSchema,
  dateFieldPropertiesSchema,
} from '@/lib/validations/dateFieldPropertiesSchema';
import { useBoundStore } from '@/store/useBoundStore';

import { PropertiesFormField } from '../PropertiesFormField';
import { PropertiesSwitch } from '../PropertiesSwitch';
import type { DateFieldInstance, DateFieldPropertiesFormProps } from './@types';

export function DateFieldProperties({
  elementInstance,
}: DateFieldPropertiesFormProps) {
  const element = elementInstance as DateFieldInstance;

  const { updateElementProperties } = useBoundStore((state) => state.actions);

  const form = useForm<DateFieldPropertiesSchema>({
    resolver: zodResolver(dateFieldPropertiesSchema),
    mode: 'onBlur',
    defaultValues: element.properties,
  });

  useEffect(() => {
    form.reset(element.properties);
  }, [element, form]);

  function applyChanges(values: DateFieldPropertiesSchema) {
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
          label="Label"
          name="label"
          description="The label of the field. This will be displayed above the field."
        />
        <PropertiesFormField
          control={form.control}
          label="Helper Text"
          name="helperText"
          description="The helper text of the field. This will be displayed below the field."
        />
        <PropertiesSwitch
          control={form.control}
          label="Required"
          name="required"
          description="Whether the field is required or not."
        />
      </form>
    </Form>
  );
}
