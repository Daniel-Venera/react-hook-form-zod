import { TextField as TextFieldMui } from "@mui/material";
import { FunctionComponent } from "react";
import { InputProps } from "../../interfaces/input-props";
import FieldError from "../atoms/FieldError";

interface Props extends InputProps {
  type?: "email" | "password";
}

const TextField: FunctionComponent<Props> = ({
  register,
  name,
  label,
  className,
  type,
  error,
}) => {
  return (
    <div className={className}>
      <TextFieldMui
        autoComplete='on'
        type={type}
        id={name}
        data-test={name}
        label={label}
        {...register}
        fullWidth
      />
      {error && <FieldError message={error.message} name={name} />}
    </div>
  );
};

export default TextField;
