import { HiSaveAs } from 'react-icons/hi';

import { Button } from '@/components/ui/button';

export function SaveFormButton() {
  return (
    <Button variant="outline" className="gap-2">
      <HiSaveAs className="h-6 w-6" />
      Save
    </Button>
  );
}
