import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import EnquiryForm from "../hospitals/EnquiryForm";
const Banner = () => {
  const [enquireVisible, setEnquireVisible] = useState(false);
  const handleEnquireClick = () => {
    setEnquireVisible(true);
  };

  const handleClose = () => {
    setEnquireVisible(false);
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#127C71", color: "#fff", padding: "20px 0" }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" gutterBottom sx={{ m: 0 }}>
                Get Best Treatment Experience from Us
              </Typography>

              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>Cutting-edge Healthcare at significantly lower costs.</li>
                <li>Instant Video Appointment Booking with our Doctors.</li>
                <li>
                  Comprehensive Services including visa assistance,
                  accommodation, travel arrangements, and interpreter services.
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
              <div style={{ textAlign: "center" }}>
                <Image
                  src="/images/treatments/banner.jpg"
                  alt="Banner Image"
                  width={300}
                  height={200}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEnquireClick}
              >
                Enquire Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Dialog open={enquireVisible} onClose={handleClose}>
        <DialogContent>
          <EnquiryForm hospitalId={1} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Banner;
