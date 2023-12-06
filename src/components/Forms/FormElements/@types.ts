export type ElementsType = 'TextField';

export type FormElementDesignerProps = {
  elementInstance: FormElementInstance;
};

export type FormElementFormProps = {
  elementInstance: FormElementInstance;
  submitValue?: (key: string, value: any) => void;
  isInvalid?: boolean;
  defaultValue?: string;
};

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerButtonElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<FormElementDesignerProps>;
  formComponent: React.FC<FormElementFormProps>;
  propertiesComponent: React.FC<FormElementDesignerProps>;

  validate: (
    elementInstance: FormElementInstance,
    currentValue: string
  ) => boolean;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  properties?: Record<string, any>;
};

export type FormElementsType = {
  [key in ElementsType]: FormElement;
};
