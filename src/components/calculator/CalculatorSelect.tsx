import { useQuery } from "react-query";
import { ExchangeRate } from "../../common/api";

import { useSelector } from "react-redux";
import { Currency } from "../../store/slice/currencySlice";

import useExchange from "../../hooks/useExchange";

import CalculatorInput from "./CalculatorInput";

import { MenuItem, FormControl, Select, DialogTitle } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CalculatoeSelect = () => {
  const { data, isLoading } = useQuery("exchange", () =>
    ExchangeRate(currencyKind)
  );

  const { currencyKind } = useSelector(Currency);

  const { exchange, handleExchange } = useExchange(currencyKind);
  const { exchange: exchangeValue, handleExchange: handleChangeExchange } =
    useExchange("");

  return (
    <div style={{ height: 1000, width: 500, padding: 20 }}>
      {!isLoading && (
        <>
          <DialogTitle>계산기</DialogTitle>

          <FormControl fullWidth>
            <Select
              value={exchange}
              onChange={handleExchange}
              MenuProps={MenuProps}
            >
              {Object.keys(data.conversion_rates).map((key) => (
                <MenuItem value={key as string} key={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CalculatorInput
              value={data.conversion_rates[exchange]}
              disabled={true}
            />

            <span>X</span>

            <CalculatorInput
              value={exchangeValue}
              disabled={false}
              onChange={handleChangeExchange}
            />
          </div>

          <p>{data.conversion_rates[exchange] * Number(exchangeValue)}</p>
        </>
      )}
    </div>
  );
};
export default CalculatoeSelect;
