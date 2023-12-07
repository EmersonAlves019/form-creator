import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { PropertiesSelectAddProps } from './@types';
import { Button } from '@/components/ui/button';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

export function PropertiesSelectAdd({
  control,
  description,
  name,
}: PropertiesSelectAddProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between items-center">
            <FormLabel htmlFor="label">Options</FormLabel>
            <Button
              variant={'outline'}
              onClick={(e) => {
                e.preventDefault();
                field.onChange([...field.value, 'New Option']);
                console.log(field.value);
              }}
            >
              <AiOutlinePlus />
              Add
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {field.value.map((option: string, index: number) => (
              <div
                key={'select-option' + index}
                className="flex justify-between items-center gap-1"
              >
                <Input
                  placeholder=""
                  value={option}
                  onChange={(e) => {
                    field.value[index] = e.target.value;
                    field.onChange(field.value);
                  }}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    field.value.splice(index, 1);
                    field.onChange(field.value);
                  }}
                >
                  <AiOutlineClose />
                </Button>
              </div>
            ))}
          </div>
          <FormDescription className="text-foreground/70">
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
