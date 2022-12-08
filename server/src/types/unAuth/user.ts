import jwt from "jsonwebtoken";

export interface RegisterAttributes {
  email: string;
  password: string;
}

export const tokenPayload: jwt.SignOptions = {
  algorithm: "RS256",
  expiresIn: "12h",
  issuer: "Jove",
};
