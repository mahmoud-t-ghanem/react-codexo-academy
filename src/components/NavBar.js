import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material";

import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useTheme } from "@emotion/react";
import LaunchIcon from "@mui/icons-material/Launch";

import { grey, lightGreen, cyan, deepPurple } from "@mui/material/colors";
import CodexoButton from "./CodexoButton";

import { Link } from "react-router-dom";
import { useCodexoContext } from "../contexts/codexoContext";

const pages = [
  { name: "Home", path: "/home" },
  { name: "Courses", path: "/courses" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const TerminalGradientSvg = () => (
  <svg width={0} height={0} style={{ position: "absolute" }}>
    <defs>
      <linearGradient
        id="terminal-neon-grad"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor={lightGreen["500"]} />
        <stop offset="50%" stopColor={cyan[400]} />
        <stop offset="100%" stopColor={deepPurple[400]} />
      </linearGradient>
    </defs>
  </svg>
);

function NavBar() {
  const theme = useTheme();
  const { setOpenRegistrationDialog } = useCodexoContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <Box
        sx={{
          position: "sticky",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 1400,
        }}
      >
        <TerminalGradientSvg />
        <AppBar
          position="static"
          sx={{
            zIndex: 1400,
            boxShadow: `0px 4px 10px ${alpha(cyan[400], 0.3)}`,
            ...(isScrolled && {
              boxShadow: `0px 12px 25px ${alpha(cyan[400], 0.5)}`,
              filter: "brightness(1.1)",
            }),
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                py: 1,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  component={Link}
                  to="/home"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    textDecoration: "none",
                    color: "inherit",
                    filter: `drop-shadow(0px 0px 12px ${alpha(cyan[400], 0.25)})`,
                    transition: "filter 0.3s ease",
                    "&:hover": {
                      filter: `drop-shadow(0px 0px 18px ${alpha(cyan[400], 0.45)})`,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/logo.png"
                    alt="Codexo Logo"
                    sx={{
                      width: "2.4rem",
                      height: "2.4rem",
                      objectFit: "contain",
                    }}
                  />

                  <Typography
                    variant="h5"
                    noWrap
                    sx={{
                      display: "block",
                      fontSize: "1.8rem",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      background: theme.gradients.primary,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textDecoration: "none",
                      letterSpacing: "2px",
                    }}
                  >
                    Codexo
                  </Typography>
                </Box>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                  {pages.map((page) => (
                    <Button
                      component={Link}
                      to={page.path}
                      key={page.name}
                      sx={{
                        my: 2,
                        px: 2,
                        py: 1,
                        color: grey[200],
                        display: "block",
                        fontWeight: "500",
                        fontSize: "0.95rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: cyan[400],
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <CodexoButton
                    startIcon={<LaunchIcon />}
                    onClick={() => setOpenRegistrationDialog(true)}
                  >
                    Apply Now
                  </CodexoButton>
                </Box>

                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <IconButton
                    edge="end"
                    size="large"
                    aria-label="menu"
                    onClick={toggleMenu}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 1401,
                      color: isMenuOpen ? cyan[400] : grey[200],
                      backgroundColor: isMenuOpen
                        ? "rgba(255, 255, 255, 0.08)"
                        : "transparent",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        color: (theme) =>
                          theme.palette.cyan?.[400] || "#26c6da",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        transform: "rotate(90deg)",
                      },
                      ...(isMenuOpen && {
                        transform: "rotate(90deg)",
                      }),
                    }}
                  >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Collapse
          in={isMenuOpen}
          timeout="auto"
          unmountOnExit
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100vw",
            zIndex: 1300,
            boxShadow: `0px 20px 40px ${alpha(cyan[400], 0.5)}`,
            backgroundColor: "#121214",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <List
            sx={{ width: "100%", pb: 3, pt: 1, backgroundColor: "transparent" }}
          >
            {pages.map((page) => (
              <ListItem
                key={page.name}
                disablePadding
                sx={{ display: "block", backgroundColor: "transparent" }}
              >
                <ListItemButton
                  component={Link}
                  to={page.path}
                  onClick={closeMenu}
                  sx={{
                    py: 2,
                    justifyContent: "center",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    backgroundColor: "transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& .MuiListItemText-primary": {
                        color: (theme) =>
                          theme.palette.cyan?.[400] || "#26c6da",
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={page.name}
                    slotProps={{
                      primary: {
                        component: "span",
                        sx: {
                          display: "block",
                          textAlign: "center",
                          fontWeight: "700",
                          fontSize: "1.1rem",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: grey[200],
                          transition: "color 0.2s ease",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem
              sx={{
                justifyContent: "center",
                mt: 2,
                backgroundColor: "transparent",
              }}
            >
              <CodexoButton
                sx={{ width: "80%" }}
                startIcon={<LaunchIcon />}
                onClick={() => setOpenRegistrationDialog(true)}
              >
                Apply Now
              </CodexoButton>
            </ListItem>
          </List>
        </Collapse>
      </Box>
    </ClickAwayListener>
  );
}

export default NavBar;
