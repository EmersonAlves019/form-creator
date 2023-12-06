import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { FaIcons } from 'react-icons/fa';
import { MdOutlinePublish } from 'react-icons/md';

import { publishForm } from '@/actions/form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

import type { PublishFormButtonProps } from './@types';

export function PublishFormButton({ id }: PublishFormButtonProps) {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const handlePublishForm = async () => {
    try {
      await publishForm(id);
      toast({
        title: 'Success',
        description: 'Your form is now available to the public.',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: "Couldn't publish the form. Please try again later.",
        variant: 'destructive',
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-violet-700 to-cyan-400 text-white hover:shadow-lg hover:brightness-90">
          <MdOutlinePublish className="h-6 w-6" />
          Publish
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. After publish you will not be able to
            edit this form.
            <br />
            <span className="font-medium">
              By publishing this form you will make it available to the public
              and you will be able to collect submissions.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              startTransition(handlePublishForm);
            }}
            disabled={loading}
          >
            Proceed
            {loading && <FaIcons className="mr-2 animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
