import * as z from 'zod';

export const spacerFieldPropertiesSchema = z.object({
  height: z.number().min(5).max(200),
});

export type SpacerFieldPropertiesSchema = z.infer<
  typeof spacerFieldPropertiesSchema
>;
