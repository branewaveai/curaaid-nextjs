import { Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import EnquiryForm from "./EnquiryForm";

interface Hospital {
  hospitalId?: number;
  image?: string;
  name?: string;
  estdYear?: number;
  location?: string;
  about?: string;
  patientsConsulted?: number;
  procedures?: number;
  facilities?: number;
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
  const router = useRouter();

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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div>
              <img src={hospital.image} alt={hospital.name} style={{ width: "300px", height: "200px", borderRadius: "10px" }} />
            </div>
            <div style={{ float: 'right' }}>
              <Typography variant="h4">{hospital.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom style={{ fontSize: "1.2rem" }}>
                Location: {hospital.location}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom style={{ fontSize: "1.2rem" }}>
                Established Year: {hospital.estdYear}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleEnquireClick} style={{ marginTop: "10px" }}>
                Enquire
              </Button>
            </div>
          </div>
        </div>
        <hr style={{ margin: "20px 0" }} />
        {hospital.about && (
          <Collapse in={!expanded}>
            <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
              {hospital.about.substring(0, Math.min(200, hospital.about.length))}
            </Typography>
          </Collapse>
        )}
        {hospital.about && (
          <Collapse in={expanded}>
            <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
              {hospital.about}
            </Typography>
          </Collapse>
        )}
        {hospital.about && hospital.about.length > 200 && (
          <div style={{ textAlign: 'center' }}>
            <Button onClick={handleExpandClick}>
              {expanded ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
        <hr style={{ margin: "20px 0" }} />
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <Typography variant="h5">Patients Consulted: {hospital.patientsConsulted}</Typography>
          <Typography variant="h5">Procedures: {hospital.procedures}</Typography>
          <Typography variant="h5">Facilities: {hospital.facilities}</Typography>
          <Typography variant="h5">Doctors Count: {hospital.doctorsCount}</Typography>
        </div>
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
