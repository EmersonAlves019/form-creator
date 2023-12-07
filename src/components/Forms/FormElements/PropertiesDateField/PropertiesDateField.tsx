import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { PropertiesFromFieldProps } from './@types';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from '@radix-ui/react-icons';

export function PropertiesFormField({
  control,
  label,
  description,
  name,
}: PropertiesFromFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="label">{label}</FormLabel>
          <FormControl>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>Pick a date</span>
            </Button>
          </FormControl>
          <FormDescription className="text-foreground/70">
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
