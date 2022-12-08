import express, { Request, Response } from "express";
import Wallet from "../../models/wallet";
import User from "../../models/user";
import { WalletAttributes } from "../../types/Auth/wallet";
import mongoose from "mongoose";


const router = express.Router();

router.post("/add", async (req: Request<any, any, WalletAttributes>, res: Response) => {
    try {
        console.log("req body ---", req.body, req.userId)
        const wallet = new Wallet({
           ...req.body,
           userId: req.userId
        })
        await User.findOneAndUpdate({_id: new mongoose.Types.ObjectId(req.userId)}, {walletExist: true})
        const savedWallet = await wallet.save();
        return res.status(200).json({ wallet: savedWallet})
    } catch (error) {
        return res.status(500).json("Error")
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const wallets = await Wallet.find({userId: req.userId})
        return res.status(200).json({ data: wallets})
    } catch (error) {
        return res.status(500).json("Error")
    }
});

router.delete("/:walletId", async (req: Request<{walletId: string}>, res: Response) => {
    try {
        const walletId = req.params.walletId;
        await Wallet.findByIdAndDelete(walletId)
        const walletData = await Wallet.find({userId: new mongoose.Types.ObjectId(req.userId)});
        if(!walletData.length) {
            await User.findByIdAndUpdate(req.userId, {walletExist: false})
        }
        return res.status(200).json({id: walletId, wallets: walletData})
    } catch (error) {
        return res.status(500).json("Error");
    }
})

router.put("/:walletId", async (req: Request<{walletId: string}, any, WalletAttributes>, res: Response) => {
    try {
        const walletId = req.params.walletId;
        const wallet = await Wallet.findByIdAndUpdate(walletId, {...req.body});
        return res.status(200).json({wallet: wallet});
    } catch (error) {
        return res.status(500).json("Error");
    }
})

export {router as WalletController}