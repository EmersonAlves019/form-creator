import type { FormElementInstance } from '../@types';
import type { SelectFieldInstance } from './@types';

export const validate = (
  elementInstance: FormElementInstance,
  currentValue: string
) => {
  const element = elementInstance as SelectFieldInstance;
  if (element.properties.required) {
    return currentValue.length > 0;
  }

  return true;
};
