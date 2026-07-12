import React, { useState, useEffect } from "react";
import {
  Box,
  LinearProgress,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { cyan } from "@mui/material/colors";

const CodexoLoading = ({ isLoading, onComplete }) => {
  const theme = useTheme();
  const [displayPercent, setDisplayPercent] = useState(0);
  const [message, setMessage] = useState("Submitting your data securely...");

  const primaryGradient =
    theme.gradients?.primary ||
    `linear-gradient(135deg, ${cyan[400]} 0%, #a855f7 100%)`;

  const duration = 3000;

  useEffect(() => {
    let percentTimer;
    let finishTimeout;

    if (isLoading) {
      setDisplayPercent(0);
      setMessage("Submitting your data securely...");

      const startTime = Date.now();
      percentTimer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const currentPercent = Math.min((elapsedTime / duration) * 100, 100);

        setDisplayPercent(currentPercent);

        if (currentPercent >= 100) {
          clearInterval(percentTimer);
          setMessage("Finishing up...");
          finishTimeout = setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }
      }, 30);
    } else {
      setDisplayPercent(0);
    }

    return () => {
      clearInterval(percentTimer);
      clearTimeout(finishTimeout);
    };
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <Box
      sx={{
        width: "100%",
        mt: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        animation: "fadeIn 0.3s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(-4px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <LinearProgress
        variant="determinate"
        value={100}
        sx={{
          width: "100%",
          height: 6,
          borderRadius: "8px",
          backgroundColor: alpha(theme.palette.common.white, 0.06),
          border: `1px solid ${alpha(cyan[400], 0.15)}`,
          overflow: "hidden",
          "& .MuiLinearProgress-bar": {
            borderRadius: "8px",
            background: primaryGradient,
            transformOrigin: "left",
            animation: `smoothLinearProgress ${duration}ms linear forwards`,
          },
          "@keyframes smoothLinearProgress": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0%)" },
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 0.5,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: alpha(theme.palette.text.secondary, 0.8),
            fontWeight: "500",
            fontSize: "0.78rem",
            letterSpacing: "0.2px",
            animation: "pulseText 1.8s infinite ease-in-out",
            "@keyframes pulseText": {
              "0%, 100%": { opacity: 0.7 },
              "50%": { opacity: 1 },
            },
          }}
        >
          {message}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: cyan[400],
            fontWeight: "700",
            fontSize: "0.8rem",
            fontFamily: "monospace",
          }}
        >
          {Math.round(displayPercent)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default CodexoLoading;
