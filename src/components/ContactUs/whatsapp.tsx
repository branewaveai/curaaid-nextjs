import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';

const WhatsAppButton = () => {
  const phoneNumber = '9028267298';

  const handleWhatsAppClick = () => {
    const phoneNumber = '9028267298'; // Your WhatsApp phone number
    const countryCode = '+91'; // Country code without '+' symbol
  
    const formattedPhoneNumber = countryCode + phoneNumber.replace(/\D/g, ''); // Remove non-digit characters from phone number
  
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobileDevice) {
      window.open(`https://wa.me?phone=${encodeURIComponent(formattedPhoneNumber)}`, '_blank');
    } else {
      window.open(`https://wa.me/${encodeURIComponent(formattedPhoneNumber)}`, '_blank');
    }
  };
  

  return (
    
    <IconButton
      className="whatsapp-button"
      color="primary"
      onClick={handleWhatsAppClick}
      aria-label="WhatsApp"
    >
        
      <WhatsAppIcon />
    </IconButton>
  );
};

export default WhatsAppButton;
