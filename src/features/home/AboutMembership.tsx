"use client";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const sections = [
  {
    title: "About",
    description:
      "Learn more about the Asia-Pacific Marine Biotechnology Association, our mission, and our commitment to advancing marine biotechnology research and industry development.",
    image: "/home/home_about.jpg",
    link: "/about",
    buttonText: "Learn More",
  },
  {
    title: "Membership",
    description:
      "Join our community of researchers, industry professionals, and policy makers working together to shape the future of marine biotechnology in the Asia-Pacific region.",
    image: "/home/home_about.jpg",
    link: "/membership",
    buttonText: "Join Now",
  },
];

export default function AboutMembership() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: 4
      }}>
        {sections.map((section, index) => (
          <Card
            key={index}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 4,
              },
            }}
          >
            <Box sx={{ height: 200, position: "relative" }}>
              <Image
                src={section.image}
                alt={section.title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.6 }}
              >
                {section.description}
              </Typography>
              <Box sx={{ textAlign: "center", mt: "auto" }}>
                <Button
                  component={Link}
                  href={section.link}
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
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
                  {section.buttonText}
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
