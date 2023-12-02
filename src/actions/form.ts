"use server"

import { currentUser } from "@clerk/nextjs"
import prisma from "@/lib/prisma"
import { CreateNewFormSchema, createNewFormSchema } from "@/lib/validations/createFormSchema"

class UserNotFoundError extends Error { }

async function getUser () {
  const user = await currentUser()
  if (!user) {
      throw new UserNotFoundError()
  }
  return user
}

export async function getFormStats() {
  const user = await getUser()

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  })

const visits = stats._sum.visits ?? 0
  const submissions = stats._sum.submissions ?? 0
  
  let submissionsRate = 0.
  if( visits > 0 ) {
    submissionsRate = (submissions / visits) * 100
  }

  const bounceRate = 100 - submissionsRate

  return {
    visits,
    submissions,
    submissionsRate,
    bounceRate,
  }
}

export async function createForm(data: CreateNewFormSchema) {

  const validation = createNewFormSchema.safeParse(data)

  if (!validation.success) {
    throw new Error(validation.error.message)
  }
  const user = await getUser()

  const { name, description } = data

  const form = await prisma.form.create({
    data: {
      name,
      description,
      userId: user.id,
    }
  })

  if (!form) {
    throw new Error("Failed to create form.")
  }

  return form.id
}

export async function getForms() {
  const user = await getUser()

  const forms = await prisma.form.findMany({
    where: {
      userId: user.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return forms
}

export async function getFormById(id: number) {
 const user=  await getUser()

  return await prisma.form.findUnique({
    where: {
      userId: user.id,
      id
    }
  })
}