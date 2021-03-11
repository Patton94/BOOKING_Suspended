import mongoose, { Schema, Document } from "mongoose";

export interface IAdmin extends Document {
  name: string;
  surname?: string;
  position?: string;
  login: string;
  password: string;
}

const AdminSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  position: {
    type: String,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IAdmin>("Admin", AdminSchema);
