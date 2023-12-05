'use client';

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { useBoundStore } from '@/store/useBoundStore';

import { PublishFormButton } from '../Buttons/PublishFormButton';
import { SaveFormButton } from '../Buttons/SaveFormButton';
import { Designer } from '../Designer';
import { PreviewFormDialog } from '../Dialogs/PreviewFormDialog';
import { DragOverlayWrapper } from '../DragOverlayWrapper';
import { PublishedForm } from '../PublishedForm';
import type { FormBuilderProps } from './@types';

export function FormBuilder({ form }: FormBuilderProps) {
  const { setElements } = useBoundStore((state) => state.actions);
  const [isElementsReady, setIsElementsReady] = useState(false);

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

  useEffect(() => {
    if (isElementsReady) return;
    const elements = JSON.parse(form.content);
    setElements(elements);
    const elementsReadyTimeout = setTimeout(
      () => setIsElementsReady(true),
      500
    );
    return function cleanup() {
      clearTimeout(elementsReadyTimeout);
    };
  }, [form, setElements, isElementsReady]);

  if (!isElementsReady)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <FaSpinner className="h-12 w-12 animate-spin" />{' '}
      </div>
    );

  if (form.published) return <PublishedForm form={form} />;

  return (
    <DndContext sensors={sensors}>
      <main className="flex w-full flex-col container">
        <nav className="flex items-center justify-between gap-3 border-b-2 border-border p-4">
          <h2 className="truncate font-medium">
            <span className="mr-2 text-muted-foreground">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewFormDialog />
            {!form.published && (
              <>
                <SaveFormButton id={form.id} />
                <PublishFormButton id={form.id} />
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
