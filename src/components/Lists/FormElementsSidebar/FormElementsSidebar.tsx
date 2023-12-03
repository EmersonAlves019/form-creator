import { SidebarButtonElement } from '@/components/Buttons/SidebarButtonElement';
import { FormElements } from '@/components/Forms/FormElements';

export function FormElementsSidebar() {
  return (
    <div>
      Elements
      <SidebarButtonElement formElement={FormElements.TextField} />
    </div>
  );
}
