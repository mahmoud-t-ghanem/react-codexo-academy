import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  TextField,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  alpha,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { cyan } from "@mui/material/colors";
import CodexoButton from "./CodexoButton";
import CodexoLoading from "./CodexoLoading";
import { useCodexoContext } from "../contexts/codexoContext";
import { validateRegistrationForm } from "../utils/registrationValidation";
import { inputStyles, selectInputStyles } from "../styles/formStyles";

const coursesList = [
  "HTML5",
  "CSS3 & Responsive",
  "JavaScript ES6+",
  "React.js",
  "Next.js & Tailwind",
  "Node.js & MongoDB",
];

const RegistrationDialog = () => {
  const theme = useTheme();

  const {
    openRegistrationDialog,
    setOpenRegistrationDialog,
    selectedCourse,
    setOpenCodexoSuccessDialog,
    setCodexoSuccessDialogContent,
    isLoading,
    setIsLoading,
  } = useCodexoContext();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedCourse && selectedCourse.trim() !== "") {
      const matchedCourse = coursesList.find(
        (courseName) =>
          selectedCourse.toLowerCase().includes(courseName.toLowerCase()) ||
          courseName.toLowerCase().includes(selectedCourse.toLowerCase()),
      );

      if (matchedCourse) {
        setFormData((prev) => ({ ...prev, course: matchedCourse }));
        setErrors((prev) => ({ ...prev, course: "" }));
      }
    }
  }, [selectedCourse, openRegistrationDialog]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleClose = () => {
    setOpenRegistrationDialog(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      course: "",
    });
    setErrors({});
    setIsLoading(false);
  };

  const handleLoadingComplete = () => {
    setCodexoSuccessDialogContent({
      title: "Application Received!",
      message:
        "Thank you for choosing Codexo. Our academic advisors are reviewing your details and will reach out to you within the next 24 hours to guide you through your learning roadmap.",
    });
    setIsLoading(false);
    setOpenCodexoSuccessDialog(true);
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRegistrationForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <Dialog
      open={openRegistrationDialog}
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
            "& :hover": {
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
          Start Your Creative Journey
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.4,
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
          }}
        >
          Fill in your details and we'll get back to you within 24 hours
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
              Full Name *
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
              placeholder="Enter 10-digit number"
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
              Email (Optional)
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
                color: !!errors.course
                  ? theme.palette.error.main
                  : theme.palette.text.main,
              }}
            >
              Interested Course *
            </Typography>
            <FormControl
              fullWidth
              variant="outlined"
              error={!!errors.course}
              disabled={isLoading}
            >
              <Select
                name="course"
                displayEmpty
                value={formData.course}
                onChange={handleChange}
                sx={selectInputStyles(theme, !!errors.course)}
                MenuProps={{
                  sx: {
                    zIndex: "9999 !important",
                    "& .MuiPopover-paper": {
                      backgroundColor: `${theme.palette.secondary.main} !important`,
                      backgroundImage: "none !important",
                      border: `1px solid ${!!errors.course ? theme.palette.error.main : alpha(cyan[400], 0.35)} !important`,
                      borderRadius: "16px !important",
                      boxShadow: `0px 12px 32px ${alpha(theme.palette.common.black, 0.5)}`,
                      maxHeight: "220px",
                      overflow: "hidden",
                    },
                    "& .MuiMenu-list": {
                      backgroundColor: `${theme.palette.secondary.main} !important`,
                      padding: "6px 12px 6px 6px",
                      maxHeight: "208px",
                      overflowY: "auto",
                      "&::-webkit-scrollbar": { width: "5px" },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: alpha(
                          theme.palette.text.secondary,
                          0.25,
                        ),
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: alpha(cyan[400], 0.5) },
                      },
                    },
                  },
                }}
              >
                <MenuItem
                  value=""
                  disabled
                  sx={{
                    color: alpha(theme.palette.text.main, 0.4),
                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  }}
                >
                  Select a course
                </MenuItem>
                {coursesList.map((courseName, i) => (
                  <MenuItem
                    key={i}
                    value={courseName}
                    sx={{
                      color: `${theme.palette.text.main} !important`,
                      py: { xs: 1.1, sm: 1.3 },
                      px: 2,
                      borderRadius: "8px",
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      transition: "all 0.15s ease",
                      mb: 0.5,
                      "&:last-child": { mb: 0 },
                      "&:hover": {
                        backgroundColor: alpha(cyan[400], 0.08),
                        color: `${cyan[400]} !important`,
                      },
                      "&.Mui-selected": {
                        backgroundColor: alpha(cyan[400], 0.12),
                        color: `${cyan[400]} !important`,
                        fontWeight: "600",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: alpha(cyan[400], 0.2),
                      },
                    }}
                  >
                    {courseName}
                  </MenuItem>
                ))}
              </Select>
              {!!errors.course && (
                <FormHelperText
                  sx={{
                    color: `${theme.palette.error.main} !important`,
                    mx: 1.5,
                    mt: 0.5,
                    fontSize: "0.78rem",
                    fontWeight: "500",
                  }}
                >
                  {errors.course}
                </FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box>
            <CodexoButton
              type="submit"
              disabled={isLoading}
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
              {isLoading ? "Processing..." : "Submit Application"}
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

export default RegistrationDialog;
