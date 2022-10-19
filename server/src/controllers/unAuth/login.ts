import express, {Request, Response} from "express"; 

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    console.log("check");
    res.status(200).json("Login request received");
})

export {router as LoginController};