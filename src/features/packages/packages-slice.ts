import {
  ActionReducerMapBuilder,
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { fetchPackages } from "./packagesAPI";

interface PackagesState {
  loading: boolean;
  error: SerializedError | null;
  data: string[];
}

const initialState: PackagesState = {
  loading: false,
  error: null,
  data: [],
};

export const fetchPackagesAsync = createAsyncThunk(
  "packages/search",
  async (term: string) => {
    const packages = await fetchPackages(term);
    console.log("packages: ", packages);
    return packages;
  }
);

export const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {},
  // 1. Because async thunk is defined outside of createSlice, there needs to be a way to respond to other Action Types that aren't part of this slice.
  // 2. extraReducers has a Builder Callback API which will listen for dispatched Actions of an Action Type created by the Action Creators defined in each addCase call.
  // 3. For example, fetchPackagesAsync.pending is an Action Creator that is associated with the async pending action type dispatched from the AsyncThunk called fetchPackagesAsync
  extraReducers: (builder: ActionReducerMapBuilder<PackagesState>) => {
    builder
      .addCase(fetchPackagesAsync.pending, (state) => {
        console.log("...inside build case - pending");
        state.loading = true;
        state.error = null;
        state.data = [];
      })
      .addCase(fetchPackagesAsync.fulfilled, (state, action) => {
        console.log("...inside build case - fulfilled", action);
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPackagesAsync.rejected, (state, action) => {
        console.log("...inside build case - rejected: ", action);
        state.error = action.error;
        state.loading = false;
        state.data = [];
      });
  },
});

export default packagesSlice.reducer;
