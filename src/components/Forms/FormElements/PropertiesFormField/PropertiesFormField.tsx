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
            <Input
              {...field}
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.currentTarget.blur();
              }}
            />
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
