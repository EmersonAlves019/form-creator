import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import type { PropertiesSliderProps } from './@types';
import { Slider } from '@/components/ui/slider';

export function PropertiesSlider({
  control,
  label,
  description,
  name,
  min,
  max,
  step,
}: PropertiesSliderProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="label">{label}</FormLabel>
          <FormControl className="pt-2">
            <Slider
              defaultValue={[field.value]}
              min={min}
              max={max}
              step={step}
              onValueChange={(value) => {
                field.onChange(value[0]);
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
