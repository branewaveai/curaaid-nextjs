import { LockClock } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const ContactUsPage: FC = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
          px: 2,
          py: 4,
          backgroundColor: "secondary.light",
        }}
      >
        <Box
          sx={() => ({
            p: 2,
            backgroundColor: "secondary.light",
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            px: { xs: 0, md: 30 },
            //justifyContent: "center", // Center content horizontally
            // alignItems: "center",
          })}
        >
          <Typography variant="h4" sx={{ mb: 4, fontSize: 35 }}>
            Contact Us
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ mr: 2 }} />
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  +91 9028267298
                  <br />
                  <Box sx={{ fontSize: 15 }}>
                    Have a question? call/ whatsapp us now</Box>
                </Typography>
              </Box>
            </Grid>

            {/* <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ mr: 2 }} />
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  info@example.com
                  <br/>

                  <Box sx={{ fontSize: 15 }}>
                    Need support? Drop us an email
                  </Box>
                </Typography>
              </Box>
            </Grid> */}

            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LockClock sx={{ mr: 2 }} />
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  24 X 7
                  <br />
                  <Box sx={{ fontSize: 15 }}> We are open</Box>
                </Typography>
              </Box>
              
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LockClock sx={{ mr: 2 }} />
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  24 X 7
                  <br />
                  <Box sx={{ fontSize: 15 }}> We are open</Box>
                </Typography>
              </Box>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactUsPage;
