import * as z from 'zod';

export const paragraphFieldPropertiesSchema = z.object({
  text: z.string().min(2).max(50),
});

export type ParagraphFieldPropertiesSchema = z.infer<
  typeof paragraphFieldPropertiesSchema
>;
