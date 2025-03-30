import mongoose from 'mongoose';

const URL="mongodb://127.0.0.1:27017/plantdata";
mongoose.connect(URL);

console.log("Database connected sucessfully");
mongoose.connection.on("connected", () => console.log("MongoDB connected"));
mongoose.connection.on("error", (err) => console.error("MongoDB connection error:", err));


