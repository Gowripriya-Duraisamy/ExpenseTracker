"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const express_1 = __importDefault(require("express"));
const wallet_1 = __importDefault(require("../../models/wallet"));
const user_1 = __importDefault(require("../../models/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
exports.WalletController = router;
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("req body ---", req.body, req.userId);
        const wallet = new wallet_1.default(Object.assign(Object.assign({}, req.body), { userId: req.userId }));
        yield user_1.default.findOneAndUpdate({ _id: new mongoose_1.default.Types.ObjectId(req.userId) }, { walletExist: true });
        const savedWallet = yield wallet.save();
        return res.status(200).json({ wallet: savedWallet });
    }
    catch (error) {
        return res.status(500).json("Error");
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wallets = yield wallet_1.default.find({ userId: new mongoose_1.default.Types.ObjectId(req.userId) });
        return res.status(200).json({ data: wallets });
    }
    catch (error) {
        return res.status(500).json("Error");
    }
}));
router.delete("/:walletId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const walletId = req.params.walletId;
        yield wallet_1.default.findByIdAndDelete(walletId);
        const walletData = yield wallet_1.default.find({ userId: new mongoose_1.default.Types.ObjectId(req.userId) });
        if (!walletData.length) {
            yield user_1.default.findByIdAndUpdate(req.userId, { walletExist: false });
        }
        return res.status(200).json({ id: walletId, wallets: walletData });
    }
    catch (error) {
        return res.status(500).json("Error");
    }
}));
router.put("/:walletId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const walletId = req.params.walletId;
        const wallet = yield wallet_1.default.findByIdAndUpdate(walletId, Object.assign({}, req.body), { new: true });
        return res.status(200).json({ wallet: wallet });
    }
    catch (error) {
        return res.status(500).json("Error");
    }
}));
