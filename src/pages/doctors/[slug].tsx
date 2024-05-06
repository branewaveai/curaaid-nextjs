import { Footer } from "@/components/footer";
import Header from "@/components/header/headerstmp";
import { data } from "@/components/home/popular-course.data";
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
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import EnquiryForm from "../../components/hospitals/EnquiryForm";
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
  const doctor = data.find((doctor) => doctor.id === parseInt(id as string));
  const handleEnquireClick = () => {
    setEnquireVisible(true);
  };

  const handleClose = () => {
    setEnquireVisible(false);
  };

  const cardData = [
    { id: 1, title: "Card 1", content: "Atrial Septal Defect (ASD) Repair" },
    { id: 2, title: "Card 2", content: "Bentall Procedure" },
    {
      id: 3,
      title: "Card 3",
      content: "Coronary Artery Bypass Grafting (CABG)",
    },
    {
      id: 4,
      title: "Card 4",
      content: "Cardiac Valve Replacement",
    },
  ];
  console.log(slug, id);

  const faqData = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "How does it work?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "Can I customize the settings?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      question: "Is it free?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <Header />
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={10} md={9}>
          <Paper
            elevation={3}
            style={{
              maxWidth: "100%",
              margin: "auto",
              marginTop: 50,
            }}
          >
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                sm={3}
                sx={{ alignItems: "center", display: "flex" }}
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
              <Grid item xs={12} sm={6} sx={{ alignItems: "center" }}>
                <Typography variant="h4"> {doctor?.title} </Typography>
                <Typography variant="h6" color="textSecondary" paragraph my={1}>
                  {doctor?.speciality}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <LocalHospitalIcon color="primary" />
                  {doctor?.hospital}
                </Typography>

                <Typography variant="body1" color="textSecondary">
                  <ExperienceIcon color="primary" />
                  {`4 years of experience`}
                </Typography>

                <Typography variant="body1" color="black">
                  <MonetizationOnOutlinedIcon color="primary" />
                  <b> {doctor?.price} </b> for Video consultation
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleEnquireClick}
                  style={{ marginTop: "10px" }}
                >
                  Book appointments
                </Button>
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
              <div style={styles.textContainerStyle}>
                <Typography variant="subtitle1">
                  A practising HPB & Liver transplant Surgeon in Bangalore, I
                  have pursued my M.B.B.S from Sri Devaraj Urs Medical College,
                  Kolar, and Masters in Surgery from Bangalore Medical College
                  and Research Institute, Bangalore. Following which I completed
                  my Post Doctoral Clinical Fellowship in HPB Surgery and Liver
                  Transplant from H.C.G Oncology hospitals, Bangalore. I have
                  additional training and fellowships in Robotic Surgery,
                  Laparoscopic and endoscopic surgery as well from AIIMS, New
                  Delhi, D.Y Patil Medical College, Mumbai and CEMAST, Mumbai. I
                  have always been very keen in developing innovative solutions
                  to the academic hurdles faced by medical and other health
                  students, the beginning of which occurred as an academy for
                  medical students to improve and hone their approach towards
                  practical and applied medical practice. This gave birth to the
                  very valued and unique Docfort Meducation in 2017 and
                  performing well so far, the academy boasts three new courses
                  in the medical domain including a Fellowship in Medico-social
                  Journalism (F.M.S.J), Clinical Research Enhanced Supplemental
                  Training (CREST) and a Fellowship in Ambulatory Medicine
                  (F.D.C.P). In addition to this, Docfort has successfully
                  certified over 3000 students in various workshops involving
                  hands on training programs, research modules, screening camps,
                  discussion forums and paper presentations. Originally from a
                  very modest economical background, it was extremely difficult
                  for me to begin this venture, given its technical and allied
                  needs. But with the help of a persistent vision, a strong
                  family support and an amazing peer circle, I have successfully
                  been able to carry on with the desired operations and more in
                  the last 4 years. I believe in hyper-personalising academics
                  for interested medics, thereby enabling them to bring out the
                  best of academic acumen.
                </Typography>
              </div>
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
                {cardData.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                      variant="contained"
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <CardContent>
                        <Typography variant="subtitle1" color="text.primary">
                          {card.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Grid
                style={{
                  // marginTop: "50px",
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
                    backgroundColor: "#2196F3",
                    marginTop: "10px",
                    marginLeft: "0px",
                  }}
                >
                  <Typography variant="h5" color="white">
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
        <DialogTitle>Book Appointment with {slug}</DialogTitle>
        <DialogContent>
          <EnquiryForm hospitalId={"1"} onClose={handleClose} />
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
