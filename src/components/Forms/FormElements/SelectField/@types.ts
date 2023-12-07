import type { FormElementFormProps, FormElementInstance } from '../@types';
import type { SelectFieldCustomProperties } from '.';

export type SelectFieldInstance = FormElementInstance & {
  properties: typeof SelectFieldCustomProperties;
};

export type SelectFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type SelectFieldFormComponentProps = FormElementFormProps & {};
