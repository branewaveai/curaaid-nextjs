// Import necessary dependencies
import { CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import "../styles/hospiCard.css";
interface HospitalCardProps {
  hospitalId: number;
  image: string;
  name: string;
  estd: number;
  location: string;
}
const HospitalCard : FC<HospitalCardProps> = ({ hospitalId , image, name, estd, location }) => {
  const router = useRouter();

  const handleBookAppointmentClick = () => {
    console.log("I'm navigating to appointments");
    router.push(`/doctors/${hospitalId}/appointments`);
  };

  return (
    <div className="hospital-card">
      <div className="hospital-card-image">
        <img src={image} alt="Doctor" className="hospital-image" />
      </div>
      <CardContent className="hospital-card-details ">
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          ESTD :{estd}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {location}
        </Typography>
      </CardContent>
    </div>
  );
};

export default HospitalCard;
