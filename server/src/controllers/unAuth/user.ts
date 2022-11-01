import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { OAuth2Client } from "google-auth-library";

import { RegisterAttributes } from "../../types/unAuth/user";
import User from "../../models/user";
import { generateToken } from "../../utils/jwt";
import { development } from "../../config";

const router = express.Router();
const client = new OAuth2Client(process.env.CLIENT_ID);
const { clientId } = development;

router.post(
  "/login",
  async (req: Request<any, any, RegisterAttributes>, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const hashedPassword = user.password;
        const compare = bcrypt.compareSync(password, hashedPassword);
        const token = generateToken(
          {
            email: email,
          },
          {
            algorithm: "RS256",
            expiresIn: "12h",
            issuer: "Jove",
          }
        );
        return (compare && user.password)
          ? res.status(200).json({ token: token })
          : res.status(500).json({ error: "Password doesnt match" });
      }
      return res.status(500).json({ error: "User doesnt exist." });
    } catch (error) {
      return res.status(500).json({ error: "An error Occured in Login" });
    }
  }
);

router.post(
  "/register",
  async (req: Request<any, any, RegisterAttributes>, res: Response) => {
    try {
      const { email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      const token = generateToken(
        {
          email: email,
        },
        {
          algorithm: "RS256",
          expiresIn: "12h",
          issuer: "Jove",
        }
      );
      res.status(200).json({ token: token });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);

router.post("/googleSignIn", async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: clientId,
    });
    const payload = ticket.getPayload();
    if (payload?.email) {
      await User.findOneAndUpdate(
        {
          emailId: payload.email,
        },
        {
          email: payload.email,
          password: ""
        },
        {
          upsert: true,
          new: true,
        }
      ).exec();

       const token = generateToken({
        name: payload?.given_name,
        email: payload?.email
      }, {
        algorithm: "RS256",
        expiresIn: "12h",
        issuer: "Jove"
      })
      return res.status(200).json({token, message: "Logged In"})
    } 
    return res.status(500).json({message: "Email signin failed"})
  } catch (error) {
    res.status(500).json({ error });
  }
});

export { router as UserController };
