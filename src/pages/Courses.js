import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";
import { grey, cyan, lightGreen } from "@mui/material/colors";

import {
  School as SchoolIcon,
  Work as WorkIcon,
  Construction as ConstructionIcon,
  CalendarMonth as CalendarMonthIcon,
  VerifiedUser as VerifiedUserIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Forum as ForumIcon,
  AppRegistration as AppRegistrationIcon,
} from "@mui/icons-material";

import CodexoButton from "../components/CodexoButton";
import CodexoCard from "../components/CodexoCard";
import coursesData from "../data/coursesData";
import { useCodexoContext } from "../contexts/codexoContext";

const Courses = () => {
  const theme = useTheme();
  const {
    setSelectedCourse,
    setOpenRegistrationDialog,
    setOpenCounsellingDialog,
  } = useCodexoContext();
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.4rem", sm: "3.5rem" },
              fontWeight: "900",
              color: theme.palette.text.main,
              mb: 2,
              letterSpacing: "-1px",
            }}
          >
            Our{" "}
            <span
              style={{
                background: theme.gradients.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Courses
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Industry-aligned programs designed to make you professional and
            job-ready
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {coursesData.map((course, index) => (
            <CodexoCard
              key={index}
              sx={{
                backgroundColor: theme.palette.primary.main,
                p: { xs: 3, md: 5 },
                cursor: "default",
                "&:hover": {
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1.1fr 1fr 0.9fr",
                  },
                  gap: { xs: 5, md: 6 },
                  alignItems: "start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      borderRadius: "14px",
                      border: `1px solid ${grey[900]}`,
                      mb: 2.5,
                    }}
                  >
                    <img
                      src={course.logo}
                      alt={course.title}
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "800",
                      color: theme.palette.text.main,
                      mb: 1.5,
                      fontSize: "1.4rem",
                    }}
                  >
                    {course.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {course.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      mb: 4,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1.2 }}>
                      <CalendarMonthIcon
                        sx={{ color: cyan[400], fontSize: "1.2rem" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: cyan[400], fontWeight: "600" }}
                      >
                        Duration: {course.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1.2 }}>
                      <VerifiedUserIcon
                        sx={{ color: lightGreen[500], fontSize: "1.2rem" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        Industry Certification Included
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1.2 }}>
                      <AssignmentTurnedInIcon
                        sx={{ color: lightGreen[500], fontSize: "1.2rem" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        Real World Portfolio Projects
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: "auto" }}>
                    <CodexoButton
                      onClick={() => {
                        setSelectedCourse(course.title);
                        setOpenRegistrationDialog(true);
                      }}
                      startIcon={<AppRegistrationIcon />}
                      sx={{ width: { xs: "100%", sm: "auto" }, px: 5 }}
                    >
                      Enroll Now
                    </CodexoButton>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <ConstructionIcon
                        sx={{
                          color: cyan[400],
                          fontSize: "1.1rem",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: theme.palette.text.main,
                          fontWeight: "700",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Tools You'll Master
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {course.tools.map((tool, idx) => (
                        <Chip
                          key={idx}
                          label={tool}
                          size="small"
                          sx={{
                            backgroundColor: grey[900],
                            color: theme.palette.text.secondary,
                            fontWeight: "500",
                            borderRadius: "6px",
                            border: `1px solid ${grey[800]}`,
                            "&:hover": {
                              borderColor: cyan[700],
                              color: theme.palette.text.main,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <WorkIcon sx={{ color: cyan[400], fontSize: "1.1rem" }} />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: theme.palette.text.main,
                          fontWeight: "700",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Career Opportunities
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {course.careers.map((career, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            display: "flex",
                            alignItems: "center",
                            "&::before": {
                              content: '"✓"',
                              color: lightGreen[500],
                              fontWeight: "bold",
                              marginRight: "8px",
                            },
                          }}
                        >
                          {career}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <SchoolIcon sx={{ color: cyan[400], fontSize: "1.1rem" }} />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.text.main,
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Course Modules
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {course.modules.map((mod, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          p: 2,
                          backgroundColor: "rgba(255, 255, 255, 0.01)",
                          borderRadius: "10px",
                          border: `1px solid ${grey[900]}`,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            borderColor: grey[800],
                          },
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: cyan[400],
                            fontWeight: "700",
                            display: "block",
                            mb: 0.5,
                          }}
                        >
                          Module 0{idx + 1}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: "500",
                            fontSize: "0.85rem",
                          }}
                        >
                          {mod}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </CodexoCard>
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            p: { xs: 4, md: 6 },
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
            variant="h4"
            sx={{
              fontWeight: "800",
              color: theme.palette.text.main,
              mb: 1.5,
              fontSize: { xs: "1.6rem", sm: "2.2rem" },
              letterSpacing: "-0.5px",
            }}
          >
            Not Sure Which Course to Choose?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              maxWidth: "550px",
              mx: "auto",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Book a free counselling session with our career experts
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CodexoButton
              startIcon={<ForumIcon />}
              onClick={() => setOpenCounsellingDialog(true)}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
              }}
            >
              Get Free Counselling
            </CodexoButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Courses;
