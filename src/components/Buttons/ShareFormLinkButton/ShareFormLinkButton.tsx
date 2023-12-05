'use client';

import { useEffect, useState } from 'react';
import { ImShare } from 'react-icons/im';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

import type { ShareFormLinkButtonProps } from './@types';

export function ShareFormLinkButton({ shareUrl }: ShareFormLinkButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;

  return (
    <div className="flex w-full items-center gap-4">
      <Input value={shareLink} readOnly />
      <Button
        className="min-w-[200px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
            title: 'Copied to clipboard',
            description: 'You can now share the link with others.',
          });
        }}
      >
        <ImShare className="mr-2 h-4 w-4" />
        Share link
      </Button>
    </div>
  );
}
