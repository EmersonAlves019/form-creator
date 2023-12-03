export type ElementsType = 'TextField';

export type FormElementDesignerProps = {
  elementInstance: FormElementInstance;
}

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerButtonElement: {
    icon: React.ElementType;
    label: string;
  }

  designerComponent: React.FC<FormElementDesignerProps>;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  properties?: Record<string, any>;
}

export type FormElementsType = {
  [key in ElementsType]: FormElement;
}

