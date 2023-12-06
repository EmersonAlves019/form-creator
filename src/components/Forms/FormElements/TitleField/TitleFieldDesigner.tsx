import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { TitleFieldInstance } from './@types';

export function TitleFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as TitleFieldInstance;

  const { title } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="text-muted-foreground">Title Field</Label>
      <p className="text-xl">{title}</p>
    </div>
  );
}
