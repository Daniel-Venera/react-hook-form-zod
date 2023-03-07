import { FunctionComponent } from "react";

type Props = {
  name: string;
  message?: string;
};

const FieldError: FunctionComponent<Props> = ({ name, message }) => {
  return (
    <p className='text-xs italic text-red-500 mt-1' data-test={`${name}-error`}>
      {message}
    </p>
  );
};

export default FieldError;
