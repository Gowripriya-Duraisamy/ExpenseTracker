import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { verifyToken } from "../utils/jwt";
import User from "../models/user";

export const authorizedMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "User is not authorised" });
  }
  const verifiedToken = verifyToken(token, {
    issuer: "Jove",
    algorithms: ["RS256"],
  }) as JwtPayload;

  if (verifiedToken["email"]) {
    const userData = await User.findOne({ email: verifiedToken["email"] });
    if(userData) {
        req.userId = userData._id.toString();
        req.email = userData.email;
    }
  }

  return next();
};
