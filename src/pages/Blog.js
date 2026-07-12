import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  useTheme,
  Grid,
  TextField,
  alpha,
} from "@mui/material";
import { cyan } from "@mui/material/colors";

import {
  CalendarMonth as CalendarMonthIcon,
  Person as PersonIcon,
  AccessTime as AccessTimeIcon,
  Send as SendIcon,
} from "@mui/icons-material";

import CodexoButton from "../components/CodexoButton";
import CodexoCard from "../components/CodexoCard";
import blogsData from "../data/blogsData";
import { useCodexoContext } from "../contexts/codexoContext";
import { inputStyles } from "../styles/formStyles";

const categories = [
  "All Posts",
  "Full-Stack",
  "Frontend",
  "Responsive",
  "Career",
];

const Blog = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredBlogs =
    selectedCategory === "All Posts"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const { setCodexoSuccessDialogContent, setOpenCodexoSuccessDialog } =
    useCodexoContext();

  const handleSubscribe = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email || !isValidEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);

      setCodexoSuccessDialogContent({
        title: "Welcome To Codexo Insights!",
        message: `Thank you for subscribing. We've sent your exclusive full-stack engineering guide to ${email}. Stay tuned for our weekly cutting-edge updates!`,
      });

      setOpenCodexoSuccessDialog(true);

      setEmail("");
    }
  };

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.3rem", sm: "3.5rem" },
              fontWeight: "900",
              color: theme.palette.text.main,
              mb: 2,
              letterSpacing: "-1px",
            }}
          >
            Blog &{" "}
            <span
              style={{
                background: theme.gradients.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Resources
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "1rem", sm: "1.15rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Deep tech articles, clean code standards, and full-stack
            architectures.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mb: { xs: 6, md: 8 },
          }}
        >
          {categories.map((category, index) => {
            const isSelected = selectedCategory === category;
            return (
              <Chip
                key={`cat-btn-${index}`}
                label={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  px: 2.2,
                  py: 2,
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  borderRadius: "8px",
                  backgroundColor: isSelected
                    ? alpha(cyan[400], 0.15)
                    : alpha(theme.palette.primary.main, 0.03),
                  color: isSelected ? cyan[400] : theme.palette.text.secondary,
                  border: `1px solid ${
                    isSelected
                      ? cyan[400]
                      : alpha(theme.palette.text.secondary, 0.2)
                  }`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: isSelected
                      ? alpha(cyan[400], 0.25)
                      : alpha(theme.palette.text.primary, 0.08),
                    borderColor: isSelected
                      ? cyan[400]
                      : alpha(theme.palette.text.secondary, 0.5),
                  },
                }}
              />
            );
          })}
        </Box>

        <Grid container spacing={4}>
          {filteredBlogs.map((blog, index) => {
            return (
              <Grid
                xs={12}
                sm={6}
                key={`blog-card-item-${blog.id || index}`}
                sx={{ display: "flex" }}
              >
                <CodexoCard
                  icon={blog.icon}
                  title={blog.title}
                  description={blog.description}
                  topContent={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2.5,
                      }}
                    >
                      <Chip
                        label={blog.category}
                        size="small"
                        sx={{
                          backgroundColor: alpha(cyan[400], 0.08),
                          color: cyan[400],
                          fontWeight: "700",
                          borderRadius: "6px",
                          border: `1px solid ${alpha(cyan[400], 0.2)}`,
                        }}
                      />
                      <Box
                        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
                      >
                        <AccessTimeIcon
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: "0.85rem",
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: "500",
                          }}
                        >
                          {blog.readTime}
                        </Typography>
                      </Box>
                    </Box>
                  }
                  middleContent={
                    <Box
                      sx={{
                        width: "100%",
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "12px",
                        mb: 2.5,
                        p: 2.5,
                        boxSizing: "border-box",
                        border: `1px solid ${alpha(theme.palette.text.secondary, 0.04)}`,
                        display: "flex",
                        flexDirection: "column",
                        overflowX: "auto",
                        "&::-webkit-scrollbar": { height: "4px" },
                        "&::-webkit-scrollbar-thumb": {
                          backgroundColor: alpha(
                            theme.palette.text.secondary,
                            0.1,
                          ),
                          borderRadius: "4px",
                        },
                      }}
                    >
                      <Box
                        sx={{ display: "flex", gap: 0.8, mb: 2, flexShrink: 0 }}
                      >
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#ef4444",
                          }}
                        />
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#eab308",
                          }}
                        />
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#22c55e",
                          }}
                        />
                      </Box>

                      <Typography
                        component="code"
                        sx={{
                          fontSize: "0.82rem",
                          color: theme.palette.text.main,
                          lineHeight: 1.6,
                          fontFamily:
                            "'Fira Code', 'Courier New', Courier, monospace",
                          whiteSpace: "pre",
                          display: "block",
                        }}
                      >
                        {blog.codeRender}
                      </Typography>
                    </Box>
                  }
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  <Box
                    sx={{
                      mt: "auto",
                      pt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: `1px solid ${alpha(theme.palette.text.secondary, 0.08)}`,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 0.8,
                        alignItems: "center",
                      }}
                    >
                      <PersonIcon sx={{ color: cyan[400], fontSize: "1rem" }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: "600",
                        }}
                      >
                        {blog.author}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
                    >
                      <CalendarMonthIcon
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "0.9rem",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: "500",
                        }}
                      >
                        {blog.date}
                      </Typography>
                    </Box>
                  </Box>
                </CodexoCard>
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justify: "center",
            alignItems: "center",
            mt: { xs: 6, md: 10 },
            boxSizing: "border-box",
          }}
        >
          <Box
            component="section"
            sx={{
              width: "100%",
              p: { xs: 4, sm: 6, md: 8 },
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
              textAlign: "center",
              borderRadius: "24px",
              border: `1px solid ${alpha(cyan[500], 0.15)}`,
              background: `linear-gradient(135deg, ${alpha("#121214", 0.9)} 0%, ${alpha(cyan[950] || "#002d33", 0.25)} 100%)`,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: `0px 20px 40px ${alpha(cyan[900], 0.05)}`,
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: alpha(cyan[400], 0.3),
                boxShadow: `0px 25px 50px ${alpha(cyan[400], 0.08)}`,
                transform: "translateY(-2px)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-50%",
                left: "-20%",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(38, 198, 218, 0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "800",
                  color: theme.palette.text.main,
                  maxWidth: "520px",
                  mx: "auto",
                  mb: 2,
                  fontSize: { xs: "1.8rem", sm: "2.4rem" },
                  letterSpacing: "-0.5px",
                }}
              >
                Stay Updated
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: "520px",
                  mx: "auto",
                  mb: 4,
                  fontSize: { xs: "0.95rem", sm: "1.05rem" },
                  lineHeight: 1.6,
                }}
              >
                Subscribe to our newsletter for weekly insights, advanced
                tutorials, and cutting-edge tech trends.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  maxWidth: "500px",
                  width: "100%",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(false);
                  }}
                  error={emailError}
                  helperText={
                    emailError ? "Please enter a valid email address" : ""
                  }
                  sx={[inputStyles(theme), { mb: 0 }]}
                />
                <CodexoButton
                  type="submit"
                  startIcon={<SendIcon />}
                  sx={{
                    py: 1.7,
                    px: 6,
                    height: "56px",
                    width: { xs: "100%", sm: "auto" },
                    minWidth: "140px",
                    borderRadius: "20px",
                    fontSize: "1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Subscribe
                </CodexoButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
