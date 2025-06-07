import clsx from "clsx";
import { useGetTheme } from "../Context/ToggleLightContext";

const ToggleLight = (Component: any) => {
  return (props: any) => {
    const { theme } = useGetTheme();
    return (
      <div
        className={clsx(
          " w-full h-full",
          theme === "dark" ? "bg-[#121212]" : "bg-white"
        )}
      >
        <Component {...props} />
      </div>
    );
  };
};

export default ToggleLight;
