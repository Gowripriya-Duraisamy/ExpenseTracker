import axios from "axios";
import { CredentialResponse } from "@react-oauth/google";

import { AppThunk } from "../../store";

export const login =
  (email: string, password: string): AppThunk =>
  async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login/",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

export const register =
  (email: string, password: string): AppThunk =>
  async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("Register error", error);
    }
  };

export const googleSignIn = (data: CredentialResponse): AppThunk => async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/googleSignIn",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log("Sign in with google error", error);
  }
};
