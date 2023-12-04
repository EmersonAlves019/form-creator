'use client';

import type { Active, DragEndEvent, Over } from '@dnd-kit/core';
import { useCallback } from 'react';

import { FormElements } from '@/components/Forms/FormElements';
import type { ElementsType } from '@/components/Forms/FormElements/@types';
import { idGenerator } from '@/lib/idGenerator';
import { useBoundStore } from '@/store/useBoundStore';

export const useDragAndDrop = () => {
  const {
    actions: { addElement, removeElement },
    elements,
  } = useBoundStore((state) => state);

  const handleDropOnDesignerDropArea = useCallback(
    (active: Active) => {
      const type = active.data?.current?.type as ElementsType;
      const newFormElement = FormElements[type].construct(idGenerator());
      addElement(elements.length, newFormElement);
    },
    [addElement, elements]
  );

  const handleDropOnDesignerElement = useCallback(
    (active: Active, over: Over) => {
      const type = active.data?.current?.type as ElementsType;
      const newFormElement = FormElements[type].construct(idGenerator());

      const overElementId = over.data?.current?.elementId;

      const overElementIndex = elements.findIndex(
        (el) => el.id === overElementId
      );
      if (overElementIndex === -1) return;

      let index = overElementIndex;
      if (over.data?.current?.isDesignerElementBottomHalf) {
        index = overElementIndex + 1;
      }

      addElement(index, newFormElement);
    },
    [addElement, elements]
  );

  const handleDropOnAnotherDesignerElement = useCallback(
    (active: Active, over: Over) => {
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
    },
    [addElement, removeElement, elements]
  );

  const onDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isDesignerButtonElement =
        active.data?.current?.isDesignerButtonElement;
      const isDroppingOverDesignerDropArea =
        over.data?.current?.isDesignerDropArea;

      if (isDesignerButtonElement && isDroppingOverDesignerDropArea) {
        handleDropOnDesignerDropArea(active);
      }

      const isDroppingOverDesignerElement =
        over.data?.current?.isDesignerElementTopHalf ||
        over.data?.current?.isDesignerElementBottomHalf;

      if (isDesignerButtonElement && isDroppingOverDesignerElement) {
        handleDropOnDesignerElement(active, over);
      }

      const isDraggingDesignerElement = active.data?.current?.isDesignerElement;
      const draggingDesignerElementOverAnotherDesignerElement =
        isDroppingOverDesignerElement && isDraggingDesignerElement;

      if (draggingDesignerElementOverAnotherDesignerElement) {
        handleDropOnAnotherDesignerElement(active, over);
      }
    },
    [
      handleDropOnDesignerDropArea,
      handleDropOnDesignerElement,
      handleDropOnAnotherDesignerElement,
    ]
  );

  return { onDragEnd };
};
