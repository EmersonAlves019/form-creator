import type { FormElementInstance } from '../@types';
import type { SpacerFieldCustomProperties } from '.';

export type SpacerFieldPropertiesFormProps = {
  elementInstance: FormElementInstance;
};

export type SpacerFieldInstance = FormElementInstance & {
  properties: typeof SpacerFieldCustomProperties;
};

export type SpacerFieldDesignerProps = {
  elementInstance: FormElementInstance;
};

export type SpacerFieldFormComponentProps = {
  elementInstance: FormElementInstance;
};