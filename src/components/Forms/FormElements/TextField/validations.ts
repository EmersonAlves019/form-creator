import type { FormElementInstance } from '../@types';
import type { TextFieldInstance } from './@types';

export const validate = (
  elementInstance: FormElementInstance,
  currentValue: string
) => {
  const element = elementInstance as TextFieldInstance;
  if (element.properties.required) {
    return currentValue.length > 0;
  }

  return true;
};
