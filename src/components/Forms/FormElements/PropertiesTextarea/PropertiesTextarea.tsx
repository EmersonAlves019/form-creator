import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

import type { PropertiesTextareaProps } from './@types';

export function PropertiesTextarea({
  control,
  label,
  description,
  name,
}: PropertiesTextareaProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="label">{label}</FormLabel>
          <FormControl>
            <Textarea
              rows={5}
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
