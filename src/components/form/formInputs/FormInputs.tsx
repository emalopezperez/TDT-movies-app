import { useState, ChangeEvent } from "react";
import "./formInputs.scss";

interface FormInputsProps {
  label: string;
  errorMessage: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: number;
  name: string;
  type: string;
  placeholder: string;
  pattern?: string;
  required?: boolean;
  value: string;
}

const FormInputs: React.FC<FormInputsProps> = ({
  label,
  errorMessage,
  onChange,
  id,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    console.log(focused);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
