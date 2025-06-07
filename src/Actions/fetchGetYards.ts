import { createAsyncThunk } from "@reduxjs/toolkit";
import { yardService } from "../Api/Yards/YardService";

interface YardData {
  [key: string]: any;
}

export const fetchGetYards = createAsyncThunk<
  YardData,
  void,
  { rejectValue: string }
>("Yards/fetchGetYards", (_, thunkApi) => {
  return yardService.getYards(_, thunkApi);
});
