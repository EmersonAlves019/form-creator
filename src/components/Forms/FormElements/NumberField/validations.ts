import type { FormElementInstance } from '../@types';
import type { NumberFieldInstance } from './@types';

export const validate = (
  elementInstance: FormElementInstance,
  currentValue: string
) => {
  const element = elementInstance as NumberFieldInstance;
  if (element.properties.required) {
    return currentValue.length > 0;
  }

  return true;
};
