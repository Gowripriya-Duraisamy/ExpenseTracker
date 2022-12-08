import jwt from "jsonwebtoken";
import fs from "fs";
import { join } from "path";

interface TokenPayload {
    email: string,
    name?: string
}

export const generateToken = (payload: TokenPayload | object, signOptions: jwt.SignOptions) => {
    // utf-8 is used to fetch it as string content instead of bytes
    const privateKey = fs.readFileSync(join(__dirname, "..", "keys", "private.key"), 'utf-8');
    return jwt.sign(payload, privateKey, signOptions)
}

export const verifyToken = (token: string, verifyOptions: jwt.VerifyOptions) => {
    const publicKey = fs.readFileSync(join(__dirname, "..", "keys", "public.key"), 'utf-8');
    return jwt.verify(token, publicKey, verifyOptions)
}