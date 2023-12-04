import { MdPreview } from 'react-icons/md';

import { FormElements } from '@/components/Forms/FormElements';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useBoundStore } from '@/store/useBoundStore';

export default function PreviewFormDialog() {
  const { elements } = useBoundStore((state) => state);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <MdPreview className="h-6 w-6" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-screen max-h-screen w-screen max-w-full grow flex-col gap-0 p-0">
        <div className="border-b px-4 py-2">
          <p className="text-lg font-bold text-muted-foreground">
            Form preview
          </p>
          <p className="text-sm text-muted-foreground">
            This is how your form will look like to your users.
          </p>
        </div>
        <div className="flex grow items-center justify-center overflow-y-auto bg-accent bg-[url(/paper.svg)] p-4 dark:bg-[url(/paper-dark.svg)]">
          <div className="flex h-full w-full max-w-[620px] grow flex-col gap-4 overflow-y-auto rounded-3xl bg-background p-8">
            {elements.map((element) => {
              const ElementComponent = FormElements[element.type].formComponent;
              return (
                <ElementComponent key={element.id} elementInstance={element} />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
