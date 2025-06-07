import useGetData from "../Hooks/useGetData";
import clsx from "clsx";
import { useSelectData } from "../Hooks/useSelectData";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const YardsRender = () => {
  const { Yards } = useGetData();
  const { OnSubmit, selectedIndex } = useSelectData();
  return (
    <>
      <div className="mt-10 flex flex-col gap-10 text-white">
        {Array.isArray(Yards?.yards) ? (
          Yards?.yards?.map((yard) => (
            <div
              id="CardData"
              onClick={() => OnSubmit(yard.id)}
              className={clsx(
                "  shadow-lg flex justify-between items-center shadow-gray-700 w-[75pc] rounded-lg cursor-pointer hover:scale-105 transition-all duration-700 ease-in-out",
                selectedIndex === yard.id
                  ? "border-[#0037c1] border-2"
                  : "border-1 border-gray-400"
              )}
            >
              <div className="flex items-center">
                <img
                  src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
                  alt="Yard.png"
                  className="w-60 rounded-l-lg"
                />
                <div className="ml-10">
                  <h1 className="font-bold text-2xl ">{yard.size} Yard Size</h1>
                  <p>{yard.hire_period_days} day hire period</p>
                  <p className="text-[#0037c1] mt-10 text-4xl font-bold">
                    £ {yard.price_before_vat}
                  </p>
                </div>
              </div>
              <div className="mr-10">
                <button className="bg-white text-xl flex items-center justify-center gap-2 w-32 py-2 rounded-xl text-black font-bold cursor-pointer">
                  {selectedIndex === yard.id ? (
                    <FaCheckCircle size={15} className="mt-1 text-green-600" />
                  ) : (
                    <FaRegCircle size={15} className="mt-1" />
                  )}
                  Select
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500">
            No yards data available or data is not an array.
          </p>
        )}
      </div>
    </>
  );
};

export default YardsRender;
