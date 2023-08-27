import { useState } from "react";
import "./CampTitle.css";

const Accordion = ({title, content}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" style={{ backgroundColor: isExpanded ? "orange" : "#eee" }} onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
