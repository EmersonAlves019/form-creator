import type { FormElementsType } from './@types';
import { SubtitleFieldFormElement } from './SubtitleField';
import { TextFieldFormElement } from './TextField';
import { TitleFieldFormElement } from './TitleField';

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubtitleField: SubtitleFieldFormElement,
};
