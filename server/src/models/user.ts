import { model, Schema } from "mongoose";

export interface UserProfile {
  email: string;
  password: string;
  walletExist: boolean;
  expireAt?: string;
}

const UserProfileSchema = new Schema<UserProfile>({
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
UserProfileSchema.index({"expireAt": 1 },{ expireAfterSeconds: 0 });

export default model("User", UserProfileSchema, "user");
