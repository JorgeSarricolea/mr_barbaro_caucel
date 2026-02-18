import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionDiv = motion.create('div');
import ContentCutIcon from '@mui/icons-material/ContentCut';
import FaceIcon from '@mui/icons-material/Face';
import StraightenIcon from '@mui/icons-material/Straighten';
import SpaIcon from '@mui/icons-material/Spa';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { services } from '../config/content';
import { SectionWrapper, RedDivider } from './Section';

const iconMap = {
  ContentCut: ContentCutIcon,
  Face: FaceIcon,
  Straighten: StraightenIcon,
  Spa: SpaIcon,
  ChildCare: ChildCareIcon,
  AutoFixHigh: AutoFixHighIcon,
};

export default function Services() {
  if (!services?.length) return null;

  return (
    <SectionWrapper id="servicios" bg="background.default">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <RedDivider />
          <Typography variant="h4" component="h2">
            Servicios
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {services.map(({ icon, title, text }, i) => {
            const IconComponent = iconMap[icon] || ContentCutIcon;
            return (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Box
                  sx={{
                    p: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    height: '100%',
                    transition: 'border-color 0.25s, transform 0.25s',
                    '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
                  }}
                >
                  <IconComponent sx={{ fontSize: 32, color: 'primary.main', mb: 1.5 }} />
                  <Typography variant="subtitle1" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {text}
                  </Typography>
                </Box>
              </MotionDiv>
            );
          })}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
