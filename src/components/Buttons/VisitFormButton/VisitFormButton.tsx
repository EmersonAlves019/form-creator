'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import type { VisitFormButtonProps } from './@types';

export function VisitFormButton({ shareUrl }: VisitFormButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;

  return (
    <Button
      className="w-[200px]"
      onClick={() => {
        window.open(shareLink, '_blank');
      }}
    >
      Visit Form
    </Button>
  );
}
