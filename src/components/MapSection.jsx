import { Box, Container, Typography } from '@mui/material';
import { mapEmbed, contact } from '../config/content';
import { SectionWrapper, AnimatedBlock, RedDivider } from './Section';

export default function MapSection() {
  if (!mapEmbed?.enabled || !mapEmbed?.iframeSrc) return null;

  return (
    <SectionWrapper id="ubicacion" bg="background.default">
      <Container maxWidth="lg">
        <AnimatedBlock>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <RedDivider />
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
              Ubicación
            </Typography>
            {contact?.address && (
              <Typography color="text.secondary">
                {contact.address}
              </Typography>
            )}
            {contact?.location && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Ubicado en: {contact.location}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              '& iframe': {
                display: 'block',
                width: '100%',
                height: { xs: 300, sm: 400 },
                border: 0,
                filter: 'grayscale(0.2) brightness(0.9)',
              },
            }}
          >
            <iframe
              src={mapEmbed.iframeSrc}
              title={mapEmbed.title || 'Ubicación en mapa'}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
