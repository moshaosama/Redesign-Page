import DetailsYard from "../../Components/DetailsYard";
import Header from "../../Components/Header";
import SectionText from "../../Components/SectionText";
import YardsRender from "../../Components/YardsRender";

const SelectYards = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <Header />
        <SectionText />
        <YardsRender />
        <DetailsYard />
      </div>
    </>
  );
};

export default SelectYards;
