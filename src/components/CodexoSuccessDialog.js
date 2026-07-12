import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { cyan } from "@mui/material/colors";
import CodexoButton from "./CodexoButton";
import { useCodexoContext } from "../contexts/codexoContext";

const CodexoSuccessDialog = ({ title = "Success!", message }) => {
  const {
    openCodexoSuccessDialog,
    setOpenCodexoSuccessDialog,
    codexoSuccessDialogContent,
  } = useCodexoContext();
  const theme = useTheme();

  const onClose = () => {
    setOpenCodexoSuccessDialog(false);
  };

  return (
    <Dialog
      open={openCodexoSuccessDialog}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      disableScrollLock
      sx={{
        zIndex: 1600,
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(8px)",
        },
        "& .MuiDialog-paper": {
          backgroundColor: `${theme.palette.secondary.main} !important`,
          backgroundImage: "none !important",
          borderRadius: { xs: "20px", sm: "28px" },
          border: `1px solid ${alpha(cyan[400], 0.3)} !important`,
          outline: "none !important",
          p: { xs: 2, sm: 3 },
          m: { xs: 2, sm: 4 },
          position: "relative",
          boxShadow: `0px 20px 50px ${alpha(cyan[400], 0.12)}`,
          overflow: "hidden",
          "&:focus": {
            outline: "none !important",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "200px",
          background: theme.gradients?.primary,
          filter: "blur(80px)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: { xs: 12, sm: 16 },
          top: { xs: 12, sm: 16 },
          color: theme.palette.text.secondary,
          transition: "all 0.2s ease",
          "&:hover": {
            color: cyan[400],
            transform: "scale(1.1)",
          },
        }}
      >
        <CloseIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem" } }} />
      </IconButton>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          pt: { xs: 4, sm: 5 },
          pb: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            "&::before": {
              content: '""',
              position: "absolute",
              width: { xs: "70px", sm: "85px" },
              height: { xs: "70px", sm: "85px" },
              borderRadius: "50%",
              background: theme.gradients?.primary,
              opacity: 0.2,
              filter: "blur(8px)",
              animation: "pulse 2s infinite ease-in-out",
            },
            "@keyframes pulse": {
              "0%, 100%": { transform: "scale(1)", opacity: 0.2 },
              "50%": { transform: "scale(1.15)", opacity: 0.35 },
            },
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: { xs: "4.5rem", sm: "5.5rem" },
              color: cyan[400],
              filter: `drop-shadow(0px 4px 10px ${alpha(cyan[400], 0.5)})`,
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "850",
            letterSpacing: "-0.5px",
            mb: 1.5,
            fontSize: { xs: "1.5rem", sm: "1.85rem" },
            background: theme.gradients?.primary,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {codexoSuccessDialogContent.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            maxWidth: "320px",
            mb: 4,
          }}
        >
          {codexoSuccessDialogContent.message}
        </Typography>

        <CodexoButton
          onClick={onClose}
          sx={{
            minWidth: "140px",
            py: { xs: 1, sm: 1.2 },
            borderRadius: "10px",
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
          }}
        >
          Close
        </CodexoButton>
      </DialogContent>
    </Dialog>
  );
};

export default CodexoSuccessDialog;
