import { Footer } from "@/components/footer";
import Header from "@/components/header/header";
import EnquiryForm from "@/components/home/enquiryform";
import { data as doctors } from "@/components/home/popular-course.data";
import { RootState } from "@/redux/store";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ExperienceIcon from "@mui/icons-material/Star";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

export interface Doctor {
  id: number | string;
  title: string;
  speciality: string;
  cover: string;
  rating: number;
  ratingCount: number;
  price: number;
  category: string;
  location: string;
  hospital: string;
  pathName: string;
}

const DoctorListPage = () => {
  const router = useRouter();
  const [enquireVisible, setEnquireVisible] = useState(false);

  const handleEnquireClick = () => {
    setEnquireVisible(true);
  };
  const handleClose = () => {
    setEnquireVisible(false);
  };
  const currency = useSelector((state: RootState) => state.currency.currency);
  const exchangeRate = useSelector((state: RootState) => state.currency.exchangeRate);

  // const convertedFee = (item?.price * exchangeRate).toFixed(0);
  return (
    <>
      <Header />
      <Typography variant="h4" mx={2} my={2}>
        Our Expert Doctors
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid key={doctor.id} item xs={12} sm={6} md={6}>
            <Grid container spacing={0} justifyContent="center">
              <Grid item xs={12} sm={10} md={12} mx={2}>
                <Paper elevation={3}>
                  <Grid container spacing={0} justifyContent="center">
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={doctor?.cover}
                        alt={"image"}
                        style={{
                          width: "100%",
                          maxWidth: "250px",
                          height: "200px",
                          padding: "10px",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      spacing={1}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <Typography variant="h4">
                            {" "}
                            {doctor?.title}{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            color="textSecondary"
                            paragraph
                            my={1}
                          >
                            {doctor?.speciality}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <LocalHospitalIcon
                              color="primary"
                              sx={{ marginRight: 0.2 }}
                            />
                            {doctor?.hospital}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <ExperienceIcon
                              color="primary"
                              sx={{ marginRight: 0.2 }}
                            />
                            {`4 years of experience`}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <MonetizationOnOutlinedIcon
                              color="primary"
                              sx={{ marginRight: 0.2 }}
                            />
                            <span style={{ marginRight: "0.5em" }}>
                              <b>{(doctor?.price * exchangeRate).toFixed(0) ?? doctor?.price}</b> {currency ?? "USD"}
                            </span>
                            Consultation Fee
                          </Typography>
                        </Grid>

                        <Grid item xs={12} mt={2} mb={1}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEnquireClick}
                          >
                            Book Appointment
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Dialog open={enquireVisible} onClose={handleClose}>
        {/* <DialogTitle>Book Appointment with </DialogTitle> */}
        <DialogContent>
          <EnquiryForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </>
  );
};

export default DoctorListPage;
