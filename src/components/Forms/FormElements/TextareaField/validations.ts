import type { FormElementInstance } from '../@types';
import type { TextareaFieldInstance } from './@types';

export const validate = (
  elementInstance: FormElementInstance,
  currentValue: string
) => {
  const element = elementInstance as TextareaFieldInstance;
  if (element.properties.required) {
    return currentValue.length > 0;
  }

  return true;
};
