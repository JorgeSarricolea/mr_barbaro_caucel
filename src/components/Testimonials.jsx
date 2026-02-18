import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionDiv = motion.create('div');
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { testimonials, site } from '../config/content';
import { SectionWrapper, RedDivider } from './Section';

export default function Testimonials() {
  if (!testimonials?.length) return null;

  return (
    <SectionWrapper id="opiniones" bg="background.default">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <RedDivider />
          <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
            Lo que dicen nuestros clientes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {site.rating} estrellas en {site.reviewCount} opiniones de Google
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {testimonials.map(({ quote, author }, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Box
                sx={{
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.25s',
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                <FormatQuoteIcon sx={{ fontSize: 28, color: 'primary.main', mb: 1.5, transform: 'scaleX(-1)' }} />
                <Typography
                  variant="body1"
                  sx={{ fontStyle: 'italic', flex: 1, lineHeight: 1.7, mb: 2 }}
                >
                  &ldquo;{quote}&rdquo;
                </Typography>
                {author && (
                  <Typography variant="body2" color="text.secondary" fontWeight={600}>
                    — {author}
                  </Typography>
                )}
              </Box>
            </MotionDiv>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
