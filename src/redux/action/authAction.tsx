import { signInApi, signUpApi } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInAction = createAsyncThunk(
  "signin/postSignIn",
  async (data: any) => {
    try {
      const response = await signInApi(data);
      return response;
    } catch (error: any) {
      return {
        status: false,
        message: error.response.data.message,
      } as any;
    }
  }
);

export const signUpAction = createAsyncThunk(
  "signup/postSignUp",
  async (data: any) => {
    try {
      const response = await signUpApi(data);
      return response;
    } catch (error: any) {
      return {
        status: false,
        message: error.response.data.message,
      } as any;
    }
  }
);
