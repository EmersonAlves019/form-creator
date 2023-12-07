import { LuSeparatorHorizontal } from 'react-icons/lu';

import type { ElementsType, FormElement } from '../@types';
import { SpacerFieldDesigner } from './SpacerFieldDesigner';
import { SpacerFieldForm } from './SpacerFieldForm';
import { SpacerFieldProperties } from './SpacerFieldProperties';

const type: ElementsType = 'SpacerField';

export const SpacerFieldCustomProperties = {
  height: 20,
};

export const SpacerFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: SpacerFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: LuSeparatorHorizontal,
    label: 'Spacer Field',
  },
  designerComponent: SpacerFieldDesigner,
  formComponent: SpacerFieldForm,
  propertiesComponent: SpacerFieldProperties,
  validate: () => true,
};
