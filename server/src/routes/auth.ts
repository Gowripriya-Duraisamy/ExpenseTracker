import express from "express";

import { WalletController } from '../controllers/auth/wallet';
import { AccountController } from "../controllers/auth/account";

const router = express.Router();

router.use("/wallet", WalletController);
router.use("/account", AccountController)

export {router as AuthRoutes};
