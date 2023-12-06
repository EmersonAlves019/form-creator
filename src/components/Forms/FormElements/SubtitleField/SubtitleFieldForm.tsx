import type {
  SubtitleFieldFormComponentProps,
  SubtitleFieldInstance,
} from './@types';

export function SubtitleFieldForm({
  elementInstance,
}: SubtitleFieldFormComponentProps) {
  const element = elementInstance as SubtitleFieldInstance;

  const { title } = element.properties;

  return <p className="text-lg">{title}</p>;
}
