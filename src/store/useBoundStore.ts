import { create } from 'zustand';

import type { FormElementsSlice } from './@types';
import { createFormElementsSlice } from './slices/formElements.slice';

export const useBoundStore = create<FormElementsSlice>()((...a) => ({
  ...createFormElementsSlice(...a),
}));
