import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  sex: {
    type: String,
    enum: ["male", "female"],
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
    lowercase: true,
  },
});

export default model("User", UserSchema); // nombre de tabla - nombre de schema
