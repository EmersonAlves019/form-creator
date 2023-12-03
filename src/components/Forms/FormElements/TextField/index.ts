import { MdTextFields } from 'react-icons/md';

import type { ElementsType, FormElement } from '../@types';
import { TextFieldDesigner } from './TextFieldDesigner';
import { TextFieldForm } from './TextFieldForm';
import { TextFieldProperties } from './TextFieldProperties';

const type: ElementsType = 'TextField';

export const TextFieldCustomProperties = {
  label: 'Text Field',
  helperText: 'Helper text',
  required: false,
  placeholder: 'Your text here',
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: TextFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  designerComponent: TextFieldDesigner,
  formComponent: TextFieldForm,
  propertiesComponent: TextFieldProperties,
};
