import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  useTheme,
} from "@mui/material";
import { grey, cyan } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        pt: { xs: 8, md: 10 },
        pb: 5,
        width: "100%",
        borderTop: `1px solid ${grey[800]}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 6, md: 5 },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "900",
                color: theme.palette.text.main,
                mb: 2.5,
                letterSpacing: "0.5px",
              }}
            >
              CODEXO{" "}
              <span
                style={{
                  color: cyan[400],
                  fontSize: "0.85rem",
                  fontWeight: "700",
                }}
              >
                Academy
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Your premium gateway to mastering modern web development and
              software engineering. Learn by building real world projects
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: cyan[400], fontWeight: "700", mb: 2.5 }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["Home", "Courses", "Blog", "About", "Contact"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    component={RouterLink}
                    to={path}
                    underline="none"
                    sx={{
                      color: grey[400],
                      fontSize: "0.95rem",
                      width: "fit-content",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: cyan[400],
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </Box>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: cyan[400], fontWeight: "700", mb: 2.5 }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Damascus, Syria
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Phone: +963 968 139 188
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  wordBreak: "break-all",
                }}
              >
                Email: info@codexo.academy
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: cyan[400], fontWeight: "700", mb: 2.5 }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {[
                {
                  icon: <LinkedInIcon />,
                  url: "https://www.linkedin.com/in/mahmoud-ghanem-133245314",
                },
                {
                  icon: <GitHubIcon />,
                  url: "https://github.com/mahmoud-t-ghanem",
                },
                {
                  icon: <InstagramIcon />,
                  url: "https://www.instagram.com/m_g_artworks",
                },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.secondary.main,
                    p: 1.3,
                    border: `1px solid ${grey[800]}`,
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: grey[900],
                      backgroundColor: cyan[400],
                      border: `1px solid ${cyan[400]}`,
                      transform: "translateY(-4px)",
                      boxShadow: `0px 4px 20px rgba(0, 188, 212, 0.4)`,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: `1px solid ${grey[900]}`,
            mt: { xs: 8, md: 10 },
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: grey[600], fontSize: "0.85rem" }}
          >
            © {new Date().getFullYear()} CODEXO Academy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
