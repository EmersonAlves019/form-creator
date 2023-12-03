import type { StateCreator } from 'zustand';

import type { FormElementInstance } from '@/components/Forms/FormElements/@types';

import type { FormElementsSlice } from '../@types';

export const createFormElementsSlice: StateCreator<FormElementsSlice> = (
  set
) => ({
  elements: [],
  selectedElement: null,
  actions: {
    addElement: (index: number, element: FormElementInstance) =>
      set((state: FormElementsSlice) => {
        const elements = [...state.elements];
        elements.splice(index, 0, element);
        return { elements };
      }),
    removeElement: (elementId: string) =>
      set((state: FormElementsSlice) => ({
        elements: state.elements.filter((e) => e.id !== elementId),
      })),
    setSelectedElement: (element: FormElementInstance | null) =>
      set({ selectedElement: element }),
  },
});
