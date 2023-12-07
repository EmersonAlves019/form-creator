import * as z from 'zod';

export const dateFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  placeHolder: z.string().max(50),
  required: z.boolean().default(false),
});

export type DateFieldPropertiesSchema = z.infer<
  typeof dateFieldPropertiesSchema
>;
