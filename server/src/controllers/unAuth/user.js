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
exports.UserController = void 0;
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const google_auth_library_1 = require("google-auth-library");
const path_1 = require("path");
const fs_1 = require("fs");
const user_1 = require("../../types/unAuth/user");
const user_2 = __importDefault(require("../../models/user"));
const jwt_1 = require("../../utils/jwt");
const config_1 = require("../../config");
const mail_1 = __importDefault(require("../../utils/mail"));
const router = express_1.default.Router();
exports.UserController = router;
const client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID);
const { clientId } = config_1.development;
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_2.default.findOne({ email });
        if (user) {
            const hashedPassword = user.password;
            const compare = bcryptjs_1.default.compareSync(password, hashedPassword);
            const token = (0, jwt_1.generateToken)({
                email: email,
            }, user_1.tokenPayload);
            const idToken = (0, jwt_1.generateToken)(user.toJSON(), user_1.tokenPayload);
            return compare && user.password
                ? res.status(200).json({ token: token, idToken })
                : res.status(500).json({ error: "Password doesnt match" });
        }
        return res.status(500).json({ error: "User doesnt exist." });
    }
    catch (error) {
        return res.status(500).json({ error: "An error Occured in Login" });
    }
}));
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const userData = yield user_2.default.findOneAndUpdate({
            email: email,
        }, {
            email,
            password: hashedPassword,
        }, {
            upsert: true,
            new: true,
        }).exec();
        const token = (0, jwt_1.generateToken)({
            email: email,
        }, user_1.tokenPayload);
        const idToken = (0, jwt_1.generateToken)(userData.toJSON(), user_1.tokenPayload);
        res.status(200).json({ token, idToken, message: "Registered User" });
    }
    catch (error) {
        res.status(500).json({ error });
    }
}));
router.post("/googleSignIn", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { credential } = req.body;
        const ticket = yield client.verifyIdToken({
            idToken: credential,
            audience: clientId,
        });
        const payload = ticket.getPayload();
        if (payload === null || payload === void 0 ? void 0 : payload.email) {
            const userData = yield user_2.default.findOneAndUpdate({
                email: payload.email,
            }, {
                email: payload.email,
            }, {
                upsert: true,
                new: true,
            }).exec();
            const token = (0, jwt_1.generateToken)({
                name: payload === null || payload === void 0 ? void 0 : payload.given_name,
                email: payload === null || payload === void 0 ? void 0 : payload.email,
            }, user_1.tokenPayload);
            const idToken = (0, jwt_1.generateToken)(userData.toJSON(), user_1.tokenPayload);
            return res.status(200).json({ token, idToken, message: "Logged In" });
        }
        return res.status(500).json({ message: "Email signin failed" });
    }
    catch (error) {
        res.status(500).json({ error });
    }
}));
router.post("/forgotPassword", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_2.default.findOne({ email: req.body.email });
        if (user) {
            const forgetPasswordString = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "..", "..", "templates", "forgotPassword.html")).toString();
            const replacedString = forgetPasswordString.replace("{{link}}", `<a href="http://localhost:3000/resetPassword/${user._id}">Reset password </a>`);
            yield (0, mail_1.default)({
                to: req.body.email,
                subject: "Reset Password",
                html: replacedString,
            });
            return res.status(200).json({ message: "Send Email attempted" });
        }
        return res.status(500).json({ message: "User doesnt exit" });
    }
    catch (error) {
        return res.status(500).json({ message: "An error occured" });
    }
}));
router.post("/resetPassword/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, password } = req.body;
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        yield user_2.default.findByIdAndUpdate(userId, {
            password: hashedPassword,
        });
        res
            .status(200)
            .json({ message: "Resetting password is successfully done" });
    }
    catch (error) {
        res.status(500).json({ error });
    }
}));
router.post("/refreshToken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        const verifiedToken = (0, jwt_1.verifyToken)(token, {
            issuer: "Jove",
            algorithms: ["RS256"],
        });
        const refreshToken = (0, jwt_1.generateToken)({
            email: verifiedToken["email"],
        }, user_1.tokenPayload);
        res.status(200).json({ refreshToken: refreshToken });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
