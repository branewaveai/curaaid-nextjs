import { Footer } from "@/components/footer";
import Header from "@/components/header/headerstmp";
import EnquiryForm from "@/components/home/enquiryform";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ExperienceIcon from "@mui/icons-material/Star";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
const timeSlots = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"];
const styles = {
  containerStyle: {
    padding: 20,
    maxWidth: "calc(100vw - 200px)",
    margin: "auto",
    marginTop: 50,
    // height: "100vh", // Adjust the height as needed
  },

  textContainerStyle: {
    textAlign: "left",
    // backgroundColor: "#2196F3", // Background color, you can change it
    padding: "20px",
    color: "black",
  },
  formStyle: {
    alignItems: "flex-start",
  },
};

const DoctorPage = () => {
  const router = useRouter();
  const [enquireVisible, setEnquireVisible] = useState(false);
  const { slug, id } = router.query;
  //const doctor = data.find((doctor) => doctor.id === parseInt(id as string));
  const handleEnquireClick = () => {
    setEnquireVisible(true);
  };

  const handleClose = () => {
    setEnquireVisible(false);
  };
  const data1 = [
    {
      id: 1,
      cover: "/images/mentors/mangesh.png",
      title: "Dr. Mangesh Kamath",
      About_doc: [
        "Dr. Swapnil Kapote has been practicing surgical oncology in Mumbai and has overall 15 years of overall experience. He has an extensive experience in Minimal Invasive surgery in oncology. Dr. Kapote has performed more than 4000 complex cancer surgeries.",
        "He is actively involved in various aspects of patient management for different types of cancers which include initial workup, decision making vis-à-vis treatment plan and implementation of those decisions.",
        "He Is experienced in decision making regarding additional treatment modalities like radiotherapy, chemotherapy and intervention radiology which has helped gain appropriate and correct knowledge on these important facets of oncological practice.",
      ],
      Experience: "12",
      speciality: "Oncology",
      rating: 5,
      price: 30,
      location: "Bangalore, India",
      hospital: "Fortis Hospital, Bangalore",
      Procedures:
        "Atrial Septal Defect (ASD) Repair, Bentall Procedure, Coronary Artery Bypass Grafting (CABG), Cardiac Valve Replacement",
    },
  ];
  var doctor = data1.find((doctor) => doctor.id === parseInt("1" as string));
  console.log(slug, id);

  const faqData = [
    {
      id: 1,
      question: "What is the experience of Dr. Swapnil Kapote?",
      answer:
        "Dr. Swapnil Kapote has been practicing surgical oncology in Mumbai and has overall 15 years of overall experience. He has an extensive experience in Minimal Invasive surgery in oncology. Dr. Kapote has performed more than 4000 complex cancer surgeries.",
    },
    {
      id: 2,
      question: "What is the speciality of Dr. Swapnil Kapote?",
      answer:
        "Dr. Swapnil Lapote is Consultant – Onco Surgeon at Jupiter Hospital, Mumbai. ",
    },
    {
      id: 3,
      question: "What are the key achievements of Dr. Swapnil Kapote?",
      answer:
        "The Key achievements include - Achieved high expertise in performing minimal invasive cancer surgeries. Performed and assisted more than 4000 complex cancer surgeries.",
    },
    {
      id: 4,
      question: "What are the charges for consultation ?",
      answer: "The charges are USD 30 $",
    },
  ];

  return (
    <>
      <Header />
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={10} md={9}>
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
                    maxWidth: "300px",
                    height: "300px",
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
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4"> {doctor?.title} </Typography>
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
                      {doctor?.Experience} {` years of experience`}
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
                        <b>{doctor?.price}</b> USD
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

          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={12}
              style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "#68F19F",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h5" color="#000000" fontWeight="bold">
                  About Doc
                </Typography>
              </Paper>

              <ul style={{ paddingLeft: "20px" }}>
                {doctor?.About_doc.map((paragraph, index) => (
                  <li key={index}>
                    <Typography variant="body1" color="#000000" padding={1}>
                      {paragraph}
                    </Typography>
                  </li>
                ))}
              </ul>

              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "#68F19F",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h5" color="#000000" fontWeight="bold">
                  Procedures
                </Typography>
              </Paper>

              <Grid container rowSpacing={1} columnSpacing={2} my={1}>
                {doctor?.Procedures.split(",").map((procedure, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      style={{
                        backgroundColor: "#D3D3D3",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardContent>
                        <Typography variant="body1" color="text.primary">
                          {procedure.trim()}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Grid
                style={{
                  marginLeft: "0px",
                  marginRight: "auto",
                  width: "100%",
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "#68F19F",
                    marginTop: "10px",
                    marginBottom: "10px",
                    marginLeft: "0px",
                  }}
                >
                  <Typography variant="h5" color="#000000">
                    FAQs
                  </Typography>
                </Paper>
                {faqData.map((faq) => (
                  <Accordion key={faq.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`faq-panel-${faq.id}-content`}
                      id={`faq-panel-${faq.id}-header`}
                    >
                      <Typography variant="h6">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={8} sm={4}>
              <div style={styles.formStyle}>{/* <EnquiryForm /> */}</div>
            </Grid>
          </Grid>
        </Grid>
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

export default DoctorPage;
