import { Container, Grid, Paper, SvgIcon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CONST_KEYS, Treatments } from "../../config";
import doPostRequest from "../../utils/apiRequest";

interface Treatment {
  id: string | number;
  name: string;
  desc: string;
  subTreatments?: string[];
}

const TreatmentPage = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchTreatments();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        treatments.map((treatment) => (
          <Paper key={treatment.id} elevation={3} sx={{ my: 2 }}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                {/* SVG of treatment goes here */}
                <SvgIcon fontSize="large">
                  {/* SVG code for treatment */}
                </SvgIcon>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ p: 2 }}>
                <Paper elevation={0} sx={{ p: 2, height: "100%" }}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    {treatment.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {treatment.desc}
                  </Typography>
                  <Grid container spacing={2}>
                    {treatment?.subTreatments &&
                    Array.isArray(treatment.subTreatments) ? (
                      treatment.subTreatments.map((subTreatment, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <Paper
                            elevation={3}
                            sx={{ p: 0, m: 0, textAlign: "left", color: "#3586f0" }}
                          >
                            <Typography variant="body2">{subTreatment}</Typography>
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
  );
};

export default TreatmentPage;
