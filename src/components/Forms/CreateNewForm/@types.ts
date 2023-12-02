import { CreateNewFormSchema } from "@/lib/validations/createFormSchema";
import { UseFormReturn } from "react-hook-form";

export type CreateNewFormProps = {
  form: UseFormReturn<{
    name: string;
    description?: string | undefined;
}, any, undefined>;
  onSubmit: (data: CreateNewFormSchema) => Promise<void>;
}