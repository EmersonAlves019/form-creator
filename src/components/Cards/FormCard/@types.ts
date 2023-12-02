import { getForms } from "@/actions/form"
import { Form } from "@prisma/client"

export type FormCardProps = {
  form: Form
}