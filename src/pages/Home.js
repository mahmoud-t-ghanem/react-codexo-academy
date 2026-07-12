import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  TextField,
  Divider,
  alpha,
} from "@mui/material";

import { brown, grey, yellow, cyan } from "@mui/material/colors";

import {
  Launch as LaunchIcon,
  Forum as ForumIcon,
  StarRate as StarRateIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  WhatsApp as WhatsAppIcon,
  Chat as ChatIcon,
  Terminal as TerminalIcon,
  Code as CodeIcon,
  WorkHistory as WorkHistoryIcon,
  MenuBook as MenuBookIcon,
  PhoneInTalk as PhoneInTalkIcon,
} from "@mui/icons-material";

import CodexoButton from "../components/CodexoButton";
import CodexoCard from "../components/CodexoCard";
import { useCodexoContext } from "../contexts/codexoContext";
import { validateCounsellingForm } from "../utils/counsellingValidation";
import { inputStyles } from "../styles/formStyles";

import CodexoLoading from "../components/CodexoLoading";

function Home() {
  const theme = useTheme();
  const {
    setOpenCounsellingDialog,
    setOpenCodexoSuccessDialog,
    setOpenRegistrationDialog,
    isLoading,
    setIsLoading,
    setCodexoSuccessDialogContent,
  } = useCodexoContext();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    goals: "",
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
    const validationErrors = validateCounsellingForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
    }
  };

  const handleLoadingComplete = () => {
    setCodexoSuccessDialogContent({
      title: "Session Scheduled!",
      message:
        "Thank you for reaching out. One of our lead technical consultants will review your goals and contact you via phone or WhatsApp within 24 hours to host your customized career roadmap session.",
    });

    setIsLoading(false);
    setOpenCodexoSuccessDialog(true);

    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      goals: "",
    });
    setErrors({});
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.main,
      }}
    >
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
            sx={{ mb: 5, justifyContent: "center", alignItems: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: "50px",
                border: `1px solid ${grey[800]}`,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <StarRateIcon sx={{ color: yellow[500], fontSize: "1.2rem" }} />
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.main, fontWeight: "500" }}
              >
                20+ Years Experience
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: "50px",
                border: `1px solid ${grey[800]}`,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <SchoolIcon sx={{ color: grey[500], fontSize: "1.2rem" }} />
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.main, fontWeight: "500" }}
              >
                10,000+ Students
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: "50px",
                border: `1px solid ${grey[800]}`,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <WorkIcon sx={{ color: brown[700], fontSize: "1.2rem" }} />
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.main, fontWeight: "500" }}
              >
                100% Placement Support
              </Typography>
            </Box>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.3rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: "800",
              lineHeight: 1.2,
              maxWidth: "950px",
              mx: "auto",
              mb: 3,
            }}
          >
            Learn Code & Software Engineering — <br />
            <Box
              component="span"
              sx={{
                background: theme.gradients.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build Your Creative Career
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              color: theme.palette.text.main,
              fontWeight: "400",
              maxWidth: "600px",
              mx: "auto",
              mb: 6,
            }}
          >
            Admissions Open {new Date().getFullYear()} | Free Career Counselling
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <CodexoButton
              onClick={() => setOpenRegistrationDialog(true)}
              startIcon={<LaunchIcon />}
              sx={{
                px: 4,
                py: 2,
                width: { xs: "100%", sm: "80%", md: "auto" },
              }}
            >
              Apply Now
            </CodexoButton>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ChatIcon />}
              onClick={() => setOpenCounsellingDialog(true)}
              sx={{
                width: { xs: "100%", sm: "80%", md: "auto" },
                px: 4,
                py: 2,
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                color: theme.palette.text.main,
                borderColor: grey[800],
                backgroundColor: theme.palette.primary.main,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: grey[400],
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Book Free Counselling
            </Button>

            <Button
              variant="contained"
              size="large"
              component="a"
              href="https://wa.me/963968139188"
              target="_blank"
              startIcon={<WhatsAppIcon />}
              sx={{
                width: { xs: "100%", sm: "80%", md: "auto" },
                px: 4,
                py: 2,
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                backgroundColor: "#1ebd59",
                color: theme.palette.text.main,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#1aa64e",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 10px 20px rgba(30, 189, 89, 0.2)",
                },
              }}
            >
              WhatsApp Now
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.primary.main,
          py: { xs: 8, md: 12 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: "850",
                color: theme.palette.text.main,
                mb: 2,
                letterSpacing: "-0.5px",
              }}
            >
              Why Choose Codexo Academy?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Industry-leading practical training with proven results to launch
              your tech career
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
            }}
          >
            <CodexoCard
              sx={{ cursor: "default" }}
              icon={TerminalIcon}
              title="Practical Coding"
              description="Hands-on learning through real-world software projects since day
                one."
            />
            <CodexoCard
              sx={{ cursor: "default" }}
              icon={CodeIcon}
              title="10,000+ Alumni"
              description="Successfully guided tech enthusiasts into top-tier development studios."
            />
            <CodexoCard
              sx={{ cursor: "default" }}
              icon={WorkHistoryIcon}
              title="Career Support"
              description="Dedicated technical resume building, portfolio review, and job assistance."
            />

            <CodexoCard
              sx={{ cursor: "default" }}
              icon={MenuBookIcon}
              title="Modern Curriculum"
              description="Constantly updated paths matching the latest tech stacks and industry trends."
            />
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          py: { xs: 8, md: 12 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: "850",
                color: theme.palette.text.main,
                mb: 2,
                letterSpacing: "-0.5px",
              }}
            >
              Our Courses
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Choose your path to creative excellence
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
              alignItems: "stretch",
            }}
          >
            <CodexoCard
              sx={{
                cursor: "default",
                backgroundColor: theme.palette.primary.main,
                textAlign: "center",
              }}
              title="HTML5"
              description="Master the essential building blocks of web structural design and modern semantic layouts."
              topContent={
                <Box
                  sx={{
                    width: "100%",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.01)",
                    borderRadius: "12px",
                    border: `1px solid ${grey[900]}`,
                    mb: 3,
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                    style={{
                      width: "65px",
                      height: "65px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              }
              middleContent={
                <Typography
                  variant="body2"
                  sx={{ color: cyan[400], fontWeight: "600", mb: 1.5 }}
                >
                  2-3 Weeks
                </Typography>
              }
            >
              <Button
                component={Link}
                to="/courses"
                variant="text"
                sx={{
                  color: cyan[400],
                  fontWeight: "700",
                  textTransform: "none",
                  p: 0,
                  mt: "auto",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                    color: cyan[300],
                  },
                }}
              >
                Learn More →
              </Button>
            </CodexoCard>

            <CodexoCard
              sx={{
                cursor: "default",
                backgroundColor: theme.palette.primary.main,
                textAlign: "center",
              }}
              title="CSS3"
              description="Learn beautiful modern styling layouts employing responsive Flexbox, Grid, and creative web animations."
              topContent={
                <Box
                  sx={{
                    width: "100%",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.01)",
                    borderRadius: "12px",
                    border: `1px solid ${grey[900]}`,
                    mb: 3,
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                    style={{
                      width: "65px",
                      height: "65px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              }
              middleContent={
                <Typography
                  variant="body2"
                  sx={{ color: cyan[400], fontWeight: "600", mb: 1.5 }}
                >
                  3-4 Weeks
                </Typography>
              }
            >
              <Button
                component={Link}
                to="/courses"
                variant="text"
                sx={{
                  color: cyan[400],
                  fontWeight: "700",
                  textTransform: "none",
                  p: 0,
                  mt: "auto",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                    color: cyan[300],
                  },
                }}
              >
                Learn More →
              </Button>
            </CodexoCard>

            <CodexoCard
              sx={{
                cursor: "default",
                backgroundColor: theme.palette.primary.main,
                textAlign: "center",
              }}
              title="JavaScript ES6+"
              description="Dive into advanced dynamic logic, DOM events manipulation, asynchronous operations, and backend APIs."
              topContent={
                <Box
                  sx={{
                    width: "100%",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.01)",
                    borderRadius: "12px",
                    border: `1px solid ${grey[900]}`,
                    mb: 3,
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    style={{
                      width: "65px",
                      height: "65px",
                      objectFit: "contain",
                      borderRadius: "4px",
                    }}
                  />
                </Box>
              }
              middleContent={
                <Typography
                  variant="body2"
                  sx={{ color: cyan[400], fontWeight: "600", mb: 1.5 }}
                >
                  6-8 Weeks
                </Typography>
              }
            >
              <Button
                component={Link}
                to="/courses"
                variant="text"
                sx={{
                  color: cyan[400],
                  fontWeight: "700",
                  textTransform: "none",
                  p: 0,
                  mt: "auto",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                    color: cyan[300],
                  },
                }}
              >
                Learn More →
              </Button>
            </CodexoCard>

            <CodexoCard
              sx={{
                cursor: "default",
                backgroundColor: theme.palette.primary.main,
                textAlign: "center",
              }}
              title="React.js"
              description="Build powerful single-page user interfaces utilizing modular components, functional hooks, and state management."
              topContent={
                <Box
                  sx={{
                    width: "100%",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.01)",
                    borderRadius: "12px",
                    border: `1px solid ${grey[900]}`,
                    mb: 3,
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    style={{
                      width: "65px",
                      height: "65px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              }
              middleContent={
                <Typography
                  variant="body2"
                  sx={{ color: cyan[400], fontWeight: "600", mb: 1.5 }}
                >
                  8-10 Weeks
                </Typography>
              }
            >
              <Button
                component={Link}
                to="/courses"
                variant="text"
                sx={{
                  color: cyan[400],
                  fontWeight: "700",
                  textTransform: "none",
                  p: 0,
                  mt: "auto",
                  justifyContent: "flex-start",
                  "&:hover": {
                    background: "transparent",
                    color: cyan[300],
                  },
                }}
              >
                Learn More →
              </Button>
            </CodexoCard>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.primary.main,
          py: { xs: 8, md: 12 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: "850",
                color: theme.palette.text.main,
                mb: 2,
                letterSpacing: "-0.5px",
              }}
            >
              Student Success Stories
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Hear from our successful alumni who launched their tech careers
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 4,
              alignItems: "stretch",
            }}
          >
            <CodexoCard
              sx={{ cursor: "default" }}
              description='"Codexo completely changed my career path. The intense practical focus on building real-world Full-Stack web apps helped me clear my technical interviews with full confidence."'
              topContent={
                <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarRateIcon
                      key={i}
                      sx={{ color: yellow[500], fontSize: "1.2rem" }}
                    />
                  ))}
                </Box>
              }
              middleContent={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: `2px solid ${grey[800]}`,
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
                      alt="Karim Omar"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.main,
                        fontWeight: "700",
                        fontSize: "0.95rem",
                        lineHeight: 1.2,
                      }}
                    >
                      Karim Omar
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: cyan[400], fontWeight: "600" }}
                    >
                      Full-Stack Developer at DevStudio
                    </Typography>
                  </Box>
                </Box>
              }
            />

            <CodexoCard
              sx={{ cursor: "default" }}
              description='"The code review system here is exceptional. Having senior developers review my JavaScript and React architecture line-by-line taught me how to write professional clean code."'
              topContent={
                <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarRateIcon
                      key={i}
                      sx={{ color: yellow[500], fontSize: "1.2rem" }}
                    />
                  ))}
                </Box>
              }
              middleContent={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: `2px solid ${grey[800]}`,
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                      alt="Sarah Ahmed"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.main,
                        fontWeight: "700",
                        fontSize: "0.95rem",
                        lineHeight: 1.2,
                      }}
                    >
                      Sarah Ahmed
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: cyan[400], fontWeight: "600" }}
                    >
                      Front-End Engineer at TechCorp
                    </Typography>
                  </Box>
                </Box>
              }
            />

            <CodexoCard
              sx={{ cursor: "default" }}
              description='"Best educational investment I have made. The continuous career guidance, portfolio refinement, and mock interview training successfully landed me a remote software job."'
              topContent={
                <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarRateIcon
                      key={i}
                      sx={{ color: yellow[500], fontSize: "1.2rem" }}
                    />
                  ))}
                </Box>
              }
              middleContent={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: `2px solid ${grey[800]}`,
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Tarek Mahmoud"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.main,
                        fontWeight: "700",
                        fontSize: "0.95rem",
                        lineHeight: 1.2,
                      }}
                    >
                      Tarek Mahmoud
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: cyan[400], fontWeight: "600" }}
                    >
                      Software Engineer at SolutionX
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          py: { xs: 10, md: 14 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              background: (theme) => theme.gradients.primary,
              borderRadius: "24px",
              p: { xs: 5, md: 8 },
              textAlign: "center",
              boxShadow: `0px 20px 40px rgba(0, 0, 0, 0.4)`,
              position: "relative",
              overflow: "hidden",
              border: `1px solid rgba(255, 255, 255, 0.05)`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-50%",
                left: "-20%",
                width: "300px",
                height: "300px",
                background: "rgba(255, 255, 255, 0.05)",
                filter: "blur(60px)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "850",
                color: theme.palette.text.main,
                mb: 2,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              Ready to Start Your Tech Journey?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.main,
                fontSize: { xs: "1rem", sm: "1.5rem" },
                mb: 5,
                fontWeight: "500",
              }}
            >
              {`Limited seats available for ${new Date().getFullYear()} batch. Apply now and code your future!`}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CodexoButton
                onClick={() => setOpenRegistrationDialog(true)}
                startIcon={<LaunchIcon />}
                sx={{
                  background: theme.palette.text.main,
                  color: grey[900],
                  px: 5,
                  py: 1.5,
                  borderRadius: "12px",
                  boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.15)",
                  "&:hover": {
                    background: grey[100],
                    transform: "translateY(-3px)",
                    boxShadow: "0px 12px 25px rgba(255, 255, 255, 0.25)",
                  },
                }}
              >
                Apply Now
              </CodexoButton>

              <Button
                variant="outlined"
                startIcon={<PhoneInTalkIcon />}
                component="a"
                href="tel:+963968139188"
                sx={{
                  color: theme.palette.text.main,
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 5,
                  py: 1.5,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#ffffff",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    transform: "translateY(-3px)",
                  },
                }}
                size="large"
              >
                Call Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider
        sx={{
          borderColor: theme.palette.text.secondary,
          borderWidth: "0.1px",
          opacity: 0.4,
          width: { xs: "80%", md: "60%" },
          mx: "auto",
        }}
      />

      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          py: { xs: 10, md: 14 },
          width: "100%",
        }}
      >
        <Container maxWidth="md">
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 4, sm: 6 },
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
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                fontWeight: "850",
                color: theme.palette.text.main,
                mb: 1.5,
                letterSpacing: "-0.5px",
              }}
            >
              Get Free Career Counselling
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                mb: 5,
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              Our tech experts will guide you to the right course and build your
              roadmap
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                }}
              >
                <TextField
                  fullWidth
                  disabled={isLoading}
                  name="fullName"
                  label="Your Name"
                  variant="outlined"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  sx={inputStyles(theme)}
                />

                <TextField
                  fullWidth
                  disabled={isLoading}
                  name="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  sx={inputStyles(theme)}
                />
              </Box>

              <TextField
                fullWidth
                disabled={isLoading}
                name="email"
                label="Email Address (Optional)"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={inputStyles(theme)}
              />

              <TextField
                fullWidth
                disabled={isLoading}
                name="goals"
                label="Tell us about your background and goals"
                variant="outlined"
                multiline
                rows={3}
                value={formData.goals}
                onChange={handleChange}
                error={!!errors.goals}
                helperText={errors.goals}
                sx={inputStyles(theme)}
              />

              {/* تجميع زر الإرسال والـ Loading معاً لضبط الـ Layout البصري */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <CodexoButton
                  type="submit"
                  disabled={isLoading}
                  startIcon={!isLoading ? <ForumIcon /> : null}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    textTransform: "none",
                    minWidth: "220px",
                  }}
                >
                  {isLoading ? "Processing..." : "Get Free Counselling"}
                </CodexoButton>

                {/* استدعاء اللودينغ الخطي الموحد */}
                <CodexoLoading
                  isLoading={isLoading}
                  onComplete={handleLoadingComplete}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

