import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { SelectFieldInstance } from './@types';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';

export function SelectFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as SelectFieldInstance;

  const { label, placeHolder, required, helperText } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
      </Select>
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
