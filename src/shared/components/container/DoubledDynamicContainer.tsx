import type { JSX } from "@emotion/react/jsx-runtime";
import { Box, Grid } from "@mui/material";

export interface DoubledDynamicContainerProps {
  rightContainer: JSX.Element;
  leftContainer: JSX.Element;
  displayRightContainer: boolean;
}

function DoubledDynamicContainer({
  leftContainer,
  rightContainer,
  displayRightContainer,
}: Readonly<DoubledDynamicContainerProps>) {
  return (
    <Grid container direction={"row"} size={"grow"}>
      <Box sx={{ width: !displayRightContainer ? "100%" : "50%" }}>
        {leftContainer}
      </Box>
      {displayRightContainer && (
        <Box
          sx={{ width: "42%", borderLeft: "2px solid #000", padding: "2rem" }}
        >
          {rightContainer}
        </Box>
      )}
    </Grid>
  );
}

export default DoubledDynamicContainer;
