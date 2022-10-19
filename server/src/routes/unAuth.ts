import express from "express";

import { LoginController } from '../controllers/unAuth/login';

const router = express.Router();

router.use("/login", LoginController);

export {router as UnAuthRoutes};