import type React from 'react';
import type { Control, UseFormReturn } from 'react-hook-form';

export type PropertiesSelectAddProps = {
  control: Control<any>;
  label: string;
  description: string | React.ReactNode;
  name: string;
};
