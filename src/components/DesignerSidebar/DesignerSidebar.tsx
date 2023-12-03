import { useBoundStore } from '@/store/useBoundStore';

import { FormPropertiesForm } from '../Forms';
import { FormElementsSidebar } from '../Lists';

export function DesignerSidebar() {
  const { selectedElement } = useBoundStore((state) => state);

  return (
    <aside className="mx-w-[400px] flex h-full w-[400px] grow flex-col gap-2 overflow-y-auto border-l-2 border-muted bg-background p-4">
      {selectedElement ? <FormPropertiesForm /> : <FormElementsSidebar />}
    </aside>
  );
}
