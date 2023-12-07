import type React from 'react';
import type { Control } from 'react-hook-form';

export type PropertiesTextareaProps = {
  control: Control<any>;
  label: string;
  description: string | React.ReactNode;
  name: string;
};
