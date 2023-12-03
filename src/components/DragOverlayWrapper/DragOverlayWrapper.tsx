import type { Active } from '@dnd-kit/core';
import { DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';

import { useBoundStore } from '@/store/useBoundStore';

import { SidebarButtonElementOverlay } from '../Buttons/SidebarButtonElement';
import { FormElements } from '../Forms/FormElements';
import type { ElementsType } from '../Forms/FormElements/@types';

export function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  const { elements } = useBoundStore((state) => state);

  useDndMonitor({
    onDragStart: (e) => setDraggedItem(e.active),
    onDragEnd: () => setDraggedItem(null),
    onDragCancel: () => setDraggedItem(null),
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarButtonElement =
    draggedItem?.data?.current?.isDesignerButtonElement;

  if (isSidebarButtonElement) {
    const type = draggedItem?.data?.current?.type as ElementsType;
    node = <SidebarButtonElementOverlay formElement={FormElements[type]} />;
  }

  const isDesignerElement = draggedItem?.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem?.data?.current?.elementId;
    const element = elements.find((element) => element.id === elementId);
    if (!element) return null;
    const DesignerElement = FormElements[element.type].designerComponent;
    node = (
      <div className="pointer-events-none flex h-[120px] w-full rounded-md border bg-accent px-4 py-2 opacity-80">
        <DesignerElement elementInstance={element} />
      </div>
    );
  }

  return <DragOverlay>{node}</DragOverlay>;
}
