import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../Store/store";
import { useEffect } from "react";
import { fetchGetYards } from "../Actions/fetchGetYards";
import type { GetDataYardsSlice } from "../Types/YardsType";

const useGetData = () => {
  const Yards = useSelector(
    (state: RootState) => state.Yards
  ) as GetDataYardsSlice;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetYards());
  }, [dispatch]);

  return { Yards };
};

export default useGetData;
