import { Label } from '@/components/ui/label';
import { FormElementDesignerProps } from '../@types';
import { TextFieldInstance } from './@types';
import { Input } from '@/components/ui/input';

export function TextFieldDesigner({
  elementInstance,
}: FormElementDesignerProps) {
  const element = elementInstance as TextFieldInstance;

  const { label, placeholder, required, helperText } = element.properties;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input readOnly disabled placeholder={placeholder} />
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
