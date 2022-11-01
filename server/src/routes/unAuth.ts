import express from "express";

import { UserController } from '../controllers/unAuth/user';

const router = express.Router();

router.use("/user", UserController);

export {router as UnAuthRoutes};