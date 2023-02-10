import { useState } from "react";

import { SelectChangeEvent } from "@mui/material";

const useExchange = (initialState: string) => {
  const [exchange, setExchange] = useState<string>(initialState);

  const handleExchange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setExchange(value);
  };

  const handleInputExchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setExchange(value);
  };

  return { exchange, handleExchange, handleInputExchange };
};

export default useExchange;
