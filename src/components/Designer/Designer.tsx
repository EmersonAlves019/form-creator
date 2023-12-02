import { cn } from '@/lib/utils';
import { DesignerSidebar } from '../DesignerSidebar';

import { useDroppable } from '@dnd-kit/core';

export function Designer() {
  const droppable = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            'bg-background max-w-980px h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto',
            droppable.isOver && 'ring-2 ring-primary'
          )}
        >
          {!droppable.isOver && (
            <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded bg-muted-foreground/20" />
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}
