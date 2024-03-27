import { Typography } from "@mui/material";
import { FC, SetStateAction, useState } from "react";
import HospitalCard from "./HospitalPageCard"; // Import the HospitalCard component
// import Footer from "./footer";

const AboutHospitalsPage: FC = () => {
  const [enquireHospitalIndex, setEnquireHospitalIndex] = useState(-1);

  const hospitals = [
    {
      Id:'1',
      image: "https://nimhans.co.in/wp-content/uploads/2019/10/full-view-of-Admin-building01.jpg",
      name: "Nimhans Hospital",
      location: "Bangalore",
      estdYear: 1990,
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      Id: 2,
      name: "Fortis Hospital ,Noida",
      image:"https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estdYear: 1991,
      location: "Noida",
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      Id: 3,
      name: "Fortis Hospital ,Noida",
      image:"https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estdYear: 1991,
      location: "Noida",
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];

  const handleEnquireClick = (index: SetStateAction<number>) => {
    setEnquireHospitalIndex(index);
  };

  return (
    <>
    <div style={{ margin:'150px auto', maxWidth: "1000px"}}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        About Hospitals
      </Typography>
      {hospitals.map((hospital, index) => (
        <div style={{marginBottom:'20px'}}>
        <HospitalCard key={index} hospital={hospital} index={index} onEnquireClick={handleEnquireClick} />
        </div>
      ))}
    </div>
    </>
  );
};

export default AboutHospitalsPage;
