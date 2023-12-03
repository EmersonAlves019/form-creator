import { FormElementInstance } from "../@types";
import { TextFieldCustomProperties} from "./";


export type TextFieldInstance = FormElementInstance & {
  properties: typeof TextFieldCustomProperties;
} ;