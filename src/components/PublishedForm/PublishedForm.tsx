import Link from 'next/link';
import Confetti from 'react-confetti';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import type { PublishedFormProps } from './@types';

export function PublishedForm({ form }: PublishedFormProps) {
  const shareUrl = `${window.location.origin}/submit/${form.shareUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: 'Copied to clipboard',
      description: 'You can now share the link with others.',
    });
  };

  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={1000}
      />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="max-w-lg">
          <h1 className="mb-10 border-b border-border pb-2 text-center text-4xl font-bold text-primary">
            🎊🎊Form Published🎊🎊
          </h1>
          <h2 className="text-2xl">Share this form</h2>
          <h3 className="border-b border-border  pb-10 text-xl text-muted-foreground">
            Anyone with the link can view and submit the form.
          </h3>
          <div className="my-4 flex w-full flex-col items-center gap-2 border-b border-border pb-4">
            <Input className="w-full" value={shareUrl} readOnly />
            <Button className="mt-2 w-full" onClick={handleCopyLink}>
              Copy link
            </Button>
          </div>
          <div className="flex justify-between">
            <Button variant="link" asChild>
              <Link href="/" className="gap-2">
                <BsArrowLeft className="h-4 w-4" />
                Go back home
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href={`/forms/${form.id}`} className="gap-2">
                Form details
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
