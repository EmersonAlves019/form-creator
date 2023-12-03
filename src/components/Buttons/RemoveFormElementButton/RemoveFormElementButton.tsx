import { BiSolidTrash } from 'react-icons/bi';

import { Button } from '@/components/ui/button';
import { useBoundStore } from '@/store/useBoundStore';

import type { RemoveFormElementButtonProps } from './@types';

export function RemoveFormElementButton({
  elementId,
}: RemoveFormElementButtonProps) {
  const { removeElement } = useBoundStore((state) => state.actions);
  return (
    <div className="absolute right-0 h-full">
      <Button
        variant="outline"
        className="flex h-full justify-center rounded-l-none border bg-red-500"
        onClick={(e) => {
          e.stopPropagation();
          removeElement(elementId);
        }}
      >
        <BiSolidTrash className="h-6 w-6" />
      </Button>
    </div>
  );
}
