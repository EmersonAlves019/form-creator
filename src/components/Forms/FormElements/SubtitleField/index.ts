import { LuHeading2 } from 'react-icons/lu';

import type { ElementsType, FormElement } from '../@types';
import { SubtitleFieldDesigner } from './SubtitleFieldDesigner';
import { SubtitleFieldForm } from './SubtitleFieldForm';
import { SubtitleFieldProperties } from './SubtitleFieldProperties';

const type: ElementsType = 'SubtitleField';

export const SubtitleFieldCustomProperties = {
  title: 'Subtitle Field',
};

export const SubtitleFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: SubtitleFieldCustomProperties,
  }),
  designerButtonElement: {
    icon: LuHeading2,
    label: 'Subtitle Field',
  },
  designerComponent: SubtitleFieldDesigner,
  formComponent: SubtitleFieldForm,
  propertiesComponent: SubtitleFieldProperties,
  validate: () => true,
};
