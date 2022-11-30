import { CredentialResponse } from "@react-oauth/google";
import { ReactNode } from "react";

export interface User {
  email: string;
  id: string;
  password: string;
  walletExist: string;
}

export interface LoginAttributes {
  token: string;
  idToken: string;
  message?: string;
}

export interface TokenUser {
  id: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export type LoginAction = {
  type: "LOGIN";
  payload: {
    user: User;
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
