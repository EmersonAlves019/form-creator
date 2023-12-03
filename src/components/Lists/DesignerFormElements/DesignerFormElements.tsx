import React from 'react';

import { DesignerFormElementWrapper } from '@/components/DesignerFormElementWrapper';
import { useBoundStore } from '@/store/useBoundStore';

export function DesignerFormElements() {
  const { elements } = useBoundStore((state) => state);

  return (
    elements.length > 0 && (
      <div className="flex w-full flex-col gap-2 p-4">
        {elements.map((element) => {
          return (
            <DesignerFormElementWrapper key={element.id} element={element} />
          );
        })}
      </div>
    )
  );
}
