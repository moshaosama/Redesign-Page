import clsx from "clsx";
import { useGetTheme } from "../Context/ToggleLightContext";

const SectionText = () => {
  const { theme } = useGetTheme();
  return (
    <div
      className={clsx(
        "text-center mt-10 ",
        theme === "dark" ? "text-white" : " text-black"
      )}
    >
      <h1 className="text-3xl font-bold">Choose Your Skip Size </h1>
      <p className="text-xl mt-5">
        Select the skip size that best suits your needs
      </p>
    </div>
  );
};

export default SectionText;
