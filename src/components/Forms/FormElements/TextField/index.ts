import { ElementsType, FormElement } from "../@types";
import { MdTextFields } from "react-icons/md";
import { TextFieldDesigner } from "./TextFieldDesigner";
import { TextFieldForm } from "./TextFieldForm";
import { TextFieldProperties } from "./TextFieldProperties";


const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: {
      label: 'Text Field',
      helperText: 'Helper text',
      required: false,
      placeholder: 'Your text here',
    }
  }),
  designerButtonElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  designerComponent: TextFieldDesigner,
  formComponent: TextFieldForm,
  propertiesComponent: TextFieldProperties,
};