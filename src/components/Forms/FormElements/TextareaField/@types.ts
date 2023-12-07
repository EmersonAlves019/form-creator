import type { FormElementFormProps, FormElementInstance } from '../@types';
import type { TextareaFieldCustomProperties } from '.';

export type TextareaFieldInstance = FormElementInstance & {
  properties: typeof TextareaFieldCustomProperties;
};

export type TextareaFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type TextareaFieldFormComponentProps = FormElementFormProps & {};
