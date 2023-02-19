import useDialog from "../../hooks/useDialog";

import CalculatorSelect from "./CalculatorSelect";

import Dialog from "@mui/material/Dialog";

const CalculatorDialog = () => {
  const { dialogState, handleCloseDialog } = useDialog();

  return (
    <Dialog open={dialogState} onClose={handleCloseDialog}>
      <CalculatorSelect />
    </Dialog>
  );
};

export default CalculatorDialog;
