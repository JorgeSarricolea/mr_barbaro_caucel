import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { gallerySpace, galleryWork } from '../config/content';
import { SectionWrapper, RedDivider } from './Section';

const MotionDiv = motion.create('div');

function GalleryGrid({ images, columns, height }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: columns,
        gap: 2,
      }}
    >
      {images.map(({ src, alt }, i) => (
        <MotionDiv
          key={src}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.1 }}
        >
          <Box
            component="img"
            src={src}
            alt={alt}
            loading="lazy"
            sx={{
              width: '100%',
              height,
              objectFit: 'cover',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'border-color 0.25s, transform 0.25s',
              '&:hover': { borderColor: 'primary.main', transform: 'scale(1.02)' },
            }}
          />
        </MotionDiv>
      ))}
    </Box>
  );
}

export default function Gallery() {
  const hasSpace = gallerySpace?.length > 0;
  const hasWork = galleryWork?.length > 0;
  if (!hasSpace && !hasWork) return null;

  return (
    <SectionWrapper id="galeria" bg="background.paper">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <RedDivider />
          <PhotoLibraryIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }} />
          <Typography variant="h4" component="h2">
            Conoce nuestro espacio
          </Typography>
        </Box>

        {hasSpace && (
          <Box sx={{ mb: hasWork ? 4 : 0 }}>
            <GalleryGrid
              images={gallerySpace}
              columns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}
              height={{ xs: 220, sm: 280, md: 340 }}
            />
          </Box>
        )}

        {hasWork && (
          <Box>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                textAlign: 'center',
                color: 'primary.main',
                letterSpacing: 3,
                mb: 2,
                fontSize: '0.8rem',
              }}
            >
              Nuestro trabajo
            </Typography>
            <GalleryGrid
              images={galleryWork}
              columns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
              height={{ xs: 280, sm: 340, md: 380 }}
            />
          </Box>
        )}
      </Container>
    </SectionWrapper>
  );
}
