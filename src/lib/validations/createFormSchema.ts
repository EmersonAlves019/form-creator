import * as z from 'zod';

export const createNewFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(4, 'Name must be at least 4 characters long.'),
  description: z.string().optional(),
});

export type CreateNewFormSchema = z.infer<typeof createNewFormSchema>;
