import { LuHeading1 } from 'react-icons/lu';

import type { ElementsType, FormElement } from '../@types';
import { TitleFieldDesigner } from './TitleFieldDesigner';
import { TitleFieldForm } from './TitleFieldForm';
import { TitleFieldProperties } from './TitleFieldProperties';

const type: ElementsType = 'TitleField';

export const TitleFieldCustomProperties = {
  title: 'Title Field',
};

export const TitleFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: TitleFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: LuHeading1,
    label: 'Title Field',
  },
  designerComponent: TitleFieldDesigner,
  formComponent: TitleFieldForm,
  propertiesComponent: TitleFieldProperties,
  validate: () => true,
};
