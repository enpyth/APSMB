'use client'

import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material'
import Image from 'next/image'

const partners = [
  {
    name: 'Flinders University',
    image: '/home/sponsor2.jpg'
  },
  {
    name: 'BioMarine',
    image: '/home/sponsor1.jpg'
  },
  {
    name: 'Blue Forward Fund',
    image: '/home/sponsor3.jpg'
  },
  {
    name: 'Taiheiyo Cement',
    image: '/home/sponsor4.jpg'
  }
]

export default function Partners() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Partners & Sponsors
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 1200, mx: 'auto' }}>
          Collaborating with leading institutions and organizations to advance marine biotechnology
        </Typography>
      </Box>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: 4
      }}>
        {partners.map((partner, index) => (
          <Card 
            key={index}
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
              <Box sx={{ 
                mb: 2, 
                height: 120, 
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1
              }}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  style={{
                    objectFit: 'contain',
                    padding: '10px'
                  }}
                />
              </Box>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                {partner.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  )
}
