import { useTransition } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { HiSaveAs } from 'react-icons/hi';

import { updateFormContent } from '@/actions/form';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useBoundStore } from '@/store/useBoundStore';

import type { SaveFormButtonProps } from './@types';

export function SaveFormButton({ id }: SaveFormButtonProps) {
  const { elements } = useBoundStore();
  const [loading, startTransition] = useTransition();

  const saveFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await updateFormContent(id, jsonElements);
      toast({
        title: 'Success',
        description: 'Your form has been saved successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'We could not save your form. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button
      variant="outline"
      className="gap-2"
      disabled={loading}
      onClick={() => startTransition(saveFormContent)}
    >
      <HiSaveAs className="h-6 w-6" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}
