import * as z from 'zod';

export const titleFieldPropertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

export type TitleFieldPropertiesSchema = z.infer<
  typeof titleFieldPropertiesSchema
>;
