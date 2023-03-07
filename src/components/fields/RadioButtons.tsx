import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FunctionComponent } from "react";
import { InputProps } from "../../interfaces/input-props";
import FieldError from "../atoms/FieldError";

export type RadioButtonsOptions = Array<{ value: string; label: string }>;

interface Props extends InputProps {
  options: RadioButtonsOptions;
}

const RadioButtons: FunctionComponent<Props> = ({
  label,
  name,
  options,
  register,
  className,
  error,
}) => {
  return (
    <FormControl className={className}>
      <FormLabel id='demo-row-radio-buttons-group-label'>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
      >
        <>
          {options.map((option) => {
            return (
              <FormControlLabel
                id={option.value}
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                {...register}
              />
            );
          })}
        </>
      </RadioGroup>
      {error && <FieldError message={error.message} name={name} />}
    </FormControl>
  );
};

export default RadioButtons;
