import type { FormElementFormProps, FormElementInstance } from '../@types';
import type { DateFieldCustomProperties } from '.';

export type DateFieldInstance = FormElementInstance & {
  properties: typeof DateFieldCustomProperties;
};

export type DateFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type DateFieldFormComponentProps = FormElementFormProps & {};
