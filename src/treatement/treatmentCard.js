import React from "react";
// import treatment1 from "../assets/images/treatment1.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/treatmentCard.css";

const TreatmentCard = ({ image, name, subTreatment }) => {
  const navigation = useNavigate();

  const listItems = subTreatment.map((subTreatment) => <li>{subTreatment}</li>);

  const handleClick = () => {
    navigation.push("/docListFromTreatments");
  };

  return (
    <div className="treatment-card" onClick={handleClick}>
      <div className="treatment-card-image">
        <img src={image} alt="treatment" className="treatment-image" />
      </div>
      <div className="treatment-card-details">
        <h3>{name}</h3>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default TreatmentCard;
