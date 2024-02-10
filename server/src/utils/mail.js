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
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
const config_1 = require("../config");
const SendMail = (mailOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const mailerTransport = (0, nodemailer_1.createTransport)({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAUTH2",
            user: config_1.development.email,
            password: config_1.development.emailPassword,
            clientId: config_1.development.clientId,
            clientSecret: config_1.development.clientSecret,
            accessToken: config_1.development.accessToken,
            refreshToken: config_1.development.refreshToken
        }
    });
    return mailerTransport.sendMail(Object.assign(Object.assign({}, mailOptions), { from: config_1.development.email }), (err, info) => {
        if (err) {
            console.log("Email sent Failed with err", err);
        }
        else {
            console.log("Email sent successfully", info.response);
        }
    });
});
exports.default = SendMail;
