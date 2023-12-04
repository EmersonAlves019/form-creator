import type React from 'react';
import type { Control } from 'react-hook-form';

export type PropertiesFromFieldProps = {
  control: Control<any>;
  label: string;
  description: string | React.ReactNode;
  name: string;
};
