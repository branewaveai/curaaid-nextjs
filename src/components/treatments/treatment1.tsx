import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CONST_KEYS, Treatments } from "../../config";
import doPostRequest from "../../utils/apiRequest";
import Banner from './treatmentBanner';
interface Treatment {
  id: string | number;
  name: string;
  desc: string;
  subTreatments?: string[];
}

const IntialTreatment = [
  {
    id: 1,
    name: "Oncology",
    desc: "Oncology is a branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.",
    subTreatments: ["Chemotherapy", "Radiation Therapy", "Immunotherapy"],
  },
  {
    id: 2,
    name: "Cardiology",
    desc: "Cardiology is the study and treatment of disorders of the heart and the blood vessels.",
    subTreatments: [
      "Coronary Angioplasty",
      "Cardiac Rehabilitation",
      "Electrophysiology Studies",
    ],
  },
  {
    id: 3,
    name: "Plastic Surgery",
    desc: "Plastic surgery is a surgical specialty involving the restoration, reconstruction, or alteration of the human body.",
    subTreatments: ["Breast Augmentation", "Rhinoplasty", "Liposuction"],
  },
  {
    id: 4,
    name: "Orthopedic",
    desc: "Orthopedic surgery is the branch of surgery concerned with conditions involving the musculoskeletal system.",
    subTreatments: [
      "Joint Replacement",
      "Fracture Repair",
      "Arthroscopic Surgery",
    ],
  },
  {
    id: 5,
    name: "Neurology",
    desc: "Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system.",
    subTreatments: [
      "Stroke Treatment",
      "Epilepsy Management",
      "Parkinson's Disease Treatment",
    ],
  },
];

const TreatmentPage = () => {
  const [treatments, setTreatments] = useState<Treatment[]>(IntialTreatment);
  const [loading, setLoading] = useState(false);
  const [enquireVisible, setEnquireVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  const fetchTreatments = () => {
    const tt = localStorage.getItem(CONST_KEYS.token);

    const requestBody = {};
    const headers = {
      "Content-Type": "application/json",
    };

    doPostRequest(Treatments, requestBody, headers)
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            const loginResp = data;
            if (loginResp && loginResp.status === "SUCCESS") {
              setTreatments(loginResp.data || []);
              setLoading(false);
            } else {
              // Handle other success statuses if needed
            }
          });
        } else {
          response.json().then((data) => {
            console.error(
              "Submission failed with status:",
              response.status,
              "and message:",
              data.message
            );
            const dummyData: Treatment[] = [];
            setTreatments(dummyData);
            setLoading(false);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        const dummyData: Treatment[] = [];
        setTreatments(dummyData);
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   fetchTreatments();
  // }, []);

  return (
    <>
    <Banner/>

    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="body1" style={{ fontSize: "1.40rem" }}> Medical
        <span style={{ color: "#127C71" }}> Treatment</span>
      </Typography>
      {loading ? (
        <div>Loading...</div>
      ) : (
        treatments.map((treatment) => (
          <Paper key={treatment.id} elevation={3} sx={{ my: 2 }}>
            <Grid container>
              <Grid item xs={12} sm={3} sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                <Image
                  src={`/images/treatments/${treatment.id}.jpg`}
                  alt={treatment.name}
                  width={200}
                  height={200}
                  color="#127C71" />
              </Grid>
              <Grid item xs={12} sm={9} sx={{ p: 2 }}>
                <Paper elevation={0} sx={{ p: 2, height: "100%" }}>
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                    {treatment.name}
                  </Typography>
                  {/* <Typography variant="body1" paragraph>
                  {treatment.desc}
                </Typography> */}
                  <Grid container spacing={2}>
                    {treatment?.subTreatments &&
                      Array.isArray(treatment.subTreatments) ? (
                      treatment.subTreatments.map((subTreatment, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <Paper
                            elevation={3}
                            sx={{
                              p: 0,
                              m: 0,
                              textAlign: "left",
                              color: "#3586f0",
                            }}
                          >
                            <Typography
                              variant="body1"
                              style={{ fontSize: "1.0rem" }}
                            >
                              {subTreatment}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        ))
      )}
    </Container>
    
    </>
  );
};

export default TreatmentPage;
