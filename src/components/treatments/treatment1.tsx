import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CONST_KEYS, Treatments } from "../../config";
import doPostRequest from "../../utils/apiRequest";
// import "../components/styles/treatments.css";
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
    var tt = localStorage.getItem(CONST_KEYS.token);
    console.log(tt);
  
    const requestBody = {};
    const headers = {
      "Content-Type": "application/json",
    };
  
    doPostRequest(Treatments, requestBody, headers)
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            var loginResp = data;
            console.log(loginResp);
            if (loginResp && loginResp.status === "SUCCESS") {
              console.log("Treatment Data fetched");
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
            const dummyData: Treatment[] = [
              /* Dummy treatments data */
            ];
            setTreatments(dummyData);
            setLoading(false);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Show dummy data if an error occurs
        const dummyData: Treatment[] = [
          /* Dummy treatments data */
        ];
        setTreatments(dummyData);
        setLoading(false);
      });
  };
  
  useEffect(() => {
    fetchTreatments();
  }, []);

  return (
    <div className="treatment-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        treatments.map((treatment) => (
          <div key={treatment.id} className="treatment-row">
            <Paper elevation={3} className="treatment">
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left", marginLeft: "40px" }}
              >
                {treatment.name}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ textAlign: "left", marginLeft: "40px" }}
              >
                {treatment.desc}
              </Typography>
              <div className="asd-closure-row">
                {treatment?.subTreatments &&
                Array.isArray(treatment.subTreatments) ? (
                  treatment?.subTreatments.map((subTreatment, index) => (
                    <Paper
                      key={index}
                      elevation={3}
                      className="asd-closure-box"
                    >
                      <Typography
                        variant="body2"
                        style={{ textAlign: "center", color: "#3586f0" }}
                      >
                        {subTreatment}
                      </Typography>
                    </Paper>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </Paper>
          </div>
        ))
      )}
      <div style={{ width: "100%" }}></div>
    </div>
  );
};

export default TreatmentPage;
