
import {  BsFillCalendarDateFill  } from 'react-icons/bs';
import type { ElementsType, FormElement } from '../@types';
import { DateFieldDesigner } from './DateFieldDesigner';
import { DateFieldForm } from './DateFieldForm';
import { DateFieldProperties } from './DateFieldProperties';
import { validate } from './validations';

const type: ElementsType = 'DateField';

export const DateFieldCustomProperties = {
  label: 'Date Field',
  helperText: 'Pick a date',
  required: false,
};

export const DateFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: DateFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: BsFillCalendarDateFill,
    label: 'Date Field',
  },
  designerComponent: DateFieldDesigner,
  formComponent: DateFieldForm,
  propertiesComponent: DateFieldProperties,
  validate,
};
