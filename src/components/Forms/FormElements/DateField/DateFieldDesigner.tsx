import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { FormElementDesignerProps } from '../@types';
import type { DateFieldInstance } from './@types';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from '@radix-ui/react-icons';

export function DateFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as DateFieldInstance;

  const { label, placeHolder, required, helperText } = element.properties;

  return (
    <div className="flex w-full flex-col gap-2">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal"
      >
        <CalendarIcon className="w-4 h-4 mr-2" />
        <span>Pick a date</span>
      </Button>
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
