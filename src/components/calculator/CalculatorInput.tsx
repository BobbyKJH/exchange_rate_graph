import { InputAdornment, OutlinedInput } from "@mui/material";

interface ICalculatorInput {
  value: number | string;
  disabled: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalculatorInput = ({ value, disabled, onChange }: ICalculatorInput) => {
  return (
    <OutlinedInput
      value={value}
      disabled={disabled}
      onChange={onChange}
      type="number"
      endAdornment={
        !disabled && <InputAdornment position="end">₩</InputAdornment>
      }
    />
  );
};

export default CalculatorInput;
