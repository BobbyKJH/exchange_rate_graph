import { useDispatch, useSelector } from "react-redux";

import { Currency } from "../store/slice/currencySlice";
import { Graph, handleGraphSelect } from "../store/slice/graphSlice";

const useGraph = () => {
  const { currencyKind } = useSelector(Currency);
  const { graphSelect } = useSelector(Graph);

  const dispatch = useDispatch();

  const handleExchangeRate = (value: string) => () => {
    const currentIndex = graphSelect.indexOf(value);
    const newChecked = [...graphSelect];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    dispatch(handleGraphSelect(newChecked));
  };

  return { currencyKind, graphSelect, handleExchangeRate };
};

export default useGraph;
