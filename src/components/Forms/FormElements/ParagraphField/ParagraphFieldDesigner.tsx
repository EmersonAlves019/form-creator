import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { ParagraphFieldInstance } from './@types';

export function ParagraphFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as ParagraphFieldInstance;

  const { text } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="text-muted-foreground">Paragraph Field</Label>
      <p className="text-base">{text}</p>
    </div>
  );
}
