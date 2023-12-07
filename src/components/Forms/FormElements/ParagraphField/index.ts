import { BsTextParagraph } from 'react-icons/bs';

import type { ElementsType, FormElement } from '../@types';
import { ParagraphFieldDesigner } from './ParagraphFieldDesigner';
import { ParagraphFieldForm } from './ParagraphFieldForm';
import { ParagraphFieldProperties } from './ParagraphFieldProperties';

const type: ElementsType = 'ParagraphField';

export const ParagraphFieldCustomProperties = {
  text: 'Paragraph Field',
};

export const ParagraphFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: ParagraphFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: BsTextParagraph,
    label: 'Paragraph Field',
  },
  designerComponent: ParagraphFieldDesigner,
  formComponent: ParagraphFieldForm,
  propertiesComponent: ParagraphFieldProperties,
  validate: () => true,
};
