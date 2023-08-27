import "./CampTitle.css";
import Accordion from "./Accordion";

const CampTitle = () => {
  return (
    <div>
      <Accordion title={'Competências'}content={'Conteúdo'}/>
      <Accordion title={'Experiência'}content={'Conteúdo'}/>
    </div>
  );
};

export default CampTitle;
