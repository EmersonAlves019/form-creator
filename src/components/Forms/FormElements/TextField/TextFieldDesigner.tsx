import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { TextFieldInstance } from './@types';

export function TextFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as TextFieldInstance;

  const { label, placeHolder, required, helperText } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
