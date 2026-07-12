import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material";
import { grey, cyan } from "@mui/material/colors";

const CodexoButton = ({ onClick, startIcon, sx, children, ...props }) => {
  const theme = useTheme();
  return (
    <Button
      {...props}
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        background: theme.gradients.primary,
        color: grey[900],
        borderRadius: "20px",
        fontWeight: "bold",
        fontSize: "1rem",
        px: 4,
        py: 1,
        textTransform: "none",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
        boxShadow: `0px 4px 10px ${alpha(cyan[400], 0.3)}`,
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: `0px 12px 25px ${alpha(cyan[400], 0.5)}`,
          filter: "brightness(1.1)",
        },
        ...sx,
      }}
      size="large"
    >
      {children}
    </Button>
  );
};
export default CodexoButton;
