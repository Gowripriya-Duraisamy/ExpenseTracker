"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.development = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.development = {
    username: process.env.MONGO_USERNAME || '',
    host: process.env.MONGO_HOST || '',
    password: process.env.MONGO_PASSWORD || '',
    db: process.env.MONGO_DB || '',
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    accessToken: process.env.GOOGLE_ACCESS_TOKEN || '',
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
    email: process.env.EMAIL || '',
    emailPassword: process.env.password || ''
};
