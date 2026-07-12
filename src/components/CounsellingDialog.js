import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  TextField,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon, Chat as ChatIcon } from "@mui/icons-material";
import { cyan } from "@mui/material/colors";
import CodexoButton from "./CodexoButton";
import CodexoLoading from "./CodexoLoading";
import { useCodexoContext } from "../contexts/codexoContext";
import { validateCounsellingForm } from "../utils/counsellingValidation";
import { inputStyles } from "../styles/formStyles";

const CounsellingDialog = () => {
  const theme = useTheme();

  const {
    openCounsellingDialog,
    setOpenCounsellingDialog,
    setOpenCodexoSuccessDialog,
    setCodexoSuccessDialogContent,
  } = useCodexoContext();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    goals: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleClose = () => {
    setOpenCounsellingDialog(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      goals: "",
    });
    setErrors({});
    setIsLoading(false);
  };

  const handleLoadingComplete = () => {
    setCodexoSuccessDialogContent({
      title: "Session Scheduled!",
      message:
        "Thank you for reaching out. One of our lead technical consultants will review your goals and contact you via phone or WhatsApp within 24 hours to host your customized career roadmap session.",
    });

    setIsLoading(false);
    setOpenCodexoSuccessDialog(true);
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateCounsellingForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <Dialog
      open={openCounsellingDialog}
      onClose={isLoading ? null : handleClose}
      maxWidth="xs"
      fullWidth
      disableScrollLock
      sx={{
        zIndex: 1500,
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(6px)",
        },
        "& .MuiDialog-paper": {
          backgroundColor: `${theme.palette.secondary.main} !important`,
          backgroundImage: "none !important",
          borderRadius: { xs: "16px", sm: "24px" },
          border: `1px solid ${alpha(cyan[400], 0.35)} !important`,
          outline: "none !important",
          p: { xs: 0.5, sm: 1.5 },
          m: { xs: 2, sm: 4 },
          position: "relative",
          maxHeight: "calc(100% - 64px)",
          boxShadow: `0px 15px 40px ${alpha(cyan[400], 0.15)}`,
          overflow: "hidden",
          "&:focus": {
            outline: "none !important",
            border: `1px solid ${alpha(cyan[400], 0.35)} !important`,
          },
        },
      }}
    >
      {!isLoading && (
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: { xs: 12, sm: 16 },
            top: { xs: 12, sm: 16 },
            color: theme.palette.text.secondary,
            transition: "all 0.2s ease",
            zIndex: 10,
            "&:hover": {
              color: cyan[400],
              transform: "scale(1.1)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" } }} />
        </IconButton>
      )}

      <DialogTitle
        component="div"
        sx={{ pt: { xs: 2.5, sm: 3 }, px: { xs: 2, sm: 2.5 }, pb: 1 }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "800",
            letterSpacing: "-0.5px",
            mb: 0.5,
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            background:
              theme.gradients?.primary ||
              `linear-gradient(135deg, ${cyan[400]} 0%, #a855f7 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Get Free Career Counselling
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.4,
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
          }}
        >
          Our tech experts will guide you to the right course and build your
          roadmap
        </Typography>
      </DialogTitle>

      <DialogContent
        sx={{
          px: { xs: 2, sm: 2.5 },
          pb: { xs: 2, sm: 2.5 },
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: alpha(cyan[400], 0.2),
            borderRadius: "10px",
            "&:hover": { background: alpha(cyan[400], 0.4) },
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.8, sm: 2.5 },
            mt: 1,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                mb: 0.8,
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                color: !!errors.fullName
                  ? theme.palette.error.main
                  : theme.palette.text.main,
              }}
            >
              Your Name *
            </Typography>
            <TextField
              fullWidth
              disabled={isLoading}
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              variant="outlined"
              error={!!errors.fullName}
              helperText={errors.fullName}
              sx={inputStyles(theme)}
            />
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                mb: 0.8,
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                color: !!errors.phoneNumber
                  ? theme.palette.error.main
                  : theme.palette.text.main,
              }}
            >
              Phone Number *
            </Typography>
            <TextField
              fullWidth
              disabled={isLoading}
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              sx={inputStyles(theme)}
            />
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                mb: 0.8,
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                color: !!errors.email
                  ? theme.palette.error.main
                  : theme.palette.text.main,
              }}
            >
              Email Address (Optional)
            </Typography>
            <TextField
              fullWidth
              disabled={isLoading}
              name="email"
              placeholder="your@email.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email}
              sx={inputStyles(theme)}
            />
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
                mb: 0.8,
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                color: !!errors.goals
                  ? theme.palette.error.main
                  : theme.palette.text.main,
              }}
            >
              Tell us about your background and goals
            </Typography>
            <TextField
              fullWidth
              disabled={isLoading}
              name="goals"
              placeholder="Share your technical background or what you want to achieve..."
              multiline
              rows={3}
              value={formData.goals}
              onChange={handleChange}
              variant="outlined"
              error={!!errors.goals}
              helperText={errors.goals}
              sx={inputStyles(theme)}
            />
          </Box>

          <Box>
            <CodexoButton
              type="submit"
              disabled={isLoading}
              startIcon={
                !isLoading ? <ChatIcon sx={{ fontSize: "1.1rem" }} /> : null
              }
              sx={{
                width: "100%",
                py: { xs: 1.3, sm: 1.6 },
                borderRadius: "12px",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: "46px", sm: "54px" },
              }}
            >
              {isLoading ? "Processing..." : "Get Free Counselling"}
            </CodexoButton>

            <CodexoLoading
              isLoading={isLoading}
              onComplete={handleLoadingComplete}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CounsellingDialog;
