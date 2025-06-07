import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../Store/store";
import { useEffect, useState } from "react";
import { fetchGetYards } from "../Actions/fetchGetYards";
import type { GetDataYardsSlice } from "../Types/YardsType";

const useGetData = () => {
  const Yards = useSelector(
    (state: RootState) => state.Yards
  ) as GetDataYardsSlice;
  const [DelayData, setDalayData] = useState(false);
  const [Time, setTime] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchData = async () => {
      setTime(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setTime(false);
      dispatch(fetchGetYards());
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setDalayData(true);
  }, [DelayData]);

  return { Yards, DelayData, Time };
};

export default useGetData;
