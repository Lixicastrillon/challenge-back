import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/challenge"); // puerto / nombre de base de datos
    console.log("database connected");
  } catch (error) {
    console.log("Error connecting to the database");
  }
};

export default connect;
