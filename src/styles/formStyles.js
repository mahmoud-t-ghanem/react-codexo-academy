import { alpha } from "@mui/material/styles";
import { cyan, grey } from "@mui/material/colors";

export const inputStyles = (theme) => ({
  position: "relative",
  mb: 1,

  "& .MuiOutlinedInput-root": {
    color: theme.palette.text.main,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: "12px",

    "& input": {
      py: { xs: 1.5, sm: 2 },
      px: 2.2,
      fontSize: { xs: "0.95rem", sm: "1.05rem" },
    },

    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.12)" },
    "&:hover fieldset": { borderColor: alpha(cyan[400], 0.4) },
    "&.Mui-focused fieldset": { borderColor: cyan[400] },
    "&.Mui-error fieldset": {
      borderColor: `${theme.palette.error.main} !important`,
    },

    "& input::placeholder": {
      color: theme.palette.text.secondary,
      opacity: 0.6,
      fontSize: { xs: "0.9rem", sm: "1rem" },
    },

    "& textarea": {
      fontSize: { xs: "0.95rem", sm: "1.05rem" },
      py: 0.5,
      "&::-webkit-scrollbar": { width: "5px" },
      "&::-webkit-scrollbar-track": { background: "transparent" },
      "&::-webkit-scrollbar-thumb": {
        background: alpha(cyan[400], 0.2),
        borderRadius: "10px",
        "&:hover": { background: alpha(cyan[400], 0.4) },
      },
    },

    "& input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.secondary?.main || "#121214"} inset !important`,
      WebkitTextFillColor: `${theme.palette.text.main} !important`,
      caretColor: "#ffffff",
      borderRadius: "inherit",
      transition: "background-color 5000s ease-in-out 0s",
    },
  },

  "& .MuiInputLabel-root": {
    color: grey[500],
    fontSize: { xs: "0.9rem", sm: "1rem" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: grey[300] },
  "& .MuiInputLabel-root.Mui-error": { color: theme.palette.error.main },

  "& .MuiFormHelperText-root": {
    color: `${theme.palette.error.main} !important`,
    fontSize: "0.78rem",
    fontWeight: "500",
    position: "absolute",
    bottom: "-22px",
    left: "4px",
    margin: 0,
    whiteSpace: "nowrap",
  },
});

export const selectInputStyles = (theme, hasError, customMb) => ({
  color: theme.palette.text.main,
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  borderRadius: "12px",
  mb: 1,

  fontSize: { xs: "0.95rem", sm: "1.05rem" },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: hasError
      ? `${theme.palette.error.main} !important`
      : "rgba(255, 255, 255, 0.12)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: hasError ? theme.palette.error.main : alpha(cyan[400], 0.4),
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: hasError ? theme.palette.error.main : cyan[400],
  },
  "& .MuiSelect-select": {
    color: theme.palette.text.main,
    paddingRight: "32px",
    py: { xs: 1.5, sm: 2 },
    px: 2.2,
  },
  "& .MuiSvgIcon-root": { color: theme.palette.text.secondary },
});
