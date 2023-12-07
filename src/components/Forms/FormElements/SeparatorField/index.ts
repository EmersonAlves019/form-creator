import { RiSeparator } from 'react-icons/ri';

import type { ElementsType, FormElement } from '../@types';
import { SeparatorFieldDesigner } from './SeparatorFieldDesigner';
import { SeparatorFieldForm } from './SeparatorFieldForm';
import { SeparatorFieldProperties } from './SeparatorFieldProperties';

const type: ElementsType = 'SeparatorField';

export const SeparatorFieldCustomProperties = {};

export const SeparatorFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: SeparatorFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: RiSeparator,
    label: 'Separator Field',
  },
  designerComponent: SeparatorFieldDesigner,
  formComponent: SeparatorFieldForm,
  propertiesComponent: SeparatorFieldProperties,
  validate: () => true,
};
