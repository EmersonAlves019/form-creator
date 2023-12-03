import { useDraggable, useDroppable } from '@dnd-kit/core';
import { FormElements } from '../Forms/FormElements';
import { DesignerFormElementWrapperProps } from './@types';
import { useState } from 'react';
import { Button } from '../ui/button';
import { BiSolidTrash } from 'react-icons/bi';
import { RemoveFormElementButton } from '../Buttons/RemoveFormElementButton';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

export function DesignerFormElementWrapper({
  element,
}: DesignerFormElementWrapperProps) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const { setSelectedElement } = useBoundStore((state) => state.actions);

  const DesignerElement = FormElements[element.type].designerComponent;

  const topHalf = useDroppable({
    id: `top-half-${element.id}`,
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElementTopHalf: true,
    },
  });

  const bottomHalf = useDroppable({
    id: `bottom-half-${element.id}`,
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElementBottomHalf: true,
    },
  });

  const draggable = useDraggable({
    id: `draggable-${element.id}`,
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
    },
  });

  if (draggable.isDragging) return null;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      {...draggable.listeners}
      className="relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-foreground/40"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
    >
      <div
        ref={topHalf.setNodeRef}
        className={'absolute w-full h-1/2 rounded-t-md'}
      ></div>
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute bottom-0 w-full h-1/2 rounded-b-md"
      ></div>
      {mouseIsOver && (
        <>
          <RemoveFormElementButton elementId={element.id} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <p className="text-muted-foreground text-sm">
              Click for properties or drag to move
            </p>
          </div>
        </>
      )}
      {topHalf.isOver && (
        <div className="absolute top-0 w-full h-2 bg-foreground rounded-md rounded-b-none" />
      )}
      {bottomHalf.isOver && (
        <div className="absolute bottom-0 w-full h-2 bg-foreground rounded-md rounded-t-none" />
      )}
      <div
        className={cn(
          'flex w-full h-[120px] items-center rounded-md bg-accent/80 px-4 py-2 pointer-events-none opacity-100',
          mouseIsOver && 'opacity-30'
        )}
      >
        <DesignerElement elementInstance={element} />
      </div>
    </div>
  );
}
