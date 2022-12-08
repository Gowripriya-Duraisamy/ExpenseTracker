import express from "express";

import { WalletController } from '../controllers/auth/wallet';

const router = express.Router();

router.use("/wallet", WalletController);

export {router as AuthRoutes};
