import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { TextFieldFormComponentProps, TextFieldInstance } from './@types';

export function TextFieldForm({
  elementInstance,
}: TextFieldFormComponentProps) {
  const element = elementInstance as TextFieldInstance;

  const { label, placeHolder, required, helperText } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input placeholder={placeHolder} />
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
