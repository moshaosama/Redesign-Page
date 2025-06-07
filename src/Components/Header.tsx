import { HeaderData } from "../Data/HeaderData";

import type { HeaderType } from "../Types/HeaderType";

const Header = () => {
  return (
    <div className="flex gap-4 mt-10">
      {HeaderData.map((el: HeaderType) => {
        return (
          <div key={el.id} className="text-gray-300 flex gap-3  items-center">
            <div className="flex items-center gap-1">
              <i>{el.Icon}</i>
              <h1 className="text-md font-semibold">{el.Title}</h1>
            </div>
            <hr className="h-[0.1px] bg-gray-300 border-none w-[4pc]" />
          </div>
        );
      })}
    </div>
  );
};

export default Header;
