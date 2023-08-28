import { Box, LinearProgress } from "@mui/material";
import styled from "@emotion/styled";

const StyledLinearProgress = styled(LinearProgress)`
  background-color: #ffffff80;
  & .MuiLinearProgress-bar {
    background-color: #ffffff !important;
  }
`;

const ProgressMovement = ({ movement }) => {
  return (
    <Box sx={{ width: "100%" }} style={{ marginBottom: "50px" }}>
      <StyledLinearProgress
        className="testing"
        variant="determinate"
        value={movement === 9 ? 100 : movement * 10}
      />
    </Box>
  );
};

export default ProgressMovement;
