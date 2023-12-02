'use client';

import { useState } from 'react';

import { CreateNewForm } from '@/components/Forms';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import {
  CreateNewFormSchema,
  createNewFormSchema,
} from '@/lib/validations/createFormSchema';
import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accessSync } from 'fs';
import { createForm } from '@/actions/form';
import { useRouter } from 'next/navigation';

export function CreateFormButton() {
  const router = useRouter();
  const form = useForm<CreateNewFormSchema>({
    resolver: zodResolver(createNewFormSchema),
  });

  const onSubmit = async (data: CreateNewFormSchema) => {
    try {
     const formId = await createForm(data);

     router.push(`/builder/${formId}`)

      toast({
        title: 'Success',
        description: 'Your form has been created successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'We could not create your form. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group border border-primary/80 bg-background h-[190px] flex flex-col justify-center hover:cursor-pointer border-dashed gap-4 hover:bg-muted"
        >
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">
            Create new form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <CreateNewForm form={form} onSubmit={onSubmit} />
        </div>

        <DialogFooter>
          <Button className="mr-2" variant="outline">
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
            className="gap-1"
            disabled={form.formState.isSubmitting || !form.formState.isValid}
          >
            <span>Create</span>
            {form.formState.isSubmitting && (
              <ImSpinner2 className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
