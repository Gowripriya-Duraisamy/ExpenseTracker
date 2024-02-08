import axios from "../utils/axios";

export interface Account {
    reason: string;
    reasonData: string;
}

export const deleteAccount = async (data: Account) => {
  try {
      await axios.delete(
          `/auth/api/account/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  } catch (error) {
      console.log("error", error)
  }
}


