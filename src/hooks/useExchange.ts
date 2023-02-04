import { useState } from "react";

import { SelectChangeEvent } from "@mui/material";

const useExchange = () => {
  const [exchange, setExchange] = useState<string>("");

  const handleExchange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setExchange(value);
  };
  return { exchange, setExchange, handleExchange };
};

export default useExchange;
