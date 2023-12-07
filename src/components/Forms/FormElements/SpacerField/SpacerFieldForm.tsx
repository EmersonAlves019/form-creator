import { Separator } from '@/components/ui/separator';
import { SpacerFieldFormComponentProps, SpacerFieldInstance } from './@types';

export function SpacerFieldForm({
  elementInstance,
}: SpacerFieldFormComponentProps) {
  const instance = elementInstance as SpacerFieldInstance;
  const { height } = instance.properties;
  return <div style={{ height, width: '100%' }}></div>;
}
