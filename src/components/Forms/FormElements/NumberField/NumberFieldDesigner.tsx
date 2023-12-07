import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { NumberFieldInstance } from './@types';

export function NumberFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as NumberFieldInstance;

  const { label, placeHolder, required, helperText } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input type="number" readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
