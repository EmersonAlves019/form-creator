import { Button } from '@/components/ui/button';
import { MdOutlinePublish } from 'react-icons/md';

export function PublishFormButton() {
  return (
    <Button className="gap-2 bg-gradient-to-r from-primary to-cyan-400">
      <MdOutlinePublish className="h-6 w-6" />
      Publish
    </Button>
  );
}
