import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { SubtitleFieldInstance } from './@types';

export function SubtitleFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as SubtitleFieldInstance;

  const { title } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="text-muted-foreground">Title Field</Label>
      <p className="text-lg">{title}</p>
    </div>
  );
}
