import { Box, Container, Typography, Link } from '@mui/material';
import { site } from '../config/content';

const footerLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'ubicacion', label: 'Ubicación' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: '#050506',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Oswald", sans-serif',
              letterSpacing: '0.04em',
              color: 'primary.main',
              mb: 1,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {site.shortName}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, justifyContent: 'center', mb: 2 }}>
            {footerLinks.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}
              >
                {label}
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.6 }}>
            © {currentYear} {site.name}. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
