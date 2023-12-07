import type { FormElementFormProps, FormElementInstance } from '../@types';
import type { ParagraphFieldCustomProperties } from '.';

export type ParagraphFieldInstance = FormElementInstance & {
  properties: typeof ParagraphFieldCustomProperties;
};

export type ParagraphFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type ParagraphFieldFormComponentProps = FormElementFormProps & {};
