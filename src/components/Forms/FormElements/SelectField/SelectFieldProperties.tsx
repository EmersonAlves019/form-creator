import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import {
  type SelectFieldPropertiesSchema,
  selectFieldPropertiesSchema,
} from '@/lib/validations/selectFieldPropertiesSchema';
import { useBoundStore } from '@/store/useBoundStore';

import { PropertiesFormField } from '../PropertiesFormField';
import { PropertiesSwitch } from '../PropertiesSwitch';
import type {
  SelectFieldInstance,
  SelectFieldPropertiesFormProps,
} from './@types';
import { PropertiesSelectAdd } from '../PropertiesSelectAdd';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { toast } from '@/components/ui/use-toast';

export function SelectFieldProperties({
  elementInstance,
}: SelectFieldPropertiesFormProps) {
  const element = elementInstance as SelectFieldInstance;

  const {
    actions: { updateElementProperties, setSelectedElement },
    selectedElement,
  } = useBoundStore((state) => state);

  const form = useForm<SelectFieldPropertiesSchema>({
    resolver: zodResolver(selectFieldPropertiesSchema),
    mode: 'onSubmit',
    defaultValues: element.properties,
  });

  useEffect(() => {
    form.reset(element.properties);
  }, [element, form]);

  function applyChanges(values: SelectFieldPropertiesSchema) {
    updateElementProperties(element.id, values);
    toast({
      title: 'Changes applied',
      description: `The changes to the ${selectedElement?.type} field have been applied.`,
    });
    setSelectedElement(null);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(applyChanges)} className="space-y-3">
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
        <Separator orientation="horizontal" />
        <PropertiesSelectAdd
          control={form.control}
          label="Options"
          name="options"
          description="The options of the field. This will be displayed inside the field."
        />
        <Separator orientation="horizontal" />
        <Button className="w-full" type="submit">
          Apply Changes
        </Button>
      </form>
    </Form>
  );
}
