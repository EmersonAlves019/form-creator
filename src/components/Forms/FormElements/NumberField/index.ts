
import type { ElementsType, FormElement } from '../@types';
import { NumberFieldDesigner } from './NumberFieldDesigner';
import { NumberFieldForm } from './NumberFieldForm';
import { NumberFieldProperties } from './NumberFieldProperties';
import { validate } from './validations';
import { Bs123 } from 'react-icons/bs';

const type: ElementsType = 'NumberField';

export const NumberFieldCustomProperties = {
  label: 'Number Field',
  helperText: 'Helper text',
  required: false,
  placeHolder: '0',
};

export const NumberFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: NumberFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: Bs123,
    label: 'Number Field',
  },
  designerComponent: NumberFieldDesigner,
  formComponent: NumberFieldForm,
  propertiesComponent: NumberFieldProperties,
  validate,
};
