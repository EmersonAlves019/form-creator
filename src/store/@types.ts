import type { FormElementInstance } from '@/components/Forms/FormElements/@types';

export type FormElementsSlice = {
  elements: FormElementInstance[];
  selectedElement: FormElementInstance | null;
  actions: {
    addElement: (index: number, element: FormElementInstance) => void;
    removeElement: (elementId: string) => void;
    setSelectedElement: (element: FormElementInstance | null) => void;
  };
};
