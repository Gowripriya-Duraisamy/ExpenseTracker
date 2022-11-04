import { CredentialResponse } from "@react-oauth/google";
import { ReactNode } from "react";

export interface LoginAttributes {
  token: string;
  message: string;
}
export interface TokenUser {
  id: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: TokenUser | null;
}

export type LoginAction = {
  type: "LOGIN";
  payload: {
    user: TokenUser;
  };
};

export type Action = LoginAction;

export interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  googleSignIn: (data: CredentialResponse) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  refreshToken: () => Promise<string>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
