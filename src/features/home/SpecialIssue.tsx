"use client";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function SpecialIssue() {
  return (
      <Box sx={{ textAlign: "center", mb: 6, bgcolor: "grey.50", py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Special Issue
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 1200, mx: "auto" }}
        >
          APMBC2023 Special Issue of Marine Biotechnology showcasing
          cutting-edge research and innovations
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6, maxWidth: 1200, mx: "auto" }}
        >
          A special issue of Marine Biotechnology was released including papers
          from the 2023 Marine Biotechnology Conference. This collection
          showcases cutting-edge research and innovations in marine
          biotechnology from leading researchers across the Asia-Pacific region.
        </Typography>
        <Button
          component={Link}
          href="#"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: 2,
            "&:hover": {
              bgcolor: "primary.dark",
              transform: "translateY(-2px)",
              boxShadow: 4,
            },
            transition: "all 0.3s ease",
          }}
        >
          View Special Issue
        </Button>
      </Box>
  );
}
