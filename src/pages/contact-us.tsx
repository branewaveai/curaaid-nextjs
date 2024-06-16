import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Box, Typography } from "@mui/material";
import React from "react";

const ContactUsPage: React.FC = () => {

  return (
    <>
      <Box component="main">
        <Header />
        <div style={{ height: "100%" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ padding: "0 20px 20px 20px" }}
          >
            <Typography variant="h1" width="100%" marginY={2}>
              Contact Us
            </Typography>
            <Typography variant="h5" fontWeight="light" marginBottom={2}>
              Email: nischay@curaaid.com
            </Typography>
            <Typography variant="h5" fontWeight="light" marginBottom={2}>
              Phone: +91 9028267298
            </Typography>
            <Typography variant="h5" fontWeight="light" marginBottom={4}>
              WhatsApp: +91 9028267298
            </Typography>
            <Typography variant="h4" fontWeight="light" marginBottom={2}>
              India
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="light"
              color="text.secondary"
            >
              677, 1st Floor, 27th Main, 13th Cross <br />
              Hsr Layout <br />
              Bangalore - 560102 <br />
              Karnataka
            </Typography>
          </Box>
        </div>
        <Footer />
      </Box>
    </>
  );
};

export default ContactUsPage;
