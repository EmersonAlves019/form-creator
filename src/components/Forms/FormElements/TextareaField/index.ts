
import type { ElementsType, FormElement } from '../@types';
import { TextareaFieldDesigner } from './TextareaFieldDesigner';
import { TextareaFieldForm } from './TextareaFieldForm';
import { TextareaFieldProperties } from './TextareaFieldProperties';
import { validate } from './validations';
import {  BsTextareaResize } from 'react-icons/bs';

const type: ElementsType = 'TextareaField';

export const TextareaFieldCustomProperties = {
  label: 'Text Area',
  helperText: 'Helper text',
  required: false,
  placeHolder: 'Your text here',
  rows: 3,
};

export const TextareaFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: TextareaFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: BsTextareaResize,
    label: 'Textarea Field',
  },
  designerComponent: TextareaFieldDesigner,
  formComponent: TextareaFieldForm,
  propertiesComponent: TextareaFieldProperties,
  validate,
};
