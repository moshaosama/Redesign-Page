import { useLocation } from "react-router";
import useGetData from "../Hooks/useGetData";
import { useEffect, useState } from "react";
import type { YardsType } from "../Types/YardsType";

const DetailsYard = () => {
  const { pathname } = useLocation();
  const { Yards } = useGetData();
  const [data, setData] = useState<YardsType[] | null>(null);

  useEffect(() => {
    const yardId = Number(pathname.slice(1));
    const filtered = Array.isArray(Yards?.yards)
      ? Yards.yards.filter((yard) => yard.id === yardId)
      : null;
    setData(filtered);
  }, [pathname, Yards]);

  return (
    <>
      <div className="fixed bottom-0 h-24 max-sm:h-48 max-lg:h-28 max-xl:h-28 bg-[#1d1d1d] shadow-2xl shadow-white w-full">
        <div className="mt-3">
          <p className="text-center text-sm max-sm:mx-4 text-gray-200">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>
        </div>
        <div className="flex justify-between max-sm:mx-4 max-sm:flex-col mx-80 max-lg:mx-5 max-xl:mx-5 mt-3">
          <div className="flex max-sm:justify-between items-center text-gray-200 gap-5">
            <p className="text-lg">{data?.[0]?.size} Yard Skip</p>
            <div className="flex gap-5">
              <p className="text-2xl mb-1 font-bold text-[#0037c1]">
                £ {data?.[0]?.price_before_vat}
              </p>
              <p className="text-lg">{data?.[0]?.hire_period_days} day hire</p>
            </div>
          </div>
          <div className="flex max-sm:justify-between gap-5 font-bold">
            <button className="bg-[#3f3f3f] w-20 max-sm:w-1/2 max-sm:py-2 hover:bg-[#242424] cursor-pointer rounded-xl shadow-2xl transition-all duration-500">
              Cancel
            </button>
            <button className="bg-[#0037c1] text-white max-sm:w-1/2 max-sm:py-2  w-20 hover:bg-[#779eff] cursor-pointer transition-all duration-500 rounded-xl shadow-2xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsYard;
