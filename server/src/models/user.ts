import { model, Schema } from "mongoose";

export interface UserProfile {
  email: string;
  password: string;
  walletExist: boolean
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
  }
});

export default model("User", UserProfileSchema, "user");
