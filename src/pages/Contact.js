import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  TextField,
} from "@mui/material";
import { grey, cyan } from "@mui/material/colors";
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
  Send as SendIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

import CodexoButton from "../components/CodexoButton";
import CodexoCard from "../components/CodexoCard";
import CodexoLoading from "../components/CodexoLoading";
import { inputStyles } from "../styles/formStyles";

import { useCodexoContext } from "../contexts/codexoContext";
import { validateContactForm } from "../utils/contactValidation";

const Contact = () => {
  const theme = useTheme();

  const {
    setOpenCodexoSuccessDialog,
    setCodexoSuccessDialogContent,
    isLoading,
    setIsLoading,
  } = useCodexoContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);

    setCodexoSuccessDialogContent({
      title: "Message Sent!",
      message:
        "Thank you for reaching out. Our technical team will review your message and get back to you within 24 hours.",
    });
    setOpenCodexoSuccessDialog(true);

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        minHeight: "100vh",
        pt: 12,
        pb: 10,
        color: theme.palette.text.main,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
              fontWeight: "900",
              mb: 1,
              letterSpacing: "-0.5px",
            }}
          >
            Get in{" "}
            <span
              style={{
                background:
                  theme.gradients?.primary ||
                  `linear-gradient(135deg, ${cyan[400]} 0%, #a855f7 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "1.05rem",
              opacity: 0.8,
            }}
          >
            Have questions? We're here to help you start your development
            journey.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 3,
            mb: 6,
          }}
        >
          <CodexoCard
            sx={{
              p: 3,
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              background: theme.palette.secondary.main,
              border: `1px solid ${grey[800]}`,
            }}
          >
            <LocationIcon sx={{ color: cyan[400], fontSize: "1.8rem" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "1.1rem" }}
            >
              Visit Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: "0.85rem",
              }}
            >
              Codexo Academy
              <br />
              Tech Hub Sector, Suite 402
              <br />
              Mazzeh Boulevard
              <br />
              Main Tech District
            </Typography>
          </CodexoCard>

          <CodexoCard
            sx={{
              p: 3,
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              background: theme.palette.secondary.main,
              border: `1px solid ${grey[800]}`,
            }}
          >
            <PhoneIcon sx={{ color: cyan[400], fontSize: "1.8rem" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "1.1rem" }}
            >
              Call Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: "0.85rem",
              }}
            >
              +963 968 139188
              <br />
              +963 932 055716
              <br />
              Sun - Thu: 10 AM - 7 PM
            </Typography>
          </CodexoCard>

          <CodexoCard
            sx={{
              p: 3,
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              background: theme.palette.secondary.main,
              border: `1px solid ${grey[800]}`,
            }}
          >
            <EmailIcon sx={{ color: cyan[400], fontSize: "1.8rem" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "1.1rem" }}
            >
              Email Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: "0.85rem",
              }}
            >
              info@codexo.academy
              <br />
              admissions@codexo.academy
              <br />
              We reply within 24 hours
            </Typography>
          </CodexoCard>

          <CodexoCard
            sx={{
              p: 3,
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              background: theme.palette.secondary.main,
              border: `1px solid ${grey[800]}`,
            }}
          >
            <TimeIcon sx={{ color: cyan[400], fontSize: "1.8rem" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "1.1rem" }}
            >
              Working Hours
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: "0.85rem",
              }}
            >
              Sunday - Thursday: 10 AM - 7 PM
              <br />
              Saturday: 10 AM - 4 PM
              <br />
              Friday: Closed
            </Typography>
          </CodexoCard>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: 4,
            alignItems: "stretch",
          }}
        >
          <CodexoCard
            sx={{
              p: { xs: 4, sm: 5 },
              borderRadius: "16px",
              background: theme.palette.secondary.main,
              border: `1px solid ${grey[800]}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "800", mb: 3, fontSize: "1.4rem" }}
            >
              Send us a Message
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Box sx={{ mb: 3, position: "relative" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "600",
                    mb: 1,
                    fontSize: "0.85rem",
                    color: errors.name ? theme.palette.error.main : "inherit",
                    transition: "color 0.2s ease",
                  }}
                >
                  Full Name *
                </Typography>
                <TextField
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name}
                  disabled={isLoading}
                  sx={{
                    ...inputStyles(theme),
                    "& .MuiFormHelperText-root": {
                      position: "absolute",
                      bottom: -20,
                      left: 0,
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                  mb: 3,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "600",
                      mb: 1,
                      fontSize: "0.85rem",
                      color: errors.email
                        ? theme.palette.error.main
                        : "inherit",
                      transition: "color 0.2s ease",
                    }}
                  >
                    Email *
                  </Typography>
                  <TextField
                    placeholder="your@email.com"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email}
                    disabled={isLoading}
                    sx={{
                      ...inputStyles(theme),
                      "& .MuiFormHelperText-root": {
                        position: "absolute",
                        bottom: -20,
                        left: 0,
                      },
                    }}
                  />
                </Box>

                <Box sx={{ position: "relative" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "600",
                      mb: 1,
                      fontSize: "0.85rem",
                      color: errors.phone
                        ? theme.palette.error.main
                        : "inherit",
                      transition: "color 0.2s ease",
                    }}
                  >
                    Phone *
                  </Typography>
                  <TextField
                    placeholder="10-digit number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone}
                    disabled={isLoading}
                    sx={{
                      ...inputStyles(theme),
                      "& .MuiFormHelperText-root": {
                        position: "absolute",
                        bottom: -20,
                        left: 0,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "600", mb: 1, fontSize: "0.85rem" }}
                >
                  Subject
                </Typography>
                <TextField
                  placeholder="What's this about?"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                  disabled={isLoading}
                  sx={inputStyles(theme)}
                />
              </Box>

              <Box sx={{ mb: 2, position: "relative" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "600",
                    mb: 1,
                    fontSize: "0.85rem",
                    color: errors.message
                      ? theme.palette.error.main
                      : "inherit",
                    transition: "color 0.2s ease",
                  }}
                >
                  Message *
                </Typography>
                <TextField
                  placeholder="Tell us how we can help..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  error={!!errors.message}
                  helperText={errors.message}
                  disabled={isLoading}
                  sx={{
                    ...inputStyles(theme),
                    "& .MuiFormHelperText-root": {
                      position: "absolute",
                      bottom: -20,
                      left: 0,
                    },
                  }}
                />
              </Box>

              <CodexoLoading
                isLoading={isLoading}
                onComplete={handleLoadingComplete}
              />

              <Box sx={{ mt: 4 }}>
                <CodexoButton
                  type="submit"
                  disabled={isLoading}
                  endIcon={
                    !isLoading && <SendIcon style={{ fontSize: "1.1rem" }} />
                  }
                  sx={{
                    width: "100%",
                    py: 1.5,
                    borderRadius: "8px",
                    fontWeight: "700",
                  }}
                >
                  {isLoading ? "Submitting..." : "Send Message"}
                </CodexoButton>
              </Box>
            </Box>
          </CodexoCard>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <CodexoCard
              sx={{
                p: 4,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                background: theme.palette.secondary.main,
                border: `1px solid ${grey[800]}`,
                textAlign: "center",
                minHeight: "220px",
              }}
            >
              <LocationIcon
                sx={{
                  color: alpha(cyan[400], 0.7),
                  fontSize: "2.8rem",
                  mb: 1.5,
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "800", fontSize: "1.2rem", mb: 0.5 }}
              >
                Codexo Academy Labs
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  opacity: 0.7,
                  fontSize: "0.85rem",
                }}
              >
                Mazzeh Boulevard
              </Typography>
            </CodexoCard>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: "10px",
                backgroundColor: "#1ebd59",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { opacity: 0.9, transform: "translateY(-2px)" },
              }}
              onClick={() =>
                window.open("https://wa.me/963968139188", "_blank")
              }
            >
              <WhatsAppIcon sx={{ color: "#fff", fontSize: "1.8rem", ml: 1 }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#fff", fontWeight: "700", lineHeight: 1.2 }}
                >
                  Chat on WhatsApp
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: alpha("#fff", 0.8), fontSize: "0.75rem" }}
                >
                  Get instant response from support
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: "10px",
                backgroundColor: "#0066ff",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { opacity: 0.9, transform: "translateY(-2px)" },
              }}
              onClick={() => window.open("tel:+963968139188")}
            >
              <PhoneIcon sx={{ color: "#fff", fontSize: "1.8rem", ml: 1 }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#fff", fontWeight: "700", lineHeight: 1.2 }}
                >
                  Call Now
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: alpha("#fff", 0.8), fontSize: "0.75rem" }}
                >
                  +963 968 139 188
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: "10px",
                background:
                  theme.gradients?.primary ||
                  `linear-gradient(135deg, ${cyan[400]} 0%, #a855f7 100%)`,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { opacity: 0.9, transform: "translateY(-2px)" },
              }}
              onClick={() => window.open("mailto:info@codexo.academy")}
            >
              <EmailIcon sx={{ color: "#fff", fontSize: "1.8rem", ml: 1 }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#fff", fontWeight: "700", lineHeight: 1.2 }}
                >
                  Email Us
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: alpha("#fff", 0.8), fontSize: "0.75rem" }}
                >
                  info@codexo.academy
                </Typography>
              </Box>
            </Box>

            <CodexoCard
              sx={{
                p: 3,
                borderRadius: "12px",
                background: theme.palette.secondary.main,
                border: `1px solid ${grey[800]}`,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", mb: 0.5, fontSize: "0.95rem" }}
              >
                Plan Your Visit
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.82rem",
                  lineHeight: 1.5,
                  mb: 1.5,
                  opacity: 0.8,
                }}
              >
                Visit our center for a free counselling session and campus tour.
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: cyan[400],
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: "600",
                }}
              >
                <TimeIcon sx={{ fontSize: "1rem" }} /> Book your appointment in
                advance
              </Typography>
            </CodexoCard>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
