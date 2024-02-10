"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const generateToken = (payload, signOptions) => {
    // utf-8 is used to fetch it as string content instead of bytes
    const privateKey = fs_1.default.readFileSync((0, path_1.join)(__dirname, "..", "keys", "private.key"), 'utf-8');
    return jsonwebtoken_1.default.sign(payload, privateKey, signOptions);
};
exports.generateToken = generateToken;
const verifyToken = (token, verifyOptions) => {
    const publicKey = fs_1.default.readFileSync((0, path_1.join)(__dirname, "..", "keys", "public.key"), 'utf-8');
    return jsonwebtoken_1.default.verify(token, publicKey, verifyOptions);
};
exports.verifyToken = verifyToken;
