import dotenv from "dotenv";
dotenv.config();

export const development = {
    username: process.env.MONGO_USERNAME || '',
    host: process.env.MONGO_HOST || '',
    password: process.env.MONGO_PASSWORD || '',
    db: process.env.MONGO_DB || '',
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret:process.env.GOOGLE_CLIENT_SECRET || '',
    accessToken:process.env.GOOGLE_ACCESS_TOKEN || '',
    refreshToken:process.env.GOOGLE_REFRESH_TOKEN || '',
    email: process.env.EMAIL || '',
    emailPassword: process.env.password || ''
}