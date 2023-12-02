import { Button } from '@/components/ui/button';
import { SidebarButtonElementProps } from './@types';
import { useDraggable } from '@dnd-kit/core';
import { cn } from '@/lib/utils';

export function SidebarButtonElement({
  formElement,
}: SidebarButtonElementProps) {
  const { label, icon: Icon } = formElement.designerButtonElement;

  const draggable = useDraggable({
    id: `designer-button-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      variant="outline"
      className={cn(
        'flex text-foreground flex-col gap-2 h-[120px] w-[120px] cursor-grab',
        draggable.isDragging && 'ring-2 ring-primary'
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="h-8 w-8  cursor-grab" />
      <p className="tex-xs">{label}</p>
    </Button>
  );
}

export function SidebarButtonElementOverlay({
  formElement,
}: SidebarButtonElementProps) {
  const { label, icon: Icon } = formElement.designerButtonElement;

  return (
    <Button
      variant="outline"
      className="flex text-foreground flex-col gap-2 h-[120px] w-[120px] cursor-grab"
    >
      <Icon className="h-8 w-8  cursor-grab" />
      <p className="tex-xs">{label}</p>
    </Button>
  );
}
