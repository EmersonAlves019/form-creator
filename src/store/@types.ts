import type { FormElementInstance } from '@/components/Forms/FormElements/@types';

export type FormElementsSlice = {
  elements: FormElementInstance[];
  selectedElement: FormElementInstance | null;
  actions: {
    setElements: (elements: FormElementInstance[]) => void;
    addElement: (index: number, element: FormElementInstance) => void;
    updateElementProperties: (
      id: string,
      properties: Record<string, any>
    ) => void;
    removeElement: (elementId: string) => void;
    setSelectedElement: (element: FormElementInstance | null) => void;
  };
};
