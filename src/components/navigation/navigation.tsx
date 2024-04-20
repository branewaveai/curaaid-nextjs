
// import { navigations } from './navigation.data.thanks';
import Box from '@mui/material/Box';
import Link from 'next/link'; // Import Link from next/link for Next.js routing
import { FC } from 'react';
import { navigations } from './navigation.data';

interface NavigationProps {
  onClick: () => void;
}

const Navigation: FC<NavigationProps> = ({ onClick }) => {
  const handleNavItemClick = () => {
    onClick();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          key={destination}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),
            '& > div': { display: 'none' },
            '&.current>div': { display: 'block' },
            '&:hover': {
              color: 'primary.main',
              '&>div': { display: 'block' },
            },
          }}
        >
          <Link href={destination} passHref>
            <Box
              component="a"
              onClick={handleNavItemClick}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 12,
                  transform: 'rotate(3deg)',
                  '& img': { width: 44, height: 'auto' },
                }}
              >
                <img src="/images/headline-curve.svg" alt="Headline curve" />
              </Box>
              {label}
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
