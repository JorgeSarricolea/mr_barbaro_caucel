import { Box, Container, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { contact } from '../config/content';
import { SectionWrapper, RedDivider } from './Section';

const MotionDiv = motion.create('div');

function ContactCard({ Icon, title, children, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: '1px solid',
            borderColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
          }}
        >
          <Icon sx={{ color: 'primary.main' }} />
        </Box>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </MotionDiv>
  );
}

export default function Contact() {
  return (
    <SectionWrapper id="contacto" bg="background.paper">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <RedDivider />
          <Typography variant="h4" component="h2">
            Contacto
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            gap: 6,
          }}
        >
          {contact.whatsapp && (
            <ContactCard Icon={WhatsAppIcon} title="WhatsApp" delay={0}>
              <Link
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="body1"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Enviar mensaje
              </Link>
            </ContactCard>
          )}

          {contact.address && (
            <ContactCard Icon={PlaceIcon} title="Dirección" delay={0.1}>
              <Box sx={{ maxWidth: 260, mx: 'auto' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  {contact.address}
                </Typography>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                >
                  Abrir en Maps
                </Link>
              </Box>
            </ContactCard>
          )}

          {contact.location && (
            <ContactCard Icon={StorefrontIcon} title="Ubicado en" delay={0.2}>
              <Typography variant="body2" color="text.secondary">
                {contact.location}
              </Typography>
            </ContactCard>
          )}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
