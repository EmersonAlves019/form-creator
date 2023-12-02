'use client';

import { DndContext } from '@dnd-kit/core';
import { PreviewDialogButton } from '../Buttons/PreviewDialogButton';
import { PublishFormButton } from '../Buttons/PublishFormButton';
import { SaveFormButton } from '../Buttons/SaveFormButton';
import { Designer } from '../Designer';
import { FormBuilderProps } from './@types';

export function FormBuilder({ form }: FormBuilderProps) {
  return (
    <DndContext>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 border-border p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogButton />
            {!form.published && (
              <>
                <SaveFormButton></SaveFormButton>
                <PublishFormButton></PublishFormButton>
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
    </DndContext>
  );
}
