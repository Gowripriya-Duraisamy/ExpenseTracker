import { model, Schema } from "mongoose";

export interface Delete {
  reason: string;
  reasonData: string;
  userId: Schema.Types.ObjectId;
}

const DeleteSchema = new Schema<Delete>({
  reason: {
    type: String,
  },
  reasonData: {
    type: String,
    default: ''
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
},
});

export default model("Delete", DeleteSchema, "delete");
