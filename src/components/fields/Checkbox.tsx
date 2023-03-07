import { Checkbox as CheckboxMui, FormControlLabel } from "@mui/material";
import { FunctionComponent } from "react";
import { InputProps } from "../../interfaces/input-props";
import FieldError from "../atoms/FieldError";

const Checkbox: FunctionComponent<InputProps> = ({
  label,
  name,
  register,
  className,
  error,
}) => {
  return (
    <div className={className}>
      <FormControlLabel
        control={<CheckboxMui id={name} />}
        label={label}
        {...register}
      />
      {error && <FieldError message={error.message} name={name} />}
    </div>
  );
};

export default Checkbox;
