import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import type { DateFieldFormComponentProps, DateFieldInstance } from './@types';
import { validate } from './validations';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';

export function DateFieldForm({
  elementInstance,
  submitValue,
  isInvalid,
  defaultValue,
}: DateFieldFormComponentProps) {
  const element = elementInstance as DateFieldInstance;
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined
  );
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
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !date && 'text-foreground/40',
              error && 'border-red-500'
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              if (!submitValue) return;
              const value = date?.toUTCString() || '';
              const valid = validate(element, value);

              setError(!valid);
              if (!valid) return;
              submitValue(element.id, date);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {/* <Input
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
      /> */}
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
