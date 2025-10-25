import { Alert } from "@mui/material";
import { Check } from "@mui/icons-material";

export type AlertType = "success" | "error" | "info";

function AlertMessage(message: string, type: AlertType = "info") {
  return (
    <Alert icon={<Check fontSize="inherit" />} severity={type}>
      {message}
    </Alert>
  );
}

export default AlertMessage;
