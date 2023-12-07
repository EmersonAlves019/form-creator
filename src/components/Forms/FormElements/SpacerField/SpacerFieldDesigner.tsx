import { LuSeparatorHorizontal } from 'react-icons/lu';

import { Label } from '@/components/ui/label';

import type { SpacerFieldDesignerProps, SpacerFieldInstance } from './@types';

export function SpacerFieldDesigner({
  elementInstance,
}: SpacerFieldDesignerProps) {
  const instance = elementInstance as SpacerFieldInstance;
  const { height } = instance.properties;
  return (
    <div className="flex w-full flex-col gap-2 items-center">
      <Label className="text-muted-foreground">Spacer Field: {height}px</Label>
      <LuSeparatorHorizontal className="h-8 w-8" />
    </div>
  );
}
