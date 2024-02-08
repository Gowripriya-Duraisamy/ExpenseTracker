import express, { Request, Response } from "express";
import moment from "moment";
import User from "../../models/user";
import Delete from "../../models/delete";


const router = express.Router();

router.delete("/", async (req: Request<{userId: string}>, res: Response) => {
    try {
        console.log("test reaching api", req.userId);
        await 
        
        await User.findByIdAndUpdate({_id: req.userId}, {expireAt: moment().add(1, "minute").toDate()}, {new: true});
        
        return res.status(200).json({});
    } catch (error) {
        return res.status(500).json("Error");
    }
})

export {router as AccountController}