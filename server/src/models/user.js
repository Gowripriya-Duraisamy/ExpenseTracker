"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserProfileSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: ''
    },
    walletExist: {
        type: Boolean,
        default: false
    },
    expireAt: {
        type: Date
    }
});
UserProfileSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });
exports.default = (0, mongoose_1.model)("User", UserProfileSchema, "user");
