import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import type {
  SelectFieldFormComponentProps,
  SelectFieldInstance,
} from './@types';
import { validate } from './validations';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectFieldForm({
  elementInstance,
  submitValue,
  isInvalid,
  defaultValue,
}: SelectFieldFormComponentProps) {
  const element = elementInstance as SelectFieldInstance;
  const [value, setValue] = useState<string>(defaultValue || '');
  const [error, setError] = useState<boolean>(false);

  const { label, placeHolder, required, helperText, options } =
    element.properties;

  useEffect(() => {
    setError(!!isInvalid);
  }, [isInvalid]);

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className={cn(error && 'text-red-500')}>
        {label}
        {required && '*'}
      </Label>
      <Select
        onValueChange={(value) => {
          setValue(value);
          if (!submitValue) return;
          const valid = validate(element, value);

          setError(!valid);
          if (!valid) return;
          submitValue(element.id, value);
        }}
        defaultValue={value}
      >
        <SelectTrigger className={cn('w-full', error && 'border-red-500')}>
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option: string, index: number) => (
            <SelectItem key={option + index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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
