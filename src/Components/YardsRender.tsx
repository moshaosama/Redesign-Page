import useGetData from "../Hooks/useGetData";
import clsx from "clsx";
import { useSelectData } from "../Hooks/useSelectData";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useGetTheme } from "../Context/ToggleLightContext";

const YardsRender = () => {
  const { Yards, DelayData } = useGetData();
  const { theme } = useGetTheme();
  const { OnSubmit, selectedIndex } = useSelectData();
  return (
    <>
      <div
        className={clsx(
          "mt-10 mb-28 max-sm:mb-56 flex flex-col gap-10 transition-all duration-1000 ",
          theme === "dark" ? "text-white" : "text-black",
          DelayData ? "ml-0 opacity-100" : "ml-96 opacity-0"
        )}
      >
        {Array.isArray(Yards?.yards) ? (
          Yards?.yards?.map((yard) => (
            <div
              key={yard.id}
              id="CardData"
              onClick={() => OnSubmit(yard.id)}
              className={clsx(
                "shadow-lg flex max-sm:flex-col justify-between items-center shadow-gray-700 w-[75pc] max-xl:w-[55pc] max-sm:w-[22pc] max-lg:w-[45pc] rounded-lg cursor-pointer hover:scale-105 transition-all duration-700 ease-in-out",
                selectedIndex === yard.id
                  ? "border-[#0037c1] border-4"
                  : "border-1 border-gray-400"
              )}
            >
              <div className="flex items-center max-sm:flex-col">
                <img
                  src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
                  alt="Yard.png"
                  className="w-60 rounded-l-lg max-sm:w-full max-sm:rounded-lg"
                />
                <div className="max-sm:flex max-sm:mt-5 max-sm:justify-between max-sm:items-center max-sm:gap-10">
                  <div className="ml-10 max-sm:ml-0">
                    <h1 className="font-bold text-2xl max-sm:text-xl">
                      {yard.size} Yard Size
                    </h1>
                    <p className="max-sm:text-[13px]">
                      {yard.hire_period_days} day hire period
                    </p>
                    <p className="text-[#0037c1] mt-10 text-4xl max-sm:text-2xl max-sm:mt-0 font-bold">
                      £ {yard.price_before_vat}
                    </p>
                  </div>
                  <div className="mr-10 max-sm:mr-0 sm:hidden">
                    <button
                      className={clsx(
                        " text-xl flex  items-center justify-center gap-2 w-32 py-2 rounded-xl  font-bold cursor-pointer",
                        theme === "dark"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      )}
                    >
                      {selectedIndex === yard.id ? (
                        <FaCheckCircle
                          size={15}
                          className="mt-1 text-green-600"
                        />
                      ) : (
                        <FaRegCircle size={15} className="mt-1" />
                      )}
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="mr-10 max-sm:hidden">
                <button
                  className={clsx(
                    " text-xl flex  items-center justify-center gap-2 w-32 py-2 rounded-xl  font-bold cursor-pointer",
                    theme === "dark"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  )}
                >
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
