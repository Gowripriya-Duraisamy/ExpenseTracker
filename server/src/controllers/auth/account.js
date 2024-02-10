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
exports.AccountController = void 0;
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const user_1 = __importDefault(require("../../models/user"));
const router = express_1.default.Router();
exports.AccountController = router;
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("test reaching api", req.userId);
        yield yield user_1.default.findByIdAndUpdate({ _id: req.userId }, { expireAt: (0, moment_1.default)().add(1, "minute").toDate() }, { new: true });
        return res.status(200).json({});
    }
    catch (error) {
        return res.status(500).json("Error");
    }
}));
