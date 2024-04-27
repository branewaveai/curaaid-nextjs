import { FC, SetStateAction, useCallback, useEffect, useState } from "react";
import "../styles/hospiCard.css";
import HospitalCard from "./hospitalCard";

interface Props{
   doctorsToShowPerPage : number
}
interface HospitalCardProps {
  hospitalId: number;
  image: string;
  name: string;
  estd: number;
  location: string;
}
const HospitalList: FC<Props> = ({ doctorsToShowPerPage }) => {
  
  const hospitals = [
    {
      hospitalId: 1,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:"https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Noida",
    },
    {
      hospitalId: 2,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 3,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 4,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 5,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 6,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 7,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 8,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 9,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 10,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 11,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    },
    {
      hospitalId: 12,
      name: "Fortis Hospital ,Noida",
      phoneNumber: "123-456-7890",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/fortis-noida-building-1.jpg",
      estd: 1991,
      location: "Bangalore",
    }
  ];
  const itemsPerPage = doctorsToShowPerPage || 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  const [currentHospitals, setCurrentHospitals] =  useState<HospitalCardProps[]>([]);
  const [columns, setColumns] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const calculateColumns = useCallback(() => {
    if (windowWidth >= 1200) {
      return 4;
    } else if (windowWidth >= 768 && windowWidth < 1200) {
      return 2;
    } else {
      return 1;
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newColumns = calculateColumns();
    setColumns(newColumns);

    const newTotalPages = Math.ceil(hospitals.length / itemsPerPage);
    setTotalPages(newTotalPages);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const hospitalsToDisplay = hospitals.slice(indexOfFirstItem, indexOfLastItem);
    console.log(indexOfFirstItem + " " + indexOfLastItem);
    setCurrentHospitals(hospitalsToDisplay);
  }, [currentPage, itemsPerPage, calculateColumns]);

  const handlePageChange = (newPage: SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="hospital-list">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
          margin:'auto auto'
          // justifyContent: "center",
        }}
      >
        {currentHospitals.map((hospital) => (
          <HospitalCard key={hospital.hospitalId} {...hospital} />
        ))}
      </div>
     
    </div>
  );
};

export default HospitalList;

