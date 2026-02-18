import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionDiv = motion.create('div');
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import { features } from '../config/content';
import { SectionWrapper, RedDivider } from './Section';

const iconMap = {
  AccessibleForward: AccessibleForwardIcon,
  LocalParking: LocalParkingIcon,
  EmojiEvents: EmojiEventsIcon,
  Verified: VerifiedIcon,
};

export default function Features() {
  if (!features?.length) return null;

  return (
    <SectionWrapper
      id="caracteristicas"
      bg="background.paper"
      sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <RedDivider />
          <Typography variant="h4" component="h2">
            Por qué elegirnos
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 4,
          }}
        >
          {features.map(({ icon, title, text }, i) => {
            const IconComponent = iconMap[icon] || EmojiEventsIcon;
            return (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: 'rgba(198, 40, 40, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {text}
                    </Typography>
                  </Box>
                </Box>
              </MotionDiv>
            );
          })}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
