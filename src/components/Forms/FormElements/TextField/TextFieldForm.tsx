import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import type { TextFieldFormComponentProps, TextFieldInstance } from './@types';
import { validate } from './validations';

export function TextFieldForm({
  elementInstance,
  submitValue,
  isInvalid,
  defaultValue,
}: TextFieldFormComponentProps) {
  const element = elementInstance as TextFieldInstance;
  const [value, setValue] = useState<string>(defaultValue || '');
  const [error, setError] = useState<boolean>(false);

  const { label, placeHolder, required, helperText } = element.properties;

  useEffect(() => {
    setError(!!isInvalid);
  }, [isInvalid]);

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className={cn(error && 'text-red-500')}>
        {label}
        {required && '*'}
      </Label>
      <Input
        className={cn(error && 'border-red-500')}
        placeholder={placeHolder}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          if (!submitValue) return;
          const valid = validate(element, e.target.value);

          setError(!valid);
          if (!valid) return;
          submitValue(element.id, value);
        }}
        value={value}
      />
      {helperText && (
        <p
          className={cn(
            'text-sm',
            error ? 'text-red-500' : 'text-muted-foreground'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
