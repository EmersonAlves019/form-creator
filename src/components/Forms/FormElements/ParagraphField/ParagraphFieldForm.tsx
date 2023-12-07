import type {
  ParagraphFieldFormComponentProps,
  ParagraphFieldInstance,
} from './@types';

export function ParagraphFieldForm({
  elementInstance,
}: ParagraphFieldFormComponentProps) {
  const element = elementInstance as ParagraphFieldInstance;

  const { text } = element.properties;

  return <p className="text-sm">{text}</p>;
}
