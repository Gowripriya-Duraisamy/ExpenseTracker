import { model, Schema } from "mongoose";

export interface Wallet {
    name: string;
    imageId: number;
    currency: string;
    initialBalance: number;
    isTotalExcluded: boolean;
    isArchived: boolean;
    userId: Schema.Types.ObjectId;
}

const WalletSchema = new Schema<Wallet>({
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
        type: Schema.Types.ObjectId
    }
});

export default model("wallet", WalletSchema, "wallet");