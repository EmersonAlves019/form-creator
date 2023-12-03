'use client';

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import { PreviewDialogButton } from '../Buttons/PreviewDialogButton';
import { PublishFormButton } from '../Buttons/PublishFormButton';
import { SaveFormButton } from '../Buttons/SaveFormButton';
import { Designer } from '../Designer';
import { DragOverlayWrapper } from '../DragOverlayWrapper';
import type { FormBuilderProps } from './@types';

export function FormBuilder({ form }: FormBuilderProps) {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext sensors={sensors}>
      <main className="flex w-full flex-col">
        <nav className="flex items-center justify-between gap-3 border-b-2 border-border p-4">
          <h2 className="truncate font-medium">
            <span className="mr-2 text-muted-foreground">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogButton />
            {!form.published && (
              <>
                <SaveFormButton />
                <PublishFormButton />
              </>
            )}
          </div>
        </nav>
        <div className="relative flex h-[200px] w-full grow items-center justify-center overflow-y-auto bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}
