import { createSlice } from "@reduxjs/toolkit";
import { signInAction } from "../action/authAction";

const initialState: any = {
  loading: false,
  userData: {},
  isAuthenticated: false,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signInAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload?.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload?.token);
    });
    builder.addCase(signInAction.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
