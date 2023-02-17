import { useDispatch, useSelector } from "react-redux";

import { Currency, handleExchangeCurrency } from "../store/slice/currencySlice";
import { Graph, handleGraphSelect } from "../store/slice/graphSlice";

import { SelectChangeEvent } from "@mui/material/Select";

const useGraph = () => {
  const { currencyKind } = useSelector(Currency);
  const { graphSelect } = useSelector(Graph);

  const dispatch = useDispatch();

  const handleToggleExchange = (value: string) => () => {
    const currentIndex = graphSelect.indexOf(value);
    const newChecked = [...graphSelect];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    dispatch(handleGraphSelect(newChecked));
  };

  const handleCurrencyChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    dispatch(handleExchangeCurrency(value));
  };

  return {
    currencyKind,
    graphSelect,

    handleToggleExchange,
    handleCurrencyChange,
  };
};

export default useGraph;
