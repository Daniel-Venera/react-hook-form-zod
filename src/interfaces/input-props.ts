import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  name: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  className?: string;
};
