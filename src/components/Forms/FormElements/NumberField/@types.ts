import type { FormElementFormProps, FormElementInstance } from '../@types';
import type { NumberFieldCustomProperties } from '.';

export type NumberFieldInstance = FormElementInstance & {
  properties: typeof NumberFieldCustomProperties;
};

export type NumberFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type NumberFieldFormComponentProps = FormElementFormProps & {};
