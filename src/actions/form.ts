'use server';

import { currentUser } from '@clerk/nextjs';

import prisma from '@/lib/prisma';
import { calculateFormStats } from '@/lib/utils';
import type { CreateNewFormSchema } from '@/lib/validations/createFormSchema';
import { createNewFormSchema } from '@/lib/validations/createFormSchema';

class UserNotFoundError extends Error {}

async function getUser() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }
  return user;
}

export async function getFormStats() {
  const user = await getUser();

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits ?? 0;
  const submissions = stats._sum.submissions ?? 0;

  return calculateFormStats({ visits, submissions });
}

export async function createForm(data: CreateNewFormSchema) {
  const validation = createNewFormSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.message);
  }
  const user = await getUser();

  const { name, description } = data;

  const form = await prisma.form.create({
    data: {
      name,
      description,
      userId: user.id,
    },
  });

  if (!form) {
    throw new Error('Failed to create form.');
  }

  return form.id;
}

export async function getForms() {
  const user = await getUser();

  const forms = await prisma.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return forms;
}

export async function getFormById(id: number) {
  const user = await getUser();

  return prisma.form.findUnique({
    where: {
      userId: user.id,
      id,
    },
  });
}

export async function updateFormContent(id: number, content: string) {
  const user = await getUser();

  const form = await prisma.form.update({
    where: {
      userId: user.id,
      id,
    },
    data: {
      content,
    },
  });

  return form;
}

export async function publishForm(id: number) {
  const user = await getUser();

  const form = await prisma.form.update({
    where: {
      userId: user.id,
      id,
    },
    data: {
      published: true,
    },
  });

  return form;
}

export async function getFormContentByUrl(formUrl: string) {
  const form = await prisma.form.update({
    select: {
      content: true,
    },
    data: {
      visits: {
        increment: 1,
      },
    },
    where: {
      shareUrl: formUrl,
    },
  });
  return form;
}

export async function submitForm(formUrl: string, content: string) {
  const form = await prisma.form.update({
    select: {
      submissions: true,
    },
    data: {
      submissions: {
        increment: 1,
      },
      FormSubmission: {
        create: {
          content,
        },
      },
    },
    where: {
      shareUrl: formUrl,
      published: true,
    },
  });

  return form;
}

export async function getFormSubmissions(formId: number) {
  const user = await getUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const submissions = await prisma.form.findUnique({
    where: {
      id: formId,
      userId: user.id,
    },
    include: {
      FormSubmission: true,
    },
  });

  return submissions;
}