// const inputStyles = (theme) => ({
//   "& .MuiOutlinedInput-root": {
//     color: theme.palette.text.main,
//     backgroundColor: grey[900],
//     borderRadius: "12px",
//     "& fieldset": { borderColor: grey[800] },
//     "&:hover fieldset": { borderColor: grey[700] },
//     "&.Mui-focused fieldset": { borderColor: cyan[400] },
//     "&.Mui-error fieldset": {
//       borderColor: `${theme.palette.error.main} !important`,
//     },

//     "& textarea": {
//       "&::-webkit-scrollbar": { width: "5px" },
//       "&::-webkit-scrollbar-track": { background: "transparent" },
//       "&::-webkit-scrollbar-thumb": {
//         background: alpha(cyan[400], 0.2),
//         borderRadius: "10px",
//         "&:hover": { background: alpha(cyan[400], 0.4) },
//       },
//     },

//     "& input:-webkit-autofill": {
//       WebkitBoxShadow: `0 0 0 1000px ${grey[900]} inset !important`,
//       WebkitTextFillColor: `${theme.palette.text.main} !important`,
//       caretColor: "#ffffff",
//       borderRadius: "inherit",
//       transition: "background-color 5000s ease-in-out 0s",
//     },
//   },
//   "& .MuiInputLabel-root": { color: grey[500] },
//   "& .MuiInputLabel-root.Mui-focused": { color: grey[300] },
//   "& .MuiInputLabel-root.Mui-error": { color: theme.palette.error.main },
//   "& .MuiFormHelperText-root": {
//     color: `${theme.palette.error.main} !important`,
//     mx: 1.5,
//     mt: 0.5,
//     textAlign: "left",
//   },
// });

export default Home;
