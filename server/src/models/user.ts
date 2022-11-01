import { model, Schema } from "mongoose";

export interface UserProfile {
  email: string;
  password: string;
}

const UserProfileSchema = new Schema<UserProfile>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
});

export default model("User", UserProfileSchema, "user");
