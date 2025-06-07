import { CiLight } from "react-icons/ci";
import { HeaderData } from "../Data/HeaderData";

import type { HeaderType } from "../Types/HeaderType";
import { useGetTheme } from "../Context/ToggleLightContext";
import clsx from "clsx";

const Header = () => {
  const { ToggleTheme, theme } = useGetTheme();
  return (
    <div className="flex gap-4 mt-10">
      {HeaderData.map((el: HeaderType) => {
        return (
          <div
            key={el.id}
            className={clsx(
              " flex gap-3  items-center",
              theme === "dark" ? "text-gray-300" : "text-black"
            )}
          >
            <div className="flex items-center gap-1">
              <i>{el.Icon}</i>
              <h1 className="text-md font-semibold">{el.Title}</h1>
            </div>
            <hr
              className={clsx(
                "h-[0.1px]  border-none w-[4pc]",
                theme === "dark" ? "bg-gray-300" : "bg-black"
              )}
            />
          </div>
        );
      })}
      <div className="">
        <CiLight
          color="white"
          size={40}
          cursor={"pointer"}
          onClick={ToggleTheme}
        />
      </div>
    </div>
  );
};

export default Header;
