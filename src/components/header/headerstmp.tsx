import { Logo } from '@/components/logo'
import { AuthNavigation, Navigation } from '@/components/navigation'
import { Close, Menu, Phone, WhatsApp } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
  const router = useRouter();

  const handleNavigationClick = () => {
    if (matchMobileView) {
      setVisibleMenu(false);
    }
  };

  const handlePhoneClick = () => {
    router.push("tel:+919028267298"); // Navigate to the tel: URI
  };

  const handleWhatsAppClick = () => {
    // Replace '1234567890' with your WhatsApp number
    const phoneNumber = "+919028267298";
    // Replace 'Hello!' with your custom message
    const message = encodeURIComponent("Hello!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    router.push(whatsappUrl);
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton
              onClick={handleWhatsAppClick}
              aria-label="WhatsApp"
              style={{ color: "green" }}
            >
              <WhatsApp />
            </IconButton>
            <IconButton onClick={handlePhoneClick} aria-label="Phone">
              <Phone />
            </IconButton>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },

              transition: (theme) => theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation onClick={handleNavigationClick} /> {/* Pass onClick handler to Navigation component */}
            <AuthNavigation />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
