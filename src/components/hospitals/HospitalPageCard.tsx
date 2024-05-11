import { Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import EnquiryForm from "./EnquiryForm";
import { LocationOnOutlined } from "@mui/icons-material";

interface Hospital {
  hospitalId?: number;
  image?: string;
  name?: string;
  estdYear?: number;
  location?: string;
  about?: any;
  specialities?: number;
  procedures?: number;
  numberOfBeds?: number;
  doctorsCount?: number;
}

interface HospitalCardProps {
  hospital: Hospital;
  index: number;
  onEnquireClick: (index: number) => void;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital, index, onEnquireClick }) => {
  const [enquireVisible, setEnquireVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const aboutItems = hospital?.about ? hospital?.about : [];

  const handleEnquireClick = () => {
    setEnquireVisible(true);
    onEnquireClick(index);
  };

  const handleClose = () => {
    setEnquireVisible(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: "20px", width: "100%", margin: "0 auto", position: "relative" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <img src={hospital.image} alt={hospital.name} style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Typography variant="h4">{hospital.name}</Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: "5px" }}>
              <LocationOnOutlined />
              <Typography variant="subtitle1" color="textSecondary" style={{ fontSize: "1.2rem" }}>
                {hospital.location}
              </Typography>
            </div>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom style={{ fontSize: "1.2rem" }}>
              Established in: {hospital.estdYear}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleEnquireClick} style={{ marginTop: "10px" }}>
              Enquire Now
            </Button>
          </Grid>
        </Grid>

        
        <hr style={{ margin: "20px 0" }} />
        {hospital?.about && (
          <Collapse in={!expanded}>
            <Typography variant="body1" style={{ fontSize: "1.0rem" }}>
              {aboutItems.slice(0, 2).map((item: string, index: number) => (
                <ul>
                  <li key={index}>{item}</li>
                </ul>
              ) )}
              {/* {hospital.about.substring(0, Math.min(200, hospital.about.length))} */}
            </Typography>
          </Collapse>
        )}
        {hospital.about && (
          <Collapse in={expanded}>
            <Typography variant="body1" style={{ fontSize: "1.0rem" }}>
              {/* {hospital.about} */}
              <ul>
              {aboutItems.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
              </ul>
              
            </Typography>
          </Collapse>
        )}
        {hospital.about && aboutItems.length > 2 && (
          <div style={{ textAlign: 'center' }}>
            <Button onClick={handleExpandClick}>
              {expanded ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
        <hr style={{ margin: "20px 0" }} />
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="h5">Specialities: {hospital.specialities}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h5">Procedures Performed: {hospital.procedures}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h5">Number Of Beds: {hospital.numberOfBeds}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h5">Doctors : {hospital.doctorsCount}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Dialog open={enquireVisible} onClose={handleClose}>
        <DialogTitle>Enquire about {hospital.name}</DialogTitle>
        <DialogContent>
          <EnquiryForm hospitalId={hospital.hospitalId} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HospitalCard;
