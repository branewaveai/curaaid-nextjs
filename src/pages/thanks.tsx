import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "@/components/styled-button";
import { FC, useState } from "react";
import { BoxProps } from "@mui/system";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ThanksPage: FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh" // Set minimum height to fill the viewport
      >
        <Box
          width="100%"
          minHeight="20vh"
          bgcolor="primary.main"
          p={2}
          textAlign="center"
        >
          {/* Content for first box */}
        </Box>
        <Box
          width="100%"
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          minHeight="60vh"
          bgcolor="white"
          p={2}
          textAlign="center"
        >
          {/* Content for second box */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Cura
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                display: "inline-block",
              }}
              color="primary.main"
            >
              Aid
            </Typography>
          </Typography>
          <Typography variant="h1">Thanks for your submission!</Typography>
          <Typography variant="h2">We will get back to you soon.</Typography>
        </Box>
        <Box
          width="100%"
          minHeight="20vh"
          bgcolor="primary.main"
          p={2}
          textAlign="center"
        >
          {/* Content for third box */}
        </Box>
      </Box>
    </>
  );
};

export default ThanksPage;
