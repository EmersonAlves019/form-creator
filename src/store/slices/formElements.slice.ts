import type { StateCreator } from 'zustand';

import type { FormElementInstance } from '@/components/Forms/FormElements/@types';

import type { FormElementsSlice } from '../@types';

export const createFormElementsSlice: StateCreator<FormElementsSlice> = (
  set
) => ({
  elements: [],
  selectedElement: null,
  actions: {
    setElements: (elements: FormElementInstance[]) =>
      set({ elements, selectedElement: null }),
    addElement: (index: number, element: FormElementInstance) =>
      set((state: FormElementsSlice) => {
        const elements = [...state.elements];
        elements.splice(index, 0, element);
        return { elements };
      }),
    updateElementProperties: (id: string, properties: Record<string, any>) =>
      set((state: FormElementsSlice) => {
        const elements = [...state.elements];
        const elementIndex = elements.findIndex((e) => e.id === id);
        elements[elementIndex].properties = properties;
        return { elements };
      }),
    removeElement: (elementId: string) =>
      set((state: FormElementsSlice) => ({
        elements: state.elements.filter((e) => e.id !== elementId),
        selectedElement:
          state.selectedElement?.id === elementId
            ? null
            : state.selectedElement,
      })),
    setSelectedElement: (element: FormElementInstance | null) =>
      set({ selectedElement: element }),
  },
});
