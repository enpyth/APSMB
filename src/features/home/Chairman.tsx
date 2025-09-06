"use client";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import Image from "next/image";

export default function Chairman() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Conference Leadership
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 1200, mx: "auto" }}
        >
          Leading the way in marine biotechnology research and industry
          development
        </Typography>
      </Box>

      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: 250,
              height: 250,
              mx: "auto",
              mb: 3,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid",
              borderColor: "primary.main",
              boxShadow: 4,
            }}
          >
            <Image
              src="/home/leader.png"
              alt="Professor Wei Zhang"
              width={250}
              height={250}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            Professor Wei Zhang
          </Typography>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            Conference Chair and Convenor
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            Investment Industry and Policy Forum
          </Typography>
        </Box>

        <Card sx={{ p: 3 }}>
          <CardContent>
            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
            >
              The 13th APMBC and 5th ANZMBS conference are combining to engage
              marine biotechnologists, industry, investors, and policy makers in
              current marine biotechnology research, and industry development in
              the Asia-Pacific region.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
            >
              This is the first time the APMBC will be held in the Australia/New
              Zealand region. The combination of Australian and New Zealand
              marine territories makes it the second largest in the world and
              the largest in the Asia-Pacific region, with a rich biodiversity.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
            >
              This provides a great opportunity to participate in the growth and
              future development of the marine biotechnology industry in the
              region and globally.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
            >
              A key objective of the joint Conference is to encourage
              academic-industry partnerships across the region. A key feature of
              the conference program will be the balance of academic and
              industry participants.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
            >
              The program also offers industry, investment and policy forums to
              align industry needs and government priorities with productive
              collaborations and research and development essential for
              achieving industry's full potential.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
