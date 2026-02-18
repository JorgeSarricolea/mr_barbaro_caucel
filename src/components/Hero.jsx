import { Box, Container, Typography, Button, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { hero, site } from '../config/content';

const MotionBox = motion.create(Box);

export default function Hero() {
  const { backgroundImage, ctaPrimary, ctaSecondary } = hero;

  return (
    <Box
      component="section"
      id="inicio"
      aria-label="Inicio"
      sx={{
        minHeight: { xs: '100svh', sm: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: 'text.primary',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.25) saturate(0.5)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(13,13,15,0.4) 0%, rgba(13,13,15,0.7) 60%, rgba(13,13,15,0.95) 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 3,
          bgcolor: 'primary.main',
          borderRadius: 2,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: 4, textAlign: 'center' }}>
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography
            component="p"
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 5, mb: 2, fontSize: '0.85rem' }}
          >
            Barbería profesional
          </Typography>

          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' },
              lineHeight: 1,
              mb: 2.5,
            }}
          >
            {site.shortName}
          </Typography>

          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <Rating
              value={site.rating}
              precision={0.1}
              readOnly
              size="small"
              sx={{ color: 'primary.main', '& .MuiRating-iconEmpty': { color: 'rgba(198,40,40,0.3)' } }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {site.rating} ({site.reviewCount} opiniones)
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.85,
              fontWeight: 400,
              maxWidth: 520,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {site.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              href={ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              {ctaPrimary.text}
            </Button>
            <Button
              href={ctaSecondary.href}
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  borderColor: 'primary.light',
                  bgcolor: 'rgba(198, 40, 40, 0.08)',
                },
              }}
            >
              {ctaSecondary.text}
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
