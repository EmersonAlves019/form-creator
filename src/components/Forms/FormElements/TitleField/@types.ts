import type { FormElementFormProps, FormElementInstance } from '../@types';
import type { TitleFieldCustomProperties } from '.';

export type TitleFieldInstance = FormElementInstance & {
  properties: typeof TitleFieldCustomProperties;
};

export type TitleFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type TitleFieldFormComponentProps = FormElementFormProps & {};
