'use client';

import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

import { RemoveFormElementButton } from '../Buttons/RemoveFormElementButton';
import { FormElements } from '../Forms/FormElements';
import type { DesignerFormElementWrapperProps } from './@types';

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
      className="relative flex h-[120px] flex-col rounded-md text-foreground ring-1 ring-foreground/40 hover:cursor-pointer"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
      role="presentation"
    >
      <div
        ref={topHalf.setNodeRef}
        className="absolute h-1/2 w-full rounded-t-md"
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute bottom-0 h-1/2 w-full rounded-b-md"
      />
      {mouseIsOver && (
        <>
          <RemoveFormElementButton elementId={element.id} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <p className="text-sm text-muted-foreground">
              Click for properties or drag to move
            </p>
          </div>
        </>
      )}
      {topHalf.isOver && (
        <div className="absolute top-0 h-2 w-full rounded-md rounded-b-none bg-foreground" />
      )}
      {bottomHalf.isOver && (
        <div className="absolute bottom-0 h-2 w-full rounded-md rounded-t-none bg-foreground" />
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
