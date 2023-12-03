import { StateCreator } from 'zustand'
import { FormElementsSlice } from '../@types';
import { FormElementInstance } from '@/components/Forms/FormElements/@types';

export const createFormElementsSlice: StateCreator<FormElementsSlice> = (set) => ({
  elements: [],
  selectedElement: null,
  actions: {
    addElement: (index: number, element: FormElementInstance) => set((state: FormElementsSlice) => {
      const elements = [...state.elements]
      elements.splice(index, 0, element)
      return { elements }
    } ),
    removeElement: (elementId: string) => set((state: FormElementsSlice) => ({
      elements: state.elements.filter(e => e.id !== elementId)
    })),
    setSelectedElement: (element: FormElementInstance | null) => set({ selectedElement: element }),
  },
})
  