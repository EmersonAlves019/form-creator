import { MdOutlinePublish } from 'react-icons/md';

import { Button } from '@/components/ui/button';

export function PublishFormButton() {
  return (
    <Button className="gap-2 bg-gradient-to-r from-violet-700 to-cyan-400 text-foreground hover:shadow-lg hover:brightness-90">
      <MdOutlinePublish className="h-6 w-6" />
      Publish
    </Button>
  );
}
