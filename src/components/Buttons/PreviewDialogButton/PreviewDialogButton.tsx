import { Button } from '@/components/ui/button';
import { MdPreview } from 'react-icons/md';
import React from 'react';

export function PreviewDialogButton() {
  return (
    <Button variant="outline" className="gap-2">
      <MdPreview className="h-6 w-6" />
      Preview
    </Button>
  );
}
