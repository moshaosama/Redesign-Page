import { configureStore } from "@reduxjs/toolkit";
import YardsReducer from "../Reducer/YardsReducer.ts";

export const store = configureStore({
  reducer: {
    Yards: YardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
