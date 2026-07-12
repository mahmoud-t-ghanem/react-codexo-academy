import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Avatar,
} from "@mui/material";
import { grey, cyan, lightGreen } from "@mui/material/colors";
import {
  School as SchoolIcon,
  VerifiedUserOutlined as ValueIcon,
  Timeline as JourneyIcon,
} from "@mui/icons-material";

import CodexoButton from "../components/CodexoButton";
import CodexoCard from "../components/CodexoCard";
import { Link } from "react-router-dom";
import {
  coreValues,
  facultyMembers,
  infrastructureItems,
  journeyTimeline,
} from "../data/aboutData";

const About = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        color: theme.palette.text.main,
      }}
    >
      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "350px",
            background: `radial-gradient(circle, ${alpha(cyan[500], 0.08)} 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.8rem" },
                fontWeight: "900",
                mb: 2,
                letterSpacing: "-1px",
              }}
            >
              About{" "}
              <span
                style={{
                  background: theme.gradients.primary,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Codexo Academy
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                maxWidth: "650px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Pioneering tech education—Empowering software developers, frontend
              engineers, and backend architects to master tomorrow's industries.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
              gap: { xs: 5, md: 8 },
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "800",
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  mb: 2.5,
                  fontSize: "1.05rem",
                }}
              >
                At Codexo, we bridge the gap between theoretical syntax and
                industrial full-stack workflows. We train web developers using
                progressive blocks—starting from foundational UI styling up to
                production-grade server architectures and secure API
                integrations.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: "1.05rem",
                }}
              >
                We ensure every single learner builds a production-ready
                portfolio, transitioning seamlessly from a passionate beginner
                into a highly independent software engineer.
              </Typography>
              <CodexoButton component={Link} to="/courses">
                Discover Our Tracks
              </CodexoButton>
            </Box>

            <CodexoCard
              sx={{
                p: { xs: 5, sm: 8 },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "320px",
                borderRadius: "24px",
                border: `1px solid ${alpha(cyan[500], 0.1)}`,
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: alpha(cyan[400], 0.1),
                  borderRadius: "16px",
                  mb: 3,
                }}
              >
                <SchoolIcon sx={{ color: cyan[400], fontSize: "2.2rem" }} />
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "900",
                  fontSize: { xs: "3rem", sm: "3.5rem" },
                  mb: 1,
                  letterSpacing: "-1px",
                }}
              >
                5,000+
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: "600",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                }}
              >
                Global Tech Graduates
              </Typography>
            </CodexoCard>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "800",
              mb: 6,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Our Core Values
          </Typography>
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
            {coreValues.map((value, idx) => (
              <CodexoCard
                key={idx}
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: alpha(lightGreen[500], 0.1),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <ValueIcon sx={{ color: lightGreen[500] }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "700", mb: 1.5, fontSize: "1.15rem" }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}
                >
                  {value.desc}
                </Typography>
              </CodexoCard>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "800",
              mb: 6,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Meet Our Expert Faculty
          </Typography>
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
            {facultyMembers.map((member, idx) => (
              <CodexoCard
                key={idx}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "20px",
                  border: `1px solid ${alpha(grey[800], 0.4)}`,
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 90,
                    height: 90,
                    mb: 2.5,
                    border: `2px solid ${cyan[400]}`,
                    boxShadow: `0px 4px 14px ${alpha(cyan[400], 0.2)}`,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "700", mb: 0.5, fontSize: "1.1rem" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: cyan[400],
                    fontWeight: "600",
                    mb: 0.5,
                    fontSize: "0.85rem",
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: "500",
                    display: "block",
                    mb: 2,
                  }}
                >
                  {member.exp} Experience
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: "0.85rem",
                  }}
                >
                  {member.detail}
                </Typography>
              </CodexoCard>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, position: "relative" }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              mb: 8,
            }}
          >
            <JourneyIcon sx={{ color: cyan[400], fontSize: "2.2rem" }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "800",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Our Educational Journey
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                left: { xs: "20px", md: "50%" },
                top: 0,
                bottom: 0,
                width: "2px",
                background: `linear-gradient(to bottom, ${cyan[500]}, ${lightGreen[500]})`,
                transform: { md: "translateX(-50%)" },
              },
            }}
          >
            {journeyTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      md: isEven ? "row" : "row-reverse",
                    },
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 6,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "calc(100% - 50px)", md: "45%" },
                      ml: { xs: "auto", md: 0 },
                    }}
                  >
                    <CodexoCard
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        border: `1px solid ${alpha(cyan[400], 0.15)}`,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "800", color: cyan[400], mb: 1 }}
                      >
                        {item.year}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </CodexoCard>
                  </Box>

                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: lightGreen[500],
                      border: `4px solid ${theme.palette.primary.main}`,
                      position: "absolute",
                      left: { xs: "20px", md: "50%" },
                      transform: "translateX(-50%)",
                      zIndex: 2,
                      boxShadow: `0 0 10px ${lightGreen[500]}`,
                    }}
                  />

                  <Box
                    sx={{ width: "45%", display: { xs: "none", md: "block" } }}
                  />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 5, md: 8 },
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
                mb: 6,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              World-Class Code Infrastructure
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                gap: 5,
              }}
            >
              {infrastructureItems.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mb: 2.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                      background: alpha(cyan[400], 0.05),
                      borderRadius: "50%",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "700", mb: 1, fontSize: "1.15rem" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      maxWidth: "280px",
                      mx: "auto",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
