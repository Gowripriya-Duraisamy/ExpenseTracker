import dotenv from "dotenv";
dotenv.config();

export const development = {
    username: process.env.MONGO_USERNAME || '',
    host: process.env.MONGO_HOST || '',
    password: process.env.MONGO_PASSWORD || '',
    db: process.env.MONGO_DB || ''
}