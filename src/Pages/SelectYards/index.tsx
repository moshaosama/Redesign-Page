import Header from "../../Components/Header";
import SectionText from "../../Components/SectionText";
import YardsRender from "../../Components/YardsRender";

const SelectYards = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Header />
        <SectionText />
        <YardsRender />
      </div>
    </>
  );
};

export default SelectYards;
