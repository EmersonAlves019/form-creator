'use client';

import { useDndMonitor, useDroppable } from '@dnd-kit/core';

import { idGenerator } from '@/lib/idGenerator';
import { cn } from '@/lib/utils';
import { useBoundStore } from '@/store/useBoundStore';

import { DesignerSidebar } from '../DesignerSidebar';
import { FormElements } from '../Forms/FormElements';
import type { ElementsType } from '../Forms/FormElements/@types';
import { DesignerFormElements } from '../Lists/DesignerFormElements';

export function Designer() {
  const {
    actions: { addElement, setSelectedElement, removeElement },
    elements,
    selectedElement,
  } = useBoundStore((state) => state);

  const droppable = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;
      const isDesignerButtonElement =
        active.data?.current?.isDesignerButtonElement;

      const isDroppingOverDesignerDropArea =
        over.data?.current?.isDesignerDropArea;

      const droppingSidebarButtonOverDesignerDropArea =
        isDesignerButtonElement && isDroppingOverDesignerDropArea;

      if (droppingSidebarButtonOverDesignerDropArea) {
        const type = active.data?.current?.type as ElementsType;
        const newFormElement = FormElements[type].construct(idGenerator());
        addElement(elements.length, newFormElement);
      }

      const droppingOverDesignerTopHalf =
        over.data?.current?.isDesignerElementTopHalf;

      const droppingOverDesignerBottomHalf =
        over.data?.current?.isDesignerElementBottomHalf;

      const isDroppingOverDesignerElement =
        droppingOverDesignerTopHalf || droppingOverDesignerBottomHalf;

      const droppingSidebarButtonOverDesignerElement =
        isDesignerButtonElement && isDroppingOverDesignerElement;

      if (droppingSidebarButtonOverDesignerElement) {
        const type = active.data?.current?.type as ElementsType;
        const newFormElement = FormElements[type].construct(idGenerator());

        const overElementId = over.data?.current?.elementId;

        const overElementIndex = elements.findIndex(
          (el) => el.id === overElementId
        );
        if (overElementIndex === -1) return;

        let index = overElementIndex;
        if (droppingOverDesignerBottomHalf) {
          index = overElementIndex + 1;
        }

        addElement(index, newFormElement);
      }

      const isDraggingDesignerElement = active.data?.current?.isDesignerElement;

      const draggingDesignerElementOverAnotherDesignerElement =
        isDroppingOverDesignerElement && isDraggingDesignerElement;

      if (draggingDesignerElementOverAnotherDesignerElement) {
        const activeElementId = active.data?.current?.elementId;
        const overElementId = over.data?.current?.elementId;

        const activeElementIndex = elements.findIndex(
          (el) => el.id === activeElementId
        );
        const overElementIndex = elements.findIndex(
          (el) => el.id === overElementId
        );
        if (activeElementIndex === -1 || overElementIndex === -1) return;

        const activeElement = elements[activeElementIndex];

        removeElement(activeElementId);
        addElement(overElementIndex, activeElement);
      }
    },
  });

  return (
    <div className="flex h-full w-full">
      <div
        className="w-full p-4"
        onClick={(e) => {
          e.stopPropagation();
          if (selectedElement) setSelectedElement(null);
        }}
        role="presentation"
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            'bg-background max-w-980px h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto',
            droppable.isOver && 'ring-2 ring-primary'
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="flex grow items-center text-3xl font-bold text-muted-foreground">
              Drop here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="w-full p-4">
              <div className="h-[120px] rounded bg-muted-foreground/20" />
            </div>
          )}
          <DesignerFormElements />
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}
