import type { FormElementInstance } from '../@types';
import type { DateFieldInstance } from './@types';

export const validate = (
  elementInstance: FormElementInstance,
  currentValue: string
) => {
  const element = elementInstance as DateFieldInstance;
  if (element.properties.required) {
    return currentValue.length > 0;
  }

  return true;
};
