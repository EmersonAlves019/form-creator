import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { TextareaFieldInstance } from './@types';
import { Textarea } from '@/components/ui/textarea';

export function TextareaFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as TextareaFieldInstance;

  const { label, placeHolder, required, helperText } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Textarea readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
