import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import {
  type NumberFieldPropertiesSchema,
  numberFieldPropertiesSchema,
} from '@/lib/validations/numberFieldPropertiesSchema';
import { useBoundStore } from '@/store/useBoundStore';

import { PropertiesFormField } from '../PropertiesFormField';
import { PropertiesSwitch } from '../PropertiesSwitch';
import type {
  NumberFieldInstance,
  NumberFieldPropertiesFormProps,
} from './@types';

export function NumberFieldProperties({
  elementInstance,
}: NumberFieldPropertiesFormProps) {
  const element = elementInstance as NumberFieldInstance;

  const { updateElementProperties } = useBoundStore((state) => state.actions);

  const form = useForm<NumberFieldPropertiesSchema>({
    resolver: zodResolver(numberFieldPropertiesSchema),
    mode: 'onBlur',
    defaultValues: element.properties,
  });

  useEffect(() => {
    form.reset(element.properties);
  }, [element, form]);

  function applyChanges(values: NumberFieldPropertiesSchema) {
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
          label="Placeholder"
          name="placeHolder"
          description="The placeholder of the field. This will be displayed inside the field."
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
