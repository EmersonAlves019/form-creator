import { SidebarButtonElement } from '@/components/Buttons/SidebarButtonElement';
import { FormElements } from '@/components/Forms/FormElements';
import { Separator } from '@/components/ui/separator';

export function FormElementsSidebar() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2">
        <p className="col-span-1 my-2 place-self-start text-sm text-muted-foreground/70 md:col-span-2 ">
          Layout elements
        </p>
        <SidebarButtonElement formElement={FormElements.TitleField} />
        <SidebarButtonElement formElement={FormElements.SubtitleField} />
        <SidebarButtonElement formElement={FormElements.ParagraphField} />
        <p className="col-span-1 my-2 place-self-start text-sm text-muted-foreground/70 md:col-span-2 ">
          Form elements
        </p>
        <SidebarButtonElement formElement={FormElements.TextField} />
      </div>
    </div>
  );
}
