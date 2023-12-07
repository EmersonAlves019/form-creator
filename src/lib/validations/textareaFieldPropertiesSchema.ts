import * as z from 'zod';

export const textareaFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  placeHolder: z.string().max(50),
  required: z.boolean().default(false),
  rows: z.number().min(1).max(10).default(3),
});

export type TextareaFieldPropertiesSchema = z.infer<
  typeof textareaFieldPropertiesSchema
>;
