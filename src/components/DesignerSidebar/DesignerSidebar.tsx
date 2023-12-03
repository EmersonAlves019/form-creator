import { useBoundStore } from '@/store/useBoundStore';
import { FormElementsSidebar } from '../Lists';
import { FormPropertiesForm } from '../Forms';

export function DesignerSidebar() {
  const { selectedElement } = useBoundStore((state) => state);

  return (
    <aside className="w-[400px] mx-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {selectedElement ? <FormPropertiesForm /> : <FormElementsSidebar />}
    </aside>
  );
}
