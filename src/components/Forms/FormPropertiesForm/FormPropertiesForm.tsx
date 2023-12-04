import { AiOutlineClose } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useBoundStore } from '@/store/useBoundStore';

import { FormElements } from '../FormElements';

export function FormPropertiesForm() {
  const {
    selectedElement,
    actions: { setSelectedElement },
  } = useBoundStore((state) => state);

  if (!selectedElement) return null;

  const PropertiesForm = FormElements[selectedElement.type].propertiesComponent;

  return (
    <div className="flex flex-col p-2">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground/70">Element properties</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSelectedElement(null)}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <Separator className="mb-4" />
      <PropertiesForm elementInstance={selectedElement} />
    </div>
  );
}
