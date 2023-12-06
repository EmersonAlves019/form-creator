import type {
  TitleFieldFormComponentProps,
  TitleFieldInstance,
} from './@types';

export function TitleFieldForm({
  elementInstance,
}: TitleFieldFormComponentProps) {
  const element = elementInstance as TitleFieldInstance;

  const { title } = element.properties;

  return <p className="text-xl">{title}</p>;
}
