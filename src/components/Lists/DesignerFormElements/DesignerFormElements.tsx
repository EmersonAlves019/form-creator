import { DesignerFormElementWrapper } from '@/components/DesignerFormElementWrapper';
import { useBoundStore } from '@/store/useBoundStore';
import React from 'react';

export function DesignerFormElements() {
  const { elements } = useBoundStore((state) => state);

  return (
    elements.length > 0 && (
      <div className="flex flex-col w-full gap-2 p-4">
        {elements.map((element) => {
          return (
            <DesignerFormElementWrapper key={element.id} element={element} />
          );
        })}
      </div>
    )
  );
}
