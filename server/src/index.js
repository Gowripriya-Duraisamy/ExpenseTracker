"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const unAuth_1 = require("./routes/unAuth");
const auth_1 = require("./routes/auth");
const auth_2 = require("./auth");
const app = (0, express_1.default)();
const { db, host, username, password } = config_1.development;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", unAuth_1.UnAuthRoutes);
app.use("/auth/api", auth_2.authorizedMiddleware, auth_1.AuthRoutes);
app.listen(5000, () => {
    mongoose_1.default
        .connect(`mongodb+srv://${username}:${password}@${host}/${db}`)
        .then(() => {
        console.log("listening in the port 5000");
    })
        .catch((error) => {
        console.log("An error occured on mongo db connection", error);
    });
});
