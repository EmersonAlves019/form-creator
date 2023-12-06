'use client';

import { useRef, useState, useTransition } from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { ImSpinner2 } from 'react-icons/im';

import { submitForm } from '@/actions/form';

import { FormElements } from '../Forms/FormElements';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';
import type { SubmitFormProps } from './@types';

export function SubmitForm({ formContent, formUrl }: SubmitFormProps) {
  const formValues = useRef<{ [key: string]: string }>({});
  const formErrors = useRef<{ [key: string]: boolean }>({});
  const [renderKey, setRenderKey] = useState(Math.random());
  const [submitted, setSubmitted] = useState(false);
  const [loading, startTransition] = useTransition();

  const submitValue = (key: string, value: string) => {
    formValues.current[key] = value;
  };

  const validateForm = () => {
    formContent.forEach((formItem) => {
      const value = formValues.current[formItem.id] || '';
      const valid = FormElements[formItem.type].validate(formItem, value);
      if (!valid) {
        formErrors.current[formItem.id] = true;
      }
    });

    if (Object.keys(formErrors.current).length > 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    formErrors.current = {};
    const valid = validateForm();
    if (!valid) {
      setRenderKey(Math.random());
      toast({
        title: 'Error',
        description: 'Please fill all the required fields.',
        variant: 'destructive',
      });
    }

    try {
      const jsonValues = JSON.stringify(formValues.current);
      await submitForm(formUrl, jsonValues);
      setSubmitted(true);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'We could not submit your form. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  if (submitted) {
    return (
      <div className="flex h-full w-full items-center  justify-center  p-8">
        <div className="relative z-10 w-full max-w-[620px] ">
          <div
            key={renderKey}
            className="relative z-10 flex w-full max-w-[620px] flex-col gap-4 rounded-xl border border-muted-foreground/40 bg-background p-8"
          >
            <h1 className="text-2xl font-bold">Form submitted</h1>
            <p className="">
              Thank you for submitting this form. you can close this page now.
            </p>
          </div>
          <div className="absolute inset-0  scale-95 bg-gradient-to-tl from-cyan-600 to-violet-600 opacity-60 blur-2xl dark:scale-100 dark:opacity-75" />
        </div>
      </div>
    );
  }

  return (
    <div className="container flex h-full w-full items-center justify-center p-8">
      <div className="relative z-10 w-full max-w-[620px] ">
        <div
          key={renderKey}
          className="relative z-10 flex w-full max-w-[620px] flex-col gap-4 rounded-xl border border-muted-foreground/40 bg-background p-8"
        >
          {formContent.map((formItem) => {
            const FormElement = FormElements[formItem.type].formComponent;
            return (
              <FormElement
                key={formItem.id}
                elementInstance={formItem}
                submitValue={submitValue}
                isInvalid={formErrors.current[formItem.id]}
                defaultValue={formValues.current[formItem.id]}
              />
            );
          })}
          <Button
            className="mt-8"
            onClick={() => startTransition(handleSubmit)}
            disabled={loading}
          >
            {!loading && (
              <>
                <HiCursorClick className="mr-2" />
                Submit
              </>
            )}
            {loading && <ImSpinner2 className="animate-spin" />}
          </Button>
        </div>
        <div className="absolute inset-0  scale-95 bg-gradient-to-tl from-cyan-600 to-violet-600 opacity-60 blur-2xl dark:scale-100 dark:opacity-75" />
      </div>
    </div>
  );
}
