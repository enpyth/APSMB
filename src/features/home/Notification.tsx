"use client";

import { Container, Box, Typography } from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { getNotificationsByPriority } from "@/config/notification";

export default function Notification() {
  const notifications = getNotificationsByPriority();

  if (notifications.length === 0) return null;

  // Combine all messages into one continuous text
  const allMessages = notifications.map(n => n.message).join(" | ");

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 2,
        borderBottom: "1px solid",
        borderColor: "primary.dark",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            position: "relative",
          }}
        >
          <AnnouncementIcon sx={{ fontSize: 20 }} />
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                whiteSpace: "nowrap",
                animation: "scroll 20s linear infinite",
                "@keyframes scroll": {
                  "0%": { transform: "translateX(100%)" },
                  "100%": { transform: "translateX(-100%)" },
                },
              }}
            >
              Latest: {allMessages}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}