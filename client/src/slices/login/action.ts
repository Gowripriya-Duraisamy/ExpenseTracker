import axios from "axios";

import { AppThunk } from "../../store";

export const signIn = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/login/");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
