"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WalletSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    imageId: {
        type: Number
    },
    currency: {
        type: String
    },
    initialBalance: {
        type: Number
    },
    isTotalExcluded: {
        type: Boolean
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId
    }
});
exports.default = (0, mongoose_1.model)("wallet", WalletSchema, "wallet");
