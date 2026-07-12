import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { cyan, grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";

const CodexoCard = ({
  icon: Icon,
  title,
  description,
  topContent,
  middleContent,
  children,
  sx = {},
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={[
        {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.main,
          border: `1px solid ${grey[800]}`,
          borderRadius: "20px",
          p: 4,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",

          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",

          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",

          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderColor: grey[700],
            transform: "translateY(-5px) translateZ(0)",
            "& .icon-wrapper": {
              backgroundColor: "rgba(38, 198, 218, 0.15)",
            },
            "& .card-icon": { transform: "scale(1.2)" },
          },
        },

        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {topContent}

      {Icon && (
        <Box
          className="icon-wrapper"
          sx={{
            width: "55px",
            height: "55px",
            borderRadius: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            transition: "all 0.3s ease",
          }}
        >
          <Icon
            className="card-icon"
            sx={{
              fontSize: "2rem",
              color: cyan[400],
              transition: "all 0.3s ease",
            }}
          />
        </Box>
      )}

      {title && (
        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            color: theme.palette.text.main,
            mb: 1.5,
            fontSize: "1.25rem",
          }}
        >
          {title}
        </Typography>
      )}

      {middleContent}

      {description && (
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            mb: children ? 2 : 0,
          }}
        >
          {description}
        </Typography>
      )}

      {children}
    </Box>
  );
};

export default CodexoCard;
