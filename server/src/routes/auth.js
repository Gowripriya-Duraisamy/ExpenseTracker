"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wallet_1 = require("../controllers/auth/wallet");
const account_1 = require("../controllers/auth/account");
const router = express_1.default.Router();
exports.AuthRoutes = router;
router.use("/wallet", wallet_1.WalletController);
router.use("/account", account_1.AccountController);
