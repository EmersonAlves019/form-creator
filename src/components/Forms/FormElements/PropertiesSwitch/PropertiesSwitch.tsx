import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';

import type { PropertiesSwitchProps } from './@types';

export function PropertiesSwitch({
  control,
  label,
  description,
  name,
}: PropertiesSwitchProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: any) => (
        <FormItem className="flex items-center justify-between rounded-lg border border-muted-foreground/60 p-3 shadow-sm">
          <div className="space-y-0.5">
            <FormLabel htmlFor="label">{label}</FormLabel>
            <FormDescription className="text-foreground/70">
              {description}
            </FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.checked}
              onCheckedChange={field.onChange}
              className="border  border-muted-foreground/40"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
