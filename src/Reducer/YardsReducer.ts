import { createSlice } from "@reduxjs/toolkit";
import { fetchGetYards } from "../Actions/fetchGetYards";

interface YardsState {
  yards: Record<string, any>; // or specify your exact type here
  loading: boolean;
  error: string | null;
}

const initialState: YardsState = {
  yards: {},
  loading: false,
  error: null,
};

const yardsSlice = createSlice({
  name: "yards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetYards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetYards.fulfilled, (state, action) => {
        state.loading = false;
        state.yards = action.payload;
      })
      .addCase(fetchGetYards.rejected, (state, action) => {
        state.loading = false;

        state.error = (action.payload as string) || "Failed to fetch yards";
      });
  },
});

export default yardsSlice.reducer;
