import { RxDropdownMenu } from 'react-icons/rx';

import type { ElementsType, FormElement } from '../@types';
import { SelectFieldDesigner } from './SelectFieldDesigner';
import { SelectFieldForm } from './SelectFieldForm';
import { SelectFieldProperties } from './SelectFieldProperties';
import { validate } from './validations';

const type: ElementsType = 'SelectField';

export const SelectFieldCustomProperties = {
  label: 'Select Field',
  helperText: 'Helper text',
  required: false,
  placeHolder: 'Select an option',
  options:  []
};

export const SelectFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: SelectFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: RxDropdownMenu,
    label: 'Select Field',
  },
  designerComponent: SelectFieldDesigner,
  formComponent: SelectFieldForm,
  propertiesComponent: SelectFieldProperties,
  validate,
};
