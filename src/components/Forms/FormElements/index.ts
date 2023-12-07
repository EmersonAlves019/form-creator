import type { FormElementsType } from './@types';
import { DateFieldFormElement } from './DateField';
import { NumberFieldFormElement } from './NumberField';
import { ParagraphFieldFormElement } from './ParagraphField';
import { SeparatorFieldFormElement } from './SeparatorField';
import { SpacerFieldFormElement } from './SpacerField';
import { SubtitleFieldFormElement } from './SubtitleField';
import { TextFieldFormElement } from './TextField';
import { TextareaFieldFormElement } from './TextareaField';
import { TitleFieldFormElement } from './TitleField';

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubtitleField: SubtitleFieldFormElement,
  ParagraphField: ParagraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
  NumberField: NumberFieldFormElement,
  TextareaField: TextareaFieldFormElement,
  DateField: DateFieldFormElement,
};
