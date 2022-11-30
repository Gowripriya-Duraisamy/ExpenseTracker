import { CredentialResponse } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { createContext, FC, useCallback, useEffect, useReducer } from "react";
import axios from "../utils/axios";
import {
  AuthState,
  LoginAttributes,
  AuthContextValue,
  Action,
  AuthProviderProps,
  User,
} from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  googleSignIn: () => Promise.resolve(),
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  refreshToken: () => Promise.resolve(""),
});

export let globalContext: AuthContextValue;

const reducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "LOGIN": {
      const { user } = action.payload;
      return {
        user,
        isAuthenticated: true,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const isValidToken = (accessToken: string): boolean => {
  if (!accessToken) {
    return false;
  }

  const decoded: any = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchUser = (data: LoginAttributes) => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("idToken", data.idToken);
      const user = jwtDecode<User>(data.idToken);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
    } else {
      localStorage.clear();
      delete axios.defaults.headers.common.Authorization;
    }
  };

  const loginHandler = async (email: string, password: string) => {
    try {
      const response = await axios.post<LoginAttributes>(
        "api/user/login/",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatchUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const registerHandler = async (email: string, password: string) => {
    try {
      const response = await axios.post<LoginAttributes>(
        "api/user/register",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatchUser(response.data);
    } catch (error) {
      console.log("Register error", error);
    }
  };

  const refreshTokenHandler = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "api/user/refreshToken",
        { token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.token;
    } catch (error) {
      console.log("Sign in with google error", error);
    }
  };

  const googleSignInHandler = async (data: CredentialResponse) => {
    try {
      const response = await axios.post<LoginAttributes>(
        "api/user/googleSignIn",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatchUser(response.data);
    } catch (error) {
      console.log("Sign in with google error", error);
    }
  };

  const autoInitialise = useCallback(() => {
    try {
      const accessToken = localStorage.getItem("token");
      const idToken = localStorage.getItem("idToken");
      if (accessToken && idToken && isValidToken(accessToken)) {
        dispatchUser({
          token: accessToken,
          idToken,
        });
      }
    } catch (error) {
      console.log("Auto Initialize Error", error);
    }
  }, []);

  useEffect(() => {
    autoInitialise();
  }, [autoInitialise]);

  const contextValue = {
    ...state,
    login: loginHandler,
    register: registerHandler,
    refreshToken: refreshTokenHandler,
    googleSignIn: googleSignInHandler,
  };

  globalContext = contextValue;

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
