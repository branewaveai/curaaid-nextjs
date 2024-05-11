import { Typography } from "@mui/material";
import { FC, SetStateAction, useState } from "react";
import HospitalCard from "./HospitalPageCard"; // Import the HospitalCard component
// import Footer from "./footer";

const AboutHospitalsPage: FC = () => {
  const [enquireHospitalIndex, setEnquireHospitalIndex] = useState(-1);

  const hospitals = [
    {
      Id:'1',
      image: "/images/mentors/jupiter_mumbai.jpg",
      name: "Jupiter Hospital",
      location: "Mumbai, India",
      estdYear: 2007,
      specialities: 60,
      procedures: 60,
      numberOfBeds: 1100,
      doctorsCount: 1500,
      about: ["Jupiter Lifeline Hospitals Ltd is a multispecialty hospital chain with three hospitals located in Mumbai, Pune & Indore",
       "Some Key Achievements Include:- Over 800 successful Kidney Transplants and  Over 500 successful Liver Transplants",
       "One of the best Neuro Rehabilitation facilities in the region with Robotic, Device Assisted & Aqua Rehab",
       " Patient Friendly Hospital Certification at the Association of Healthcare Providers (AHPI India) awards "
      ],
    },
    {
      Id: 2,
      name: "Fortis Hospital",
      image:"/images/mentors/fortis_hosp.jpg",
      estdYear: 2006,
      location: "Bangalore, India",
      specialities: 12,
      procedures: 138,
      numberOfBeds: 276,
      doctorsCount: 32,
      about: ["A multi-speciality hospital equipped with latest technology and one of the leading healthcare delivery providers.",
        "Ranked no.3 amongst the best hospitals in the world for Medical Tourism by MTQUA",
        "Advanced technologies for IVF and renowned for successful organ transplants",
      ],
    },
    {
      Id: 3,
      name: "Apollo Hospital",
      image:"/images/mentors/apollo-delhi.jpeg",
      estdYear: 1996,
      location: "New Delhi, India",
      specialities: 52,
      procedures: 168,
      numberOfBeds: 1000,
      doctorsCount: 61,
      about:["JCI and NABL accredited, established in 1996",
       "One of the largest dialysis units in India",
       "Considered best in paediatrics, neurosciences, gynaecology, renal sciences",
      ],
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
