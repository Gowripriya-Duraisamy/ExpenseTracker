"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DeleteSchema = new mongoose_1.Schema({
    reason: {
        type: String,
    },
    reasonData: {
        type: String,
        default: ''
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
});
exports.default = (0, mongoose_1.model)("Delete", DeleteSchema, "delete");
