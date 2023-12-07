import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import {
  type ParagraphFieldPropertiesSchema,
  paragraphFieldPropertiesSchema,
} from '@/lib/validations/paragraphPropertiesSchema';
import { useBoundStore } from '@/store/useBoundStore';

import { PropertiesTextarea } from '../PropertiesTextarea';
import type {
  ParagraphFieldInstance,
  ParagraphFieldPropertiesFormProps,
} from './@types';

export function ParagraphFieldProperties({
  elementInstance,
}: ParagraphFieldPropertiesFormProps) {
  const element = elementInstance as ParagraphFieldInstance;

  const { updateElementProperties } = useBoundStore((state) => state.actions);

  const form = useForm<ParagraphFieldPropertiesSchema>({
    mode: 'onBlur',
    defaultValues: element.properties,
    resolver: zodResolver(paragraphFieldPropertiesSchema),
  });

  useEffect(() => {
    form.reset(element.properties);
  }, [element, form]);

  function applyChanges(values: ParagraphFieldPropertiesSchema) {
    updateElementProperties(element.id, values);
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-3"
      >
        <PropertiesTextarea
          control={form.control}
          label="Text"
          name="text"
          description="The label of the field. This will be displayed above the field."
        />
      </form>
    </Form>
  );
}
