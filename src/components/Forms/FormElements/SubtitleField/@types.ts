import type { FormElementFormProps, FormElementInstance } from '../@types';
import type { SubtitleFieldCustomProperties } from '.';

export type SubtitleFieldInstance = FormElementInstance & {
  properties: typeof SubtitleFieldCustomProperties;
};

export type SubtitleFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type SubtitleFieldFormComponentProps = FormElementFormProps & {};
