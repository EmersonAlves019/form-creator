import type { FormElementInstance } from '../@types';
import type { TextFieldCustomProperties } from '.';

export type TextFieldInstance = FormElementInstance & {
  properties: typeof TextFieldCustomProperties;
};
