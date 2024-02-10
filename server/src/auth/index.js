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
exports.authorizedMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const user_1 = __importDefault(require("../models/user"));
const authorizedMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "User is not authorised" });
    }
    const verifiedToken = (0, jwt_1.verifyToken)(token, {
        issuer: "Jove",
        algorithms: ["RS256"],
    });
    if (verifiedToken["email"]) {
        const userData = yield user_1.default.findOne({ email: verifiedToken["email"] });
        if (userData) {
            req.userId = userData._id.toString();
            req.email = userData.email;
        }
    }
    return next();
});
exports.authorizedMiddleware = authorizedMiddleware;
