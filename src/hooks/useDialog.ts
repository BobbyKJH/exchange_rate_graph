import { useDispatch, useSelector } from "react-redux";

import {
  calculatorState,
  closeDialog,
  openDialog,
} from "../store/slice/dialogSlice";

const useDialog = () => {
  const dialogState = useSelector(calculatorState);
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    dispatch(openDialog());
  };

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  return { dialogState, handleOpenDialog, handleCloseDialog };
};

export default useDialog;
