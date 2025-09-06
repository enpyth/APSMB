'use client'

import { Container, Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SchoolIcon from '@mui/icons-material/School'
import Link from 'next/link'

const conferences = [
  {
    year: '2025',
    title: 'APMBC 2025',
    subtitle: 'Coming Soon',
    place: 'Yantai, Shandong, China',
    time: 'TBA',
    hostedBy: 'TBA',
    description: 'Details coming soon for the next Asia Pacific Marine Biotechnology Conference.',
    status: 'upcoming',
    isPlaceholder: true,
    link: '/events/apmbc-2025'
  },
  {
    year: '2023',
    title: 'APMBC 2023',
    subtitle: 'Transforming marine bio-resources into the next-generation blue bio-industry',
    place: 'Adelaide, Australia',
    time: '2-6 October 2023',
    hostedBy: 'Flinders University Centre for Marine Bioproducts Development',
    description: '13th Asia Pacific Marine Biotechnology Conference (APMBC) combined with the 5th Australia New Zealand Marine Biotechnology Society Conference (5th ANZMBS)',
    status: 'completed',
    isPlaceholder: false,
    link: '/events/apmbc-2023'
  }
]

export default function Conference() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Conferences
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 1200, mx: 'auto' }}>
          Asia Pacific Marine Biotechnology Conferences bringing together researchers, industry, and policy makers
        </Typography>
      </Box>
      
      <Box>
        {conferences.map((conference, index) => (
          <Grid key={index}>
            <Link href={`/events/${conference.link}`} style={{ textDecoration: 'none' }}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 4
                  },
                  border: conference.status === 'upcoming' ? '2px solid' : '1px solid',
                  borderColor: conference.status === 'upcoming' ? 'primary.main' : 'divider'
                }}
              >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {conference.title}
                  </Typography>
                  <Chip 
                    label={conference.status === 'upcoming' ? 'Coming Soon' : 'Completed'} 
                    color={conference.status === 'upcoming' ? 'primary' : 'success'}
                    size="small"
                  />
                </Box>
                
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
                  {conference.subtitle}
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {conference.place}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EventIcon sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {conference.time}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Hosted by {conference.hostedBy}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {conference.description}
                </Typography>
              </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Box>
    </Container>
  )
}
