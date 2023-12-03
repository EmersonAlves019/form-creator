import { Button } from '@/components/ui/button';
import { useBoundStore } from '@/store/useBoundStore';
import { BiSolidTrash } from 'react-icons/bi';
import { RemoveFormElementButtonProps } from './@types';

export function RemoveFormElementButton({
  elementId,
}: RemoveFormElementButtonProps) {
  const { removeElement } = useBoundStore((state) => state.actions);
  return (
    <div className="absolute right-0 h-full">
      <Button
        variant="outline"
        className="flex justify-center h-full border rounded-l-none bg-red-500"
        onClick={(e) => {
          e.stopPropagation()
          removeElement(elementId)
        } 
      }
      >
        <BiSolidTrash className="w-6 h-6" />
      </Button>
    </div>
  );
}
