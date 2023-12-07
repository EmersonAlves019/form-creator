import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import type { SpacerFieldPropertiesSchema } from '@/lib/validations/spacerFieldPropertiesSchema';
import { spacerFieldPropertiesSchema } from '@/lib/validations/spacerFieldPropertiesSchema';
import { useBoundStore } from '@/store/useBoundStore';

import type {
  SpacerFieldInstance,
  SpacerFieldPropertiesFormProps,
} from './@types';
import { PropertiesSlider } from '../PropertiesSlider';

export function SpacerFieldProperties({
  elementInstance,
}: SpacerFieldPropertiesFormProps) {
  const element = elementInstance as SpacerFieldInstance;

  const { updateElementProperties } = useBoundStore((state) => state.actions);

  const form = useForm<SpacerFieldPropertiesSchema>({
    mode: 'onBlur',
    defaultValues: element.properties,
    resolver: zodResolver(spacerFieldPropertiesSchema),
  });

  useEffect(() => {
    form.reset(element.properties);
  }, [element, form]);

  function applyChanges(values: SpacerFieldPropertiesSchema) {
    updateElementProperties(element.id, values);
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-3"
      >
        <PropertiesSlider
          control={form.control}
          label={`Height (px): ${form.watch('height')}`}
          name="height"
          description="The label of the field. This will be displayed above the field."
          min={4}
          max={200}
          step={1}
        />
      </form>
    </Form>
  );
}
